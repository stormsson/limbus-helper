import { NextResponse } from 'next/server';
import { JSDOM } from 'jsdom';
import { sinners, type Sinner, type Identity } from '../../../../data/roster';

type TmpStructure = Record<string, { 
  href: string; 
  image: string; 
  character: string;
  rarity: string;
  traits: string[];
}>;

// Helper function to clean the extracted table
const _cleanTable = (table: Element): string => {

  // Remove all attributes except alt and title from all elements
  const removeAttributesExcept = (element: Element) => {
    const attributes = Array.from(element.attributes);
    attributes.forEach(attr => {
      if (!['alt', 'title', 'class', 'src', 'href'].includes(attr.name)) {
        element.removeAttribute(attr.name);
      }
    });
    
    // Recursively process child elements
    Array.from(element.children).forEach(child => {
      removeAttributesExcept(child);
    });
  };
  
  removeAttributesExcept(table);
  
  // from each odd row extract the text of the span in it, and append it to an array
  // const oddRows = table.querySelectorAll('tr:nth-child(odd)');
  // const charactersNames = Array.from(oddRows).map((row) => {
  //   const span = row.querySelector('span');
  //   return span?.textContent;
  // }).filter((text) => text !== null);


  // Remove even rows from the table
  const rows = table.querySelectorAll('tr');

  rows.forEach((row, index) => {
    if (index % 2 === 0) { 
      row.remove();
    }
  });
  
  // remove all divs with class Rar2 or Rar1
  const divs = table.querySelectorAll('div.Rar2, div.Rar1');
  divs.forEach(div => {
    div.remove();
  });


  // iterate each div.IDRec, it will contain this structure: 'a','a','div'.
  // we want to remove the div and the first 'a'
  const idRecs = table.querySelectorAll('div.IDRec');

  idRecs.forEach(idRec => {
    const div = idRec.querySelector('div');
    const a = idRec.querySelector('a');
    div?.remove();
    a?.remove();
  });

  // remove all empty div.IDRec
  const emptyIdRecs = table.querySelectorAll('div.IDRec:empty');
  emptyIdRecs.forEach(emptyIdRec => {
    emptyIdRec.remove();
  });


  
  return table.outerHTML;
};

const _prepareDataStructure = async (extractedTable: string): Promise<TmpStructure> => {
  const result: TmpStructure = {};
  const domain = "https://limbuscompany.wiki.gg"


  // Extract all character names from the roster
  const charactersNames = sinners.map((sinner: Sinner) => sinner.name);

  // Create a DOM parser to work with the extracted table
  const dom = new JSDOM(extractedTable);
  const document = dom.window.document;

  // iterate each row in the table
  const rows = document.querySelectorAll('tr');
  for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    const row = rows[rowIndex];
    // FOR EACH row, iterate idrecs and the logic in it
    const idRecs = row.querySelectorAll('div.IDRec');
    
    for (let idx = 0; idx < idRecs.length; idx++) {
      const idRec = idRecs[idx];
      const link = idRec.querySelector('a');
      const img = idRec.querySelector('img');
      
      if (link && img) {
        const title = link.getAttribute('title');
        const href = link.getAttribute('href');
        const image = img.getAttribute('src');
        
        if (!title) {
          console.error("title not found, skipping", rowIndex, idx);
          continue;
        }

        // fetch domain + href in a new document
        const sinnerPageResponse = await fetch(domain + href);
        const html = await sinnerPageResponse.text();
        const dom = new JSDOM(html);
        const sinnerPageDocument = dom.window.document;
        
        // get the rarity from the document. using regexp find a string like IDNumber2.png
        const rarityRegex = /IDNumber(\d+)\.png/;
        const rarityMatch = html.match(rarityRegex);
        const rarity = rarityMatch ? '0'.repeat(Number(rarityMatch[1])) : '??';

        // get the traits from the document @ div.ABMobile:nth-child(3) > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(2)
        const traits = sinnerPageDocument.querySelector('div.ABMobile:nth-child(3) > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(2)');
        // get all 'a' from the traits and get the text content of each
        const traitsLinks = traits?.querySelectorAll('a');
        const traitsText = Array.from(traitsLinks || []).map((link: Element) => link.textContent || '');

        
        result[title] = {
          href: href || '#',
          image: image || '#',
          rarity: rarity,
          character: charactersNames[rowIndex] || 'Unknown',
          traits: traitsText
        };
      }
    }
  }

  const _removePresentIdentities = (result: TmpStructure) => {
    // iterate all sinners
    sinners.forEach((sinner: Sinner) => {
      sinner.identities?.forEach((identity: Identity) => {
        delete result[identity.name];
      });
    });
  };

  _removePresentIdentities(result);
  
  return result;
};

const _updateRoster = (dataStructure: TmpStructure) => {

  // iterate datastructure and update the roster
  Object.keys(dataStructure).forEach((key) => {
    const identity = dataStructure[key];



    const sinner = sinners.find((sinner: Sinner) => sinner.name === identity.character);
    if (sinner && identity.href) {
      sinner.identities?.push({
        name: key,
        image: identity.image,
        rarity: identity.rarity,
        ID: 1 + sinner.identities?.length || 0,
        wikiUrl: identity.href,
        traits: identity.traits
      });
    }
  });

  return sinners
};

export async function GET() {
  // 1) Scrape the page at the URL
  const wikiUrl = 'https://limbuscompany.wiki.gg/wiki/List_of_Identities';
  
  // 2) Get its HTML in a variable
  let wikiHtml: string;
  try {
    const response = await fetch(wikiUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    wikiHtml = await response.text();
  } catch (error) {
    console.error('Error fetching wiki page:', error);
    wikiHtml = 'Error fetching wiki page';
  }
  
  // 3) Extract only the specific table using CSS selector
  let extractedTable: string = '';
  if (wikiHtml !== 'Error fetching wiki page') {
    try {
      // Create a DOM parser
      const dom = new JSDOM(wikiHtml);
      const document = dom.window.document;

      
      // Use CSS selector to find the specific table
      // .mw-content-ltr > table:nth-child(6)
      const table = document.querySelector('.mw-content-ltr > table:nth-child(6)');
      
      if (table && table.tagName === 'TABLE') {
        extractedTable = _cleanTable(table);
      } else {
        extractedTable = 'Table not found with CSS selector .mw-content-ltr > table:nth-child(6)';
      }
    } catch (error) {
      console.error('Error parsing HTML:', error);
      extractedTable = 'Error parsing HTML';
    }
  } else {
    extractedTable = 'Cannot extract table from error response';
  }

  const dataStructure = await _prepareDataStructure( extractedTable);


  const roster =_updateRoster(dataStructure);

  
  return NextResponse.json({ 
    message: 'hello',
    //extractedTable: extractedTable,
    dataStructure: dataStructure,
    roster: roster
  });
} 