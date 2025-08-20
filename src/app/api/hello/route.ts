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


const _prepareDataStructure = async (allIdentitiesRows: NodeList): Promise<TmpStructure> => {

  const result: TmpStructure = {};
  const domain = "https://limbuscompany.wiki.gg"


  // Extract all character names from the roster
  const charactersNames = sinners.map((sinner: Sinner) => sinner.name);

  for (let sinnerIndex = 0; sinnerIndex < allIdentitiesRows.length; sinnerIndex++) {
    const currentRow = allIdentitiesRows[sinnerIndex] as Element;
    const rowIdentities = currentRow.querySelectorAll('div.IDRec');

    for (let identityIndex = 0; identityIndex < rowIdentities.length; identityIndex++) {
      const idRec: Element = rowIdentities[identityIndex] as Element;
      const link: Element | null = idRec.querySelector('a');
      const img: Element | null = idRec.querySelector('img');

      if (link && img) {
        const title = link.getAttribute('title');
        const href = link.getAttribute('href');
        const image = img.getAttribute('src');
        
        if (!title) {
          console.error("title not found, skipping", sinnerIndex, identityIndex);
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
        const traits = sinnerPageDocument.querySelector('#General_Info-0 > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(2)');
        // get all trait spans and extract text from either 'a' tags or 'b' tags
        
        const traitsSpans = traits?.querySelectorAll('span');
        const traitsText: string[] = [];
        
        if (traitsSpans) {
          Array.from(traitsSpans).forEach((span: Element) => {
            const link = span.querySelector('a');
            const bold = span.querySelector('b');
            
            if (link) {
              // If span has an 'a' tag, get its text content
              traitsText.push(link.textContent || '');
            } else if (bold) {
              // If span has a 'b' tag, get its text content
              traitsText.push(bold.textContent || '');
            }
          });
        }
  
        
        result[title] = {
          href: href || '#',
          image: image || '#',
          rarity: rarity,
          character: charactersNames[sinnerIndex] || 'Unknown',
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


}

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
  let allIdentitiesRows: NodeList;

  if (wikiHtml !== 'Error fetching wiki page') {
    try {
      // Create a DOM parser
      const dom = new JSDOM(wikiHtml);
      const document = dom.window.document;

      allIdentitiesRows = document.querySelectorAll('div.nomobile');      

      

    } catch (error) {
      console.error('Error parsing HTML:', error);
      extractedTable = 'Error parsing HTML';
    }
  } else {
    extractedTable = 'Cannot extract table from error response';
  }



  const dataStructure = await _prepareDataStructure( allIdentitiesRows);


  const roster =_updateRoster(dataStructure);

  
  return NextResponse.json({ 
    message: 'hello',
    //extractedTable: extractedTable,
    dataStructure: dataStructure,
    roster: roster
  });
} 