export type Sin = 'wrath' | 'lust' | 'sloth' | 'gluttony' | 'gloom' | 'envy' | 'pride';
export type DamageType = 'slash' | 'pierce' | 'blunt';
export type Affinity = 'normal' | 'weak' | 'strong';
export type Effect = 'burn' | 'bleed' | 'tremor' | 'rupture' | 'sinking' | 'poise' | 'charge'

export interface Skill {
  name: string;
  damageType: DamageType;
  sin: Sin;
  coins: number;
  basePower: number;
  coinPower: number;
  power:number;
}
type DefenseSkill = Omit<Skill, 'damageType'>;

export interface Identity {
  ID: number;
  name: string; // character name
  image: string;
  rarity: string;
  skills?: Skill[];
  defense?: DefenseSkill;
  affinity?: Record<Sin, Affinity>;
  wikiUrl?: string;
  traits?: string[];
  primaryEffect?: Effect;
}


export interface Sinner {
    ID: number;
    name: string;
    image: string;
    identities?: Identity[];
}


// rif: https://limbuscompany.wiki.gg/wiki/List_of_Identities
export const rarityImages = {
    "0": "/images/0.webp",
    "00": "/images/00.webp",
    "000": "/images/000.webp",
}

export const getSinnerIdentity = (sinner_id: number, identity_id: number) => {
  return sinners.find(sinner => sinner.ID === sinner_id)?.identities?.find(identity => identity.ID === identity_id);
}

export const getSinnerByIdentityName = (identity_name: string): Sinner | undefined => {
  return sinners.find(sinner => sinner.identities?.some(identity => identity.name === identity_name));
}


// MAINTAIN THE ORDER OF THE SINNERS AND IDENTITIES
export const sinners: Sinner[] = [
  {
    "ID": 1,
    "name": "Yi Sang",
    "image": "https://static.wikia.nocookie.net/limbuscompany/images/8/81/Yi_Sang_StoryLog.png",
    "identities": [
      {
        "name": "LCB Sinner Yi Sang",
        "image": "https://limbuscompany.wiki.gg/images/thumb/e/e9/LCB_Sinner_Yi_Sang.png/125px-LCB_Sinner_Yi_Sang.png?97d5e9",
        "rarity": "0",
        "ID": 1,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/LCB_Sinner_Yi_Sang"
      },
      {
        "name": "Seven Assoc. South Section 6 Yi Sang",
        "image": "https://limbuscompany.wiki.gg/images/thumb/3/34/Seven_Assoc._South_Section_6_Yi_Sang.png/125px-Seven_Assoc._South_Section_6_Yi_Sang.png?3af601",
        "rarity": "00",
        "ID": 2,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Seven_Assoc._South_Section_6_Yi_Sang"
      },
      {
        "name": "Molar Office Fixer Yi Sang",
        "image": "https://limbuscompany.wiki.gg/images/thumb/5/59/Molar_Office_Fixer_Yi_Sang.png/125px-Molar_Office_Fixer_Yi_Sang.png?bf05c8",
        "rarity": "00",
        "ID": 3,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Molar_Office_Fixer_Yi_Sang"
      },
      {
        "name": "The Pequod First Mate Yi Sang",
        "image": "https://limbuscompany.wiki.gg/images/thumb/0/04/The_Pequod_First_Mate_Yi_Sang.png/125px-The_Pequod_First_Mate_Yi_Sang.png?93129b",
        "rarity": "00",
        "ID": 4,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/The_Pequod_First_Mate_Yi_Sang"
      },
      {
        "name": "Dieci Assoc. South Section 4 Yi Sang",
        "image": "https://limbuscompany.wiki.gg/images/thumb/f/f7/Dieci_Assoc._South_Section_4_Yi_Sang.png/125px-Dieci_Assoc._South_Section_4_Yi_Sang.png?ac1315",
        "rarity": "00",
        "ID": 5,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Dieci_Assoc._South_Section_4_Yi_Sang"
      },
      {
        "name": "LCE E.G.O::Lantern Yi Sang",
        "image": "https://limbuscompany.wiki.gg/images/thumb/7/7c/LCE_E.G.O_Lantern_Yi_Sang.png/125px-LCE_E.G.O_Lantern_Yi_Sang.png?8b7e19",
        "rarity": "00",
        "ID": 6,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/LCE_E.G.O::Lantern_Yi_Sang"
      },
      {
        "name": "Blade Lineage Salsu Yi Sang",
        "image": "https://limbuscompany.wiki.gg/images/thumb/7/7c/Blade_Lineage_Salsu_Yi_Sang.png/125px-Blade_Lineage_Salsu_Yi_Sang.png?f800cf",
        "rarity": "000",
        "ID": 7,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Blade_Lineage_Salsu_Yi_Sang"
      },
      {
        "name": "Effloresced E.G.O::Spicebush Yi Sang",
        "image": "https://limbuscompany.wiki.gg/images/thumb/8/83/Effloresced_E.G.O_Spicebush_Yi_Sang.png/125px-Effloresced_E.G.O_Spicebush_Yi_Sang.png?7fa489",
        "rarity": "000",
        "ID": 8,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Effloresced_E.G.O::Spicebush_Yi_Sang"
      },
      {
        "name": "W Corp. L3 Cleanup Agent Yi Sang",
        "image": "https://limbuscompany.wiki.gg/images/thumb/a/a3/W_Corp._L3_Cleanup_Agent_Yi_Sang.png/125px-W_Corp._L3_Cleanup_Agent_Yi_Sang.png?a13357",
        "rarity": "000",
        "ID": 9,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/W_Corp._L3_Cleanup_Agent_Yi_Sang"
      },
      {
        "name": "The Ring Pointillist Student Yi Sang",
        "image": "https://limbuscompany.wiki.gg/images/thumb/1/1e/The_Ring_Pointillist_Student_Yi_Sang.png/125px-The_Ring_Pointillist_Student_Yi_Sang.png?748416",
        "rarity": "000",
        "ID": 10,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/The_Ring_Pointillist_Student_Yi_Sang",
        "traits": [
          "Syndicate",
          "The Ring"
        ],
        "defense": {
          "name": "Beat the Brush",
          "coins": 1,
          "basePower": 10,
          "coinPower": 4,
          "power": 51,
          "sin": "lust"
        },
        "skills": [
          {
            "name": "Paint Over",
            "damageType": "pierce",
            "coins": 3,
            "basePower": 2,
            "coinPower": 2,
            "sin": "gloom",
            "power": 53
          },
          {
            "name": "Sanguine Pointilism",
            "damageType": "pierce",
            "coins": 1,
            "basePower": 8,
            "coinPower": 8,
            "sin": "lust",
            "power": 53
          },
          {
            "name": "Hematic Coloring",
            "damageType": "pierce",
            "coins": 4,
            "basePower": 3,
            "coinPower": 3,
            "sin": "sloth",
            "power": 53
          }
        ]
      },
      {
        "name": "Lobotomy E.G.O::Solemn Lament Yi Sang",
        "image": "https://limbuscompany.wiki.gg/images/thumb/9/95/Lobotomy_E.G.O_Solemn_Lament_Yi_Sang.png/125px-Lobotomy_E.G.O_Solemn_Lament_Yi_Sang.png?c9bd63",
        "rarity": "000",
        "ID": 11,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Lobotomy_E.G.O::Solemn_Lament_Yi_Sang"
      },
      {
        "name": "Liu Assoc. South Section 3 Yi Sang",
        "image": "https://limbuscompany.wiki.gg/images/thumb/e/e3/Liu_Assoc._South_Section_3_Yi_Sang.png/125px-Liu_Assoc._South_Section_3_Yi_Sang.png?31d39b",
        "rarity": "000",
        "ID": 12,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Liu_Assoc._South_Section_3_Yi_Sang"
      }
    ]
  },
  {
    "ID": 2,
    "name": "Faust",
    "image": "https://static.wikia.nocookie.net/limbuscompany/images/c/c9/Faust_StoryLog.png",
    "identities": [
      {
        "name": "LCB Sinner Faust",
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/LCB_Sinner_Faust",
        "image": "https://limbuscompany.wiki.gg/images/thumb/a/a8/LCB_Sinner_Faust.png/125px-LCB_Sinner_Faust.png?4c4daf",
        "rarity": "0",
        "ID": 1
      },
      {
        "name": "W Corp. L2 Cleanup Agent Faust",
        "image": "https://limbuscompany.wiki.gg/images/thumb/4/4e/W_Corp._L2_Cleanup_Agent_Faust.png/125px-W_Corp._L2_Cleanup_Agent_Faust.png?8889bf",
        "rarity": "00",
        "ID": 2,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/W_Corp._L2_Cleanup_Agent_Faust"
      },
      {
        "name": "Lobotomy Corp. Remnant Faust",
        "image": "https://limbuscompany.wiki.gg/images/thumb/e/ef/Lobotomy_Corp._Remnant_Faust.png/125px-Lobotomy_Corp._Remnant_Faust.png?a05dd4",
        "rarity": "00",
        "ID": 3,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Lobotomy_Corp._Remnant_Faust"
      },
      {
        "name": "Zwei Assoc. South Section 4 Faust",
        "image": "https://limbuscompany.wiki.gg/images/thumb/9/92/Zwei_Assoc._South_Section_4_Faust.png/125px-Zwei_Assoc._South_Section_4_Faust.png?fa3760",
        "rarity": "00",
        "ID": 4,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Zwei_Assoc._South_Section_4_Faust"
      },
      {
        "name": "Wuthering Heights Butler Faust",
        "image": "https://limbuscompany.wiki.gg/images/thumb/f/fb/Wuthering_Heights_Butler_Faust.png/125px-Wuthering_Heights_Butler_Faust.png?e4bd0b",
        "rarity": "00",
        "ID": 5,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Wuthering_Heights_Butler_Faust"
      },
      {
        "name": "The One Who Grips Faust",
        "image": "https://limbuscompany.wiki.gg/images/thumb/3/36/The_One_Who_Grips_Faust.png/125px-The_One_Who_Grips_Faust.png?91e1d2",
        "rarity": "000",
        "ID": 6,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/The_One_Who_Grips_Faust"
      },
      {
        "name": "Seven Assoc. South Section 4 Faust",
        "image": "https://limbuscompany.wiki.gg/images/thumb/e/e3/Seven_Assoc._South_Section_4_Faust.png/125px-Seven_Assoc._South_Section_4_Faust.png?ec7784",
        "rarity": "000",
        "ID": 7,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Seven_Assoc._South_Section_4_Faust"
      },
      {
        "name": "Lobotomy E.G.O::Regret Faust",
        "image": "https://limbuscompany.wiki.gg/images/thumb/d/df/Lobotomy_E.G.O_Regret_Faust.png/125px-Lobotomy_E.G.O_Regret_Faust.png?31cf35",
        "rarity": "000",
        "ID": 8,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Lobotomy_E.G.O::Regret_Faust"
      },
      {
        "name": "Blade Lineage Salsu Faust",
        "image": "https://limbuscompany.wiki.gg/images/thumb/a/a0/Blade_Lineage_Salsu_Faust.png/125px-Blade_Lineage_Salsu_Faust.png?396351",
        "rarity": "000",
        "ID": 9,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Blade_Lineage_Salsu_Faust"
      },
      {
        "name": "MultiCrack Office Rep Faust",
        "image": "https://limbuscompany.wiki.gg/images/thumb/f/f1/MultiCrack_Office_Rep_Faust.png/125px-MultiCrack_Office_Rep_Faust.png?1e3751",
        "rarity": "000",
        "ID": 10,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/MultiCrack_Office_Rep_Faust"
      },
      {
        "name": "LCE E.G.O::Ardor Blossom Star Faust",
        "image": "https://limbuscompany.wiki.gg/images/thumb/5/5a/LCE_E.G.O_Ardor_Blossom_Star_Faust.png/125px-LCE_E.G.O_Ardor_Blossom_Star_Faust.png?25e055",
        "rarity": "000",
        "ID": 11,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/LCE_E.G.O::Ardor_Blossom_Star_Faust"
      },
      {
        "name": "Heishou Pack - Mao Branch Adept Faust",
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Heishou_Pack_-_Mao_Branch_Adept_Faust",
        "primaryEffect": "rupture",
        "traits": [
          "Heishou Pack",
          "Heishou Pack - Mao Branch"
        ],
        "image": "https://limbuscompany.wiki.gg/images/thumb/9/93/Heishou_Pack_-_Mao_Branch_Adept_Faust_Uptied.png/125px-Heishou_Pack_-_Mao_Branch_Adept_Faust_Uptied.png?e1c51a",
        "rarity": "000",
        "ID": 12
      }
    ]
  },
  {
    "ID": 3,
    "name": "Don Quixote",
    "image": "https://static.wikia.nocookie.net/limbuscompany/images/d/da/Don_Quixote_StoryLog.png",
    "identities": [
      {
        "name": "LCB Sinner Don Quixote",
        "image": "https://limbuscompany.wiki.gg/images/thumb/5/55/LCB_Sinner_Don_Quixote.png/125px-LCB_Sinner_Don_Quixote.png?d47b41",
        "rarity": "0",
        "ID": 1,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/LCB_Sinner_Don_Quixote"
      },
      {
        "name": "Shi Assoc. South Section 5 Director Don Quixote",
        "image": "https://limbuscompany.wiki.gg/images/thumb/8/8d/Shi_Assoc._South_Section_5_Director_Don_Quixote.png/125px-Shi_Assoc._South_Section_5_Director_Don_Quixote.png?106b58",
        "rarity": "00",
        "ID": 2,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Shi_Assoc._South_Section_5_Director_Don_Quixote"
      },
      {
        "name": "N Corp. Mittelhammer Don Quixote",
        "image": "https://limbuscompany.wiki.gg/images/thumb/2/23/N_Corp._Mittelhammer_Don_Quixote.png/125px-N_Corp._Mittelhammer_Don_Quixote.png?c5e256",
        "rarity": "00",
        "ID": 3,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/N_Corp._Mittelhammer_Don_Quixote"
      },
      {
        "name": "Lobotomy E.G.O::Lantern Don Quixote",
        "image": "https://limbuscompany.wiki.gg/images/thumb/6/68/Lobotomy_E.G.O_Lantern_Don_Quixote.png/125px-Lobotomy_E.G.O_Lantern_Don_Quixote.png?c3e029",
        "rarity": "00",
        "ID": 4,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Lobotomy_E.G.O::Lantern_Don_Quixote"
      },
      {
        "name": "Blade Lineage Salsu Don Quixote",
        "image": "https://limbuscompany.wiki.gg/images/thumb/4/4a/Blade_Lineage_Salsu_Don_Quixote.png/125px-Blade_Lineage_Salsu_Don_Quixote.png?fd8668",
        "rarity": "00",
        "ID": 5,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Blade_Lineage_Salsu_Don_Quixote"
      },
      {
        "name": "W Corp. L3 Cleanup Agent Don Quixote",
        "image": "https://limbuscompany.wiki.gg/images/thumb/4/4a/W_Corp._L3_Cleanup_Agent_Don_Quixote.png/125px-W_Corp._L3_Cleanup_Agent_Don_Quixote.png?a48758",
        "rarity": "000",
        "ID": 6,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/W_Corp._L3_Cleanup_Agent_Don_Quixote"
      },
      {
        "name": "Cinq Assoc. South Section 5 Director Don Quixote",
        "image": "https://limbuscompany.wiki.gg/images/thumb/6/60/Cinq_Assoc._South_Section_5_Director_Don_Quixote.png/125px-Cinq_Assoc._South_Section_5_Director_Don_Quixote.png?924d53",
        "rarity": "000",
        "ID": 7,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Cinq_Assoc._South_Section_5_Director_Don_Quixote"
      },
      {
        "name": "The Middle Little Sister Don Quixote",
        "image": "https://limbuscompany.wiki.gg/images/thumb/1/14/The_Middle_Little_Sister_Don_Quixote.png/125px-The_Middle_Little_Sister_Don_Quixote.png?145177",
        "rarity": "000",
        "ID": 8,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/The_Middle_Little_Sister_Don_Quixote"
      },
      {
        "name": "T Corp. Class 3 Collection Staff Don Quixote",
        "image": "https://limbuscompany.wiki.gg/images/thumb/6/6d/T_Corp._Class_3_Collection_Staff_Don_Quixote.png/125px-T_Corp._Class_3_Collection_Staff_Don_Quixote.png?803999",
        "rarity": "000",
        "ID": 9,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/T_Corp._Class_3_Collection_Staff_Don_Quixote"
      },
      {
        "name": "The Manager of La Manchaland Don Quixote",
        "image": "https://limbuscompany.wiki.gg/images/thumb/7/75/The_Manager_of_La_Manchaland_Don_Quixote.png/125px-The_Manager_of_La_Manchaland_Don_Quixote.png?a08f5b",
        "rarity": "000",
        "ID": 10,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/The_Manager_of_La_Manchaland_Don_Quixote"
      },
      {
        "name": "Cinq Assoc. East Section 3 Don Quixote",
        "image": "https://limbuscompany.wiki.gg/images/thumb/1/1b/Cinq_Assoc._East_Section_3_Don_Quixote.png/125px-Cinq_Assoc._East_Section_3_Don_Quixote.png?244474",
        "rarity": "000",
        "ID": 11,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Cinq_Assoc._East_Section_3_Don_Quixote"
      }
    ]
  },
  {
    "ID": 4,
    "name": "Ryōshū",
    "image": "https://static.wikia.nocookie.net/limbuscompany/images/6/66/Ryoshu_StoryLog.png",
    "identities": [
      {
        "name": "LCB Sinner Ryōshū",
        "image": "https://limbuscompany.wiki.gg/images/thumb/d/da/LCB_Sinner_Ry%C5%8Dsh%C5%AB.png/125px-LCB_Sinner_Ry%C5%8Dsh%C5%AB.png?3b3101",
        "rarity": "0",
        "ID": 1
      },
      {
        "name": "Seven Assoc. South Section 6 Ryōshū",
        "image": "https://limbuscompany.wiki.gg/images/thumb/f/fa/Seven_Assoc._South_Section_6_Ry%C5%8Dsh%C5%AB.png/125px-Seven_Assoc._South_Section_6_Ry%C5%8Dsh%C5%AB.png?d3dee9",
        "rarity": "00",
        "ID": 2,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Seven_Assoc._South_Section_6_Ry%C5%8Dsh%C5%AB"
      },
      {
        "name": "LCCB Assistant Manager Ryōshū",
        "image": "https://limbuscompany.wiki.gg/images/thumb/e/e3/LCCB_Assistant_Manager_Ry%C5%8Dsh%C5%AB.png/125px-LCCB_Assistant_Manager_Ry%C5%8Dsh%C5%AB.png?3feaed",
        "rarity": "00",
        "ID": 3,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/LCCB_Assistant_Manager_Ry%C5%8Dsh%C5%AB"
      },
      {
        "name": "Liu Assoc. South Section 4 Ryōshū",
        "image": "https://limbuscompany.wiki.gg/images/thumb/e/e0/Liu_Assoc._South_Section_4_Ry%C5%8Dsh%C5%AB.png/125px-Liu_Assoc._South_Section_4_Ry%C5%8Dsh%C5%AB.png?e1cc6b",
        "rarity": "00",
        "ID": 4,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Liu_Assoc._South_Section_4_Ry%C5%8Dsh%C5%AB"
      },
      {
        "name": "District 20 Yurodivy Ryōshū",
        "image": "https://limbuscompany.wiki.gg/images/thumb/6/62/District_20_Yurodivy_Ry%C5%8Dsh%C5%AB.png/125px-District_20_Yurodivy_Ry%C5%8Dsh%C5%AB.png?949843",
        "rarity": "00",
        "ID": 5,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/District_20_Yurodivy_Ry%C5%8Dsh%C5%AB"
      },
      {
        "name": "Kurokumo Clan Wakashu Ryōshū",
        "image": "https://limbuscompany.wiki.gg/images/thumb/4/4e/Kurokumo_Clan_Wakashu_Ry%C5%8Dsh%C5%AB.png/125px-Kurokumo_Clan_Wakashu_Ry%C5%8Dsh%C5%AB.png?b1ba6b",
        "rarity": "000",
        "ID": 6,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Kurokumo_Clan_Wakashu_Ry%C5%8Dsh%C5%AB"
      },
      {
        "name": "R.B. Chef de Cuisine Ryōshū",
        "image": "https://limbuscompany.wiki.gg/images/thumb/7/71/R.B._Chef_de_Cuisine_Ry%C5%8Dsh%C5%AB.png/125px-R.B._Chef_de_Cuisine_Ry%C5%8Dsh%C5%AB.png?45e690",
        "rarity": "000",
        "ID": 7,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/R.B._Chef_de_Cuisine_Ry%C5%8Dsh%C5%AB"
      },
      {
        "name": "W Corp. L3 Cleanup Agent Ryōshū",
        "image": "https://limbuscompany.wiki.gg/images/thumb/0/0e/W_Corp._L3_Cleanup_Agent_Ry%C5%8Dsh%C5%AB.png/125px-W_Corp._L3_Cleanup_Agent_Ry%C5%8Dsh%C5%AB.png?65d1cc",
        "rarity": "000",
        "ID": 8,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/W_Corp._L3_Cleanup_Agent_Ry%C5%8Dsh%C5%AB"
      },
      {
        "name": "Edgar Family Chief Butler Ryōshū",
        "image": "https://limbuscompany.wiki.gg/images/thumb/b/bc/Edgar_Family_Chief_Butler_Ry%C5%8Dsh%C5%AB.png/125px-Edgar_Family_Chief_Butler_Ry%C5%8Dsh%C5%AB.png?7b6f01",
        "rarity": "000",
        "ID": 9,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Edgar_Family_Chief_Butler_Ry%C5%8Dsh%C5%AB"
      },
      {
        "name": "Lobotomy E.G.O::Red Eyes & Penitence Ryōshū",
        "image": "https://limbuscompany.wiki.gg/images/thumb/8/8e/Lobotomy_E.G.O_Red_Eyes_%26_Penitence_Ry%C5%8Dsh%C5%AB.png/125px-Lobotomy_E.G.O_Red_Eyes_%26_Penitence_Ry%C5%8Dsh%C5%AB.png?f6faaa",
        "rarity": "000",
        "ID": 10,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Lobotomy_E.G.O::Red_Eyes_%26_Penitence_Ry%C5%8Dsh%C5%AB"
      },
      {
        "name": "Heishou Pack - Mao Branch Ryōshū",
        "image": "https://limbuscompany.wiki.gg/images/thumb/c/c6/Heishou_Pack_-_Mao_Branch_Ry%C5%8Dsh%C5%AB.png/125px-Heishou_Pack_-_Mao_Branch_Ry%C5%8Dsh%C5%AB.png?2a2c03",
        "rarity": "000",
        "ID": 11,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Heishou_Pack_-_Mao_Branch_Ry%C5%8Dsh%C5%AB"
      }
    ]
  },
  {
    "ID": 5,
    "name": "Meursault",
    "image": "https://static.wikia.nocookie.net/limbuscompany/images/6/62/Meursault_StoryLog.png",
    "identities": [
      {
        "name": "LCB Sinner Meursault",
        "image": "https://limbuscompany.wiki.gg/images/thumb/1/11/LCB_Sinner_Meursault.png/125px-LCB_Sinner_Meursault.png?c88a91",
        "rarity": "0",
        "ID": 1
      },
      {
        "name": "Liu Assoc. South Section 6 Meursault",
        "image": "https://limbuscompany.wiki.gg/images/thumb/5/57/Liu_Assoc._South_Section_6_Meursault.png/125px-Liu_Assoc._South_Section_6_Meursault.png?5e305b",
        "rarity": "00",
        "ID": 2
      },
      {
        "name": "Rosespanner Workshop Fixer Meursault",
        "image": "https://limbuscompany.wiki.gg/images/thumb/b/b2/Rosespanner_Workshop_Fixer_Meursault.png/125px-Rosespanner_Workshop_Fixer_Meursault.png?f72f4c",
        "rarity": "00",
        "ID": 3
      },
      {
        "name": "The Middle Little Brother Meursault",
        "image": "https://limbuscompany.wiki.gg/images/thumb/c/c7/The_Middle_Little_Brother_Meursault.png/125px-The_Middle_Little_Brother_Meursault.png?2d657a",
        "rarity": "00",
        "ID": 4
      },
      {
        "name": "Dead Rabbits Boss Meursault",
        "image": "https://limbuscompany.wiki.gg/images/thumb/7/7f/Dead_Rabbits_Boss_Meursault.png/125px-Dead_Rabbits_Boss_Meursault.png?dffc52",
        "rarity": "00",
        "ID": 5
      },
      {
        "name": "W Corp. L2 Cleanup Agent Meursault",
        "image": "https://limbuscompany.wiki.gg/images/thumb/a/a1/W_Corp._L2_Cleanup_Agent_Meursault.png/125px-W_Corp._L2_Cleanup_Agent_Meursault.png?f9515c",
        "rarity": "000",
        "ID": 6
      },
      {
        "name": "N Corp. Großhammer Meursault",
        "image": "https://limbuscompany.wiki.gg/images/thumb/c/c0/N_Corp._Großhammer_Meursault.png/125px-N_Corp._Großhammer_Meursault.png?55a351",
        "rarity": "000",
        "ID": 7
      },
      {
        "name": "R Corp. 4th Pack Rhino Meursault",
        "image": "https://limbuscompany.wiki.gg/images/thumb/a/ab/R_Corp._4th_Pack_Rhino_Meursault.png/125px-R_Corp._4th_Pack_Rhino_Meursault.png?5cee80",
        "rarity": "000",
        "ID": 8
      },
      {
        "name": "Blade Lineage Mentor Meursault",
        "image": "https://limbuscompany.wiki.gg/images/thumb/3/36/Blade_Lineage_Mentor_Meursault.png/125px-Blade_Lineage_Mentor_Meursault.png?c66517",
        "rarity": "000",
        "ID": 9
      },
      {
        "name": "Dieci Assoc. South Section 4 Director Meursault",
        "image": "https://limbuscompany.wiki.gg/images/thumb/1/17/Dieci_Assoc._South_Section_4_Director_Meursault.png/125px-Dieci_Assoc._South_Section_4_Director_Meursault.png?7cd89a",
        "rarity": "000",
        "ID": 10
      },
      {
        "name": "Cinq Assoc. West Section 3 Meursault",
        "image": "https://limbuscompany.wiki.gg/images/thumb/1/1b/Cinq_Assoc._West_Section_3_Meursault.png/125px-Cinq_Assoc._West_Section_3_Meursault.png?565592",
        "rarity": "000",
        "ID": 11
      },
      {
        "name": "The Thumb East Capo IIII Meursault",
        "image": "https://limbuscompany.wiki.gg/images/thumb/8/8a/The_Thumb_East_Capo_IIII_Meursault.png/125px-The_Thumb_East_Capo_IIII_Meursault.png?3d527e",
        "rarity": "000",
        "ID": 12,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/The_Thumb_East_Capo_IIII_Meursault"
      }
    ]
  },
  {
    "ID": 6,
    "name": "Hong Lu",
    "image": "https://static.wikia.nocookie.net/limbuscompany/images/a/a7/Hong_Lu_StoryLog.png",
    "identities": [
      {
        "name": "LCB Sinner Hong Lu",
        "image": "https://limbuscompany.wiki.gg/images/thumb/9/94/LCB_Sinner_Hong_Lu.png/125px-LCB_Sinner_Hong_Lu.png?72e433",
        "rarity": "0",
        "ID": 1
      },
      {
        "name": "Kurokumo Clan Wakashu Hong Lu",
        "image": "https://limbuscompany.wiki.gg/images/thumb/5/55/Kurokumo_Clan_Wakashu_Hong_Lu.png/125px-Kurokumo_Clan_Wakashu_Hong_Lu.png?94ed47",
        "rarity": "00",
        "ID": 2
      },
      {
        "name": "Liu Assoc. South Section 5 Hong Lu",
        "image": "https://limbuscompany.wiki.gg/images/thumb/e/e0/Liu_Assoc._South_Section_5_Hong_Lu.png/125px-Liu_Assoc._South_Section_5_Hong_Lu.png?1c056c",
        "rarity": "00",
        "ID": 3
      },
      {
        "name": "W Corp. L2 Cleanup Agent Hong Lu",
        "image": "https://limbuscompany.wiki.gg/images/thumb/0/0a/W_Corp._L2_Cleanup_Agent_Hong_Lu.png/125px-W_Corp._L2_Cleanup_Agent_Hong_Lu.png?c991de",
        "rarity": "00",
        "ID": 4
      },
      {
        "name": "Hook Office Fixer Hong Lu",
        "image": "https://limbuscompany.wiki.gg/images/thumb/1/18/Hook_Office_Fixer_Hong_Lu.png/125px-Hook_Office_Fixer_Hong_Lu.png?6d558a",
        "rarity": "00",
        "ID": 5
      },
      {
        "name": "Fanghunt Office Fixer Hong Lu",
        "image": "https://limbuscompany.wiki.gg/images/thumb/1/11/Fanghunt_Office_Fixer_Hong_Lu.png/125px-Fanghunt_Office_Fixer_Hong_Lu.png?c95a63",
        "rarity": "00",
        "ID": 6
      },
      {
        "name": "Tingtang Gang Gangleader Hong Lu",
        "image": "https://limbuscompany.wiki.gg/images/thumb/a/ac/Tingtang_Gang_Gangleader_Hong_Lu.png/125px-Tingtang_Gang_Gangleader_Hong_Lu.png?57b2f0",
        "rarity": "000",
        "ID": 7
      },
      {
        "name": "K Corp. Class 3 Excision Staff Hong Lu",
        "image": "https://limbuscompany.wiki.gg/images/thumb/7/70/K_Corp._Class_3_Excision_Staff_Hong_Lu.png/125px-K_Corp._Class_3_Excision_Staff_Hong_Lu.png?959121",
        "rarity": "000",
        "ID": 8
      },
      {
        "name": "Dieci Assoc. South Section 4 Hong Lu",
        "image": "https://limbuscompany.wiki.gg/images/thumb/d/d4/Dieci_Assoc._South_Section_4_Hong_Lu.png/125px-Dieci_Assoc._South_Section_4_Hong_Lu.png?4503ae",
        "rarity": "000",
        "ID": 9
      },
      {
        "name": "District 20 Yurodivy Hong Lu",
        "image": "https://limbuscompany.wiki.gg/images/thumb/9/95/District_20_Yurodivy_Hong_Lu.png/125px-District_20_Yurodivy_Hong_Lu.png?b06de7",
        "rarity": "000",
        "ID": 10
      },
      {
        "name": "Full-Stop Office Rep Hong Lu",
        "image": "https://limbuscompany.wiki.gg/images/thumb/8/81/Full-Stop_Office_Rep_Hong_Lu.png/125px-Full-Stop_Office_Rep_Hong_Lu.png?7693d8",
        "rarity": "000",
        "ID": 11
      },
      {
        "name": "R Corp. 4th Pack Reindeer Hong Lu",
        "image": "https://limbuscompany.wiki.gg/images/thumb/3/3c/R_Corp._4th_Pack_Reindeer_Hong_Lu.png/125px-R_Corp._4th_Pack_Reindeer_Hong_Lu.png?8e2e3e",
        "rarity": "000",
        "ID": 12
      }
    ]
  },
  {
    "ID": 7,
    "name": "Heathcliff",
    "image": "https://static.wikia.nocookie.net/limbuscompany/images/1/13/Heathcliff_StoryLog.png",
    "identities": [
      {
        "name": "LCB Sinner Heathcliff",
        "image": "https://limbuscompany.wiki.gg/images/thumb/7/77/LCB_Sinner_Heathcliff.png/125px-LCB_Sinner_Heathcliff.png?1e1ff5",
        "rarity": "0",
        "ID": 1
      },
      {
        "name": "Shi Assoc. South Section 5 Heathcliff",
        "image": "https://limbuscompany.wiki.gg/images/thumb/e/e6/Shi_Assoc._South_Section_5_Heathcliff.png/125px-Shi_Assoc._South_Section_5_Heathcliff.png?e68287",
        "rarity": "00",
        "ID": 2
      },
      {
        "name": "N Corp. Kleinhammer Heathcliff",
        "image": "https://limbuscompany.wiki.gg/images/thumb/f/f5/N_Corp._Kleinhammer_Heathcliff.png/125px-N_Corp._Kleinhammer_Heathcliff.png?e82536",
        "rarity": "00",
        "ID": 3
      },
      {
        "name": "Seven Assoc. South Section 4 Heathcliff",
        "image": "https://limbuscompany.wiki.gg/images/thumb/4/42/Seven_Assoc._South_Section_4_Heathcliff.png/125px-Seven_Assoc._South_Section_4_Heathcliff.png?a4c428",
        "rarity": "00",
        "ID": 4
      },
      {
        "name": "MultiCrack Office Fixer Heathcliff",
        "image": "https://limbuscompany.wiki.gg/images/thumb/4/44/MultiCrack_Office_Fixer_Heathcliff.png/125px-MultiCrack_Office_Fixer_Heathcliff.png?45de13",
        "rarity": "00",
        "ID": 5
      },
      {
        "name": "R Corp. 4th Pack Rabbit Heathcliff",
        "image": "https://limbuscompany.wiki.gg/images/thumb/b/b3/R_Corp._4th_Pack_Rabbit_Heathcliff.png/125px-R_Corp._4th_Pack_Rabbit_Heathcliff.png?75bfb4",
        "rarity": "000",
        "ID": 6
      },
      {
        "name": "Lobotomy E.G.O::Sunshower Heathcliff",
        "image": "https://limbuscompany.wiki.gg/images/thumb/e/eb/Lobotomy_E.G.O_Sunshower_Heathcliff.png/125px-Lobotomy_E.G.O_Sunshower_Heathcliff.png?5c1661",
        "rarity": "000",
        "ID": 7
      },
      {
        "name": "The Pequod Harpooneer Heathcliff",
        "image": "https://limbuscompany.wiki.gg/images/thumb/8/8a/The_Pequod_Harpooneer_Heathcliff.png/125px-The_Pequod_Harpooneer_Heathcliff.png?b00a01",
        "rarity": "000",
        "ID": 8
      },
      {
        "name": "Öufi Assoc. South Section 3 Heathcliff",
        "image": "https://limbuscompany.wiki.gg/images/thumb/7/77/%C3%96ufi_Assoc._South_Section_3_Heathcliff.png/125px-%C3%96ufi_Assoc._South_Section_3_Heathcliff.png?8e337f",
        "rarity": "000",
        "ID": 9
      },
      {
        "name": "Wild Hunt Heathcliff",
        "traits": [
          "Wild Hunt",
          "Wuthering Heights"
        ],
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Wild_Hunt_Heathcliff",
        "image": "https://limbuscompany.wiki.gg/images/thumb/3/39/Wild_Hunt_Heathcliff.png/125px-Wild_Hunt_Heathcliff.png?fd3a2d",
        "rarity": "000",
        "primaryEffect": "sinking",
        "ID": 10
      },
      {
        "name": "Full-Stop Office Fixer Heathcliff",
        "image": "https://limbuscompany.wiki.gg/images/thumb/c/c2/Full-Stop_Office_Fixer_Heathcliff.png/125px-Full-Stop_Office_Fixer_Heathcliff.png?ad5f0e",
        "rarity": "000",
        "ID": 11
      },
      {
        "name": "Kurokumo Clan Wakashu Heathcliff",
        "image": "https://limbuscompany.wiki.gg/images/thumb/8/8a/Kurokumo_Clan_Wakashu_Heathcliff.png/125px-Kurokumo_Clan_Wakashu_Heathcliff.png?49b26a",
        "rarity": "000",
        "ID": 12
      }
    ]
  },
  {
    "ID": 8,
    "name": "Ishmael",
    "image": "https://static.wikia.nocookie.net/limbuscompany/images/b/b9/Ishmael_StoryLog.png",
    "identities": [
      {
        "name": "LCB Sinner Ishmael",
        "image": "https://limbuscompany.wiki.gg/images/thumb/8/81/LCB_Sinner_Ishmael.png/125px-LCB_Sinner_Ishmael.png?e351ec",
        "rarity": "0",
        "ID": 1
      },
      {
        "name": "Shi Assoc. South Section 5 Ishmael",
        "image": "https://limbuscompany.wiki.gg/images/thumb/2/29/Shi_Assoc._South_Section_5_Ishmael.png/125px-Shi_Assoc._South_Section_5_Ishmael.png?19c08c",
        "rarity": "00",
        "ID": 2
      },
      {
        "name": "LCCB Assistant Manager Ishmael",
        "image": "https://limbuscompany.wiki.gg/images/thumb/0/04/LCCB_Assistant_Manager_Ishmael.png/125px-LCCB_Assistant_Manager_Ishmael.png?f5a4cf",
        "rarity": "00",
        "ID": 3
      },
      {
        "name": "Lobotomy E.G.O::Sloshing Ishmael",
        "image": "https://limbuscompany.wiki.gg/images/thumb/6/62/Lobotomy_E.G.O_Sloshing_Ishmael.png/125px-Lobotomy_E.G.O_Sloshing_Ishmael.png?b38d84",
        "rarity": "00",
        "ID": 4
      },
      {
        "name": "Edgar Family Butler Ishmael",
        "image": "https://limbuscompany.wiki.gg/images/thumb/f/ff/Edgar_Family_Butler_Ishmael.png/125px-Edgar_Family_Butler_Ishmael.png?658636",
        "rarity": "00",
        "ID": 5
      },
      {
        "name": "R Corp. 4th Pack Reindeer Ishmael",
        "image": "https://limbuscompany.wiki.gg/images/thumb/a/ab/R_Corp._4th_Pack_Reindeer_Ishmael.png/125px-R_Corp._4th_Pack_Reindeer_Ishmael.png?c0b6b5",
        "rarity": "000",
        "ID": 6
      },
      {
        "name": "Liu Assoc. South Section 4 Ishmael",
        "image": "https://limbuscompany.wiki.gg/images/thumb/7/71/Liu_Assoc._South_Section_4_Ishmael.png/125px-Liu_Assoc._South_Section_4_Ishmael.png?6a143c",
        "rarity": "000",
        "ID": 7
      },
      {
        "name": "Molar Boatworks Fixer Ishmael",
        "image": "https://limbuscompany.wiki.gg/images/thumb/7/7a/Molar_Boatworks_Fixer_Ishmael.png/125px-Molar_Boatworks_Fixer_Ishmael.png?1dc317",
        "rarity": "000",
        "ID": 8
      },
      {
        "name": "The Pequod Captain Ishmael",
        "image": "https://limbuscompany.wiki.gg/images/thumb/8/8a/The_Pequod_Captain_Ishmael.png/125px-The_Pequod_Captain_Ishmael.png?f66f47",
        "rarity": "000",
        "ID": 9
      },
      {
        "name": "Zwei Assoc. West Section 3 Ishmael",
        "image": "https://limbuscompany.wiki.gg/images/thumb/4/4f/Zwei_Assoc._West_Section_3_Ishmael.png/125px-Zwei_Assoc._West_Section_3_Ishmael.png?e93eda",
        "rarity": "000",
        "ID": 10
      },
      {
        "name": "Kurokumo Clan Captain Ishmael",
        "image": "https://limbuscompany.wiki.gg/images/thumb/0/06/Kurokumo_Clan_Captain_Ishmael.png/125px-Kurokumo_Clan_Captain_Ishmael.png?3898df",
        "rarity": "000",
        "ID": 11
      },
      {
        "name": "Heishou Pack - Mao Branch Adept Ishmael",
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Family_Hierarch_Candidate_Ishmael",
        "primaryEffect": "rupture",
        "traits": [
          "Family Hierarch Candidate",
          "Jia Family"
        ],
        "image": "https://limbuscompany.wiki.gg/images/thumb/9/9a/Family_Hierarch_Candidate_Ishmael_Uptied.png/125px-Family_Hierarch_Candidate_Ishmael_Uptied.png?b38b5f",
        "rarity": "000",
        "ID": 12
      },
      {
        "name": "Family Hierarch Candidate Ishmael",
        "image": "https://limbuscompany.wiki.gg/images/thumb/7/7c/Family_Hierarch_Candidate_Ishmael.png/125px-Family_Hierarch_Candidate_Ishmael.png?861875",
        "rarity": "000",
        "ID": 13,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Family_Hierarch_Candidate_Ishmael"
      }
    ]
  },
  {
    "ID": 9,
    "name": "Rodion",
    "image": "https://static.wikia.nocookie.net/limbuscompany/images/8/88/Rodion_StoryLog.png",
    "identities": [
      {
        "name": "LCB Sinner Rodion",
        "image": "https://limbuscompany.wiki.gg/images/thumb/3/32/LCB_Sinner_Rodion.png/125px-LCB_Sinner_Rodion.png?bdbe14",
        "rarity": "0",
        "ID": 1
      },
      {
        "name": "LCCB Assistant Manager Rodion",
        "image": "https://limbuscompany.wiki.gg/images/thumb/2/2f/LCCB_Assistant_Manager_Rodion.png/125px-LCCB_Assistant_Manager_Rodion.png?aff7fc",
        "rarity": "00",
        "ID": 2
      },
      {
        "name": "N Corp. Mittelhammer Rodion",
        "image": "https://limbuscompany.wiki.gg/images/thumb/1/1a/N_Corp._Mittelhammer_Rodion.png/125px-N_Corp._Mittelhammer_Rodion.png?b1b608",
        "rarity": "00",
        "ID": 3
      },
      {
        "name": "Zwei Assoc. South Section 5 Rodion",
        "image": "https://limbuscompany.wiki.gg/images/thumb/2/2e/Zwei_Assoc._South_Section_5_Rodion.png/125px-Zwei_Assoc._South_Section_5_Rodion.png?a25730",
        "rarity": "00",
        "ID": 4
      },
      {
        "name": "T Corp. Class 2 Collection Staff Rodion",
        "image": "https://limbuscompany.wiki.gg/images/thumb/b/b1/T_Corp._Class_2_Collection_Staff_Rodion.png/125px-T_Corp._Class_2_Collection_Staff_Rodion.png?798a84",
        "rarity": "00",
        "ID": 5
      },
      {
        "name": "Kurokumo Clan Wakashu Rodion",
        "image": "https://limbuscompany.wiki.gg/images/thumb/9/9e/Kurokumo_Clan_Wakashu_Rodion.png/125px-Kurokumo_Clan_Wakashu_Rodion.png?d0e536",
        "rarity": "000",
        "ID": 6
      },
      {
        "name": "Rosespanner Workshop Rep Rodion",
        "image": "https://limbuscompany.wiki.gg/images/thumb/7/7e/Rosespanner_Workshop_Rep_Rodion.png/125px-Rosespanner_Workshop_Rep_Rodion.png?ecdf25",
        "rarity": "000",
        "ID": 7
      },
      {
        "name": "Dieci Assoc. South Section 4 Rodion",
        "image": "https://limbuscompany.wiki.gg/images/thumb/3/32/Dieci_Assoc._South_Section_4_Rodion.png/125px-Dieci_Assoc._South_Section_4_Rodion.png?c3188b",
        "rarity": "000",
        "ID": 8
      },
      {
        "name": "Liu Assoc. South Section 4 Director Rodion",
        "image": "https://limbuscompany.wiki.gg/images/thumb/d/dc/Liu_Assoc._South_Section_4_Director_Rodion.png/125px-Liu_Assoc._South_Section_4_Director_Rodion.png?335cd6",
        "rarity": "000",
        "ID": 9
      },
      {
        "name": "Devyat' Assoc. North Section 3 Rodion",
        "image": "https://limbuscompany.wiki.gg/images/thumb/1/1b/Devyat%27_Assoc._North_Section_3_Rodion.png/125px-Devyat%27_Assoc._North_Section_3_Rodion.png?7c9485",
        "rarity": "000",
        "ID": 10
      },
      {
        "name": "The Princess of La Manchaland Rodion",
        "image": "https://limbuscompany.wiki.gg/images/thumb/d/d6/The_Princess_of_La_Manchaland_Rodion.png/125px-The_Princess_of_La_Manchaland_Rodion.png?ebef97",
        "rarity": "000",
        "ID": 11
      },
      {
        "name": "Heishou Pack - Si Branch Rodion",
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Heishou_Pack_-_Si_Branch_Rodion",
        "primaryEffect": "rupture",
        "traits": [
          "Heishou Pack",
          "Heishou Pack - Si Branch"
        ],
        "image": "https://limbuscompany.wiki.gg/images/thumb/9/9a/Family_Hierarch_Candidate_Ishmael_Uptied.png/125px-Family_Hierarch_Candidate_Ishmael_Uptied.png?b38b5f",
        "rarity": "000",
        "ID": 12
      }
    ]
  },
  {
    "ID": 10,
    "name": "Sinclair",
    "image": "https://static.wikia.nocookie.net/limbuscompany/images/f/fd/Sinclair_StoryLog.png",
    "identities": [
      {
        "name": "LCB Sinner Sinclair",
        "image": "https://limbuscompany.wiki.gg/images/thumb/f/f2/LCB_Sinner_Sinclair.png/125px-LCB_Sinner_Sinclair.png?1482ea",
        "rarity": "0",
        "ID": 1
      },
      {
        "name": "Zwei Assoc. South Section 6 Sinclair",
        "image": "https://limbuscompany.wiki.gg/images/thumb/9/9c/Zwei_Assoc._South_Section_6_Sinclair.png/125px-Zwei_Assoc._South_Section_6_Sinclair.png?13f604",
        "rarity": "00",
        "ID": 2
      },
      {
        "name": "Los Mariachis Jefe Sinclair",
        "image": "https://limbuscompany.wiki.gg/images/thumb/4/44/Los_Mariachis_Jefe_Sinclair.png/125px-Los_Mariachis_Jefe_Sinclair.png?8778f4",
        "rarity": "00",
        "ID": 3
      },
      {
        "name": "Lobotomy E.G.O::Red Sheet Sinclair",
        "image": "https://limbuscompany.wiki.gg/images/thumb/3/3f/Lobotomy_E.G.O_Red_Sheet_Sinclair.png/125px-Lobotomy_E.G.O_Red_Sheet_Sinclair.png?9c3ab2",
        "rarity": "00",
        "ID": 4
      },
      {
        "name": "Molar Boatworks Fixer Sinclair",
        "image": "https://limbuscompany.wiki.gg/images/thumb/4/41/Molar_Boatworks_Fixer_Sinclair.png/125px-Molar_Boatworks_Fixer_Sinclair.png?ce0d92",
        "rarity": "00",
        "ID": 5
      },
      {
        "name": "Zwei Assoc. West Section 3 Sinclair",
        "image": "https://limbuscompany.wiki.gg/images/thumb/a/a5/Zwei_Assoc._West_Section_3_Sinclair.png/125px-Zwei_Assoc._West_Section_3_Sinclair.png?8f0ce6",
        "rarity": "00",
        "ID": 6
      },
      {
        "name": "Blade Lineage Salsu Sinclair",
        "image": "https://limbuscompany.wiki.gg/images/thumb/c/cc/Blade_Lineage_Salsu_Sinclair.png/125px-Blade_Lineage_Salsu_Sinclair.png?5ab51a",
        "rarity": "000",
        "ID": 7
      },
      {
        "name": "The One Who Shall Grip Sinclair",
        "image": "https://limbuscompany.wiki.gg/images/thumb/d/d2/The_One_Who_Shall_Grip_Sinclair.png/125px-The_One_Who_Shall_Grip_Sinclair.png?7f1d97",
        "rarity": "000",
        "ID": 8
      },
      {
        "name": "Cinq Assoc. South Section 4 Director Sinclair",
        "image": "https://limbuscompany.wiki.gg/images/thumb/6/6a/Cinq_Assoc._South_Section_4_Director_Sinclair.png/125px-Cinq_Assoc._South_Section_4_Director_Sinclair.png?b60b5f",
        "rarity": "000",
        "ID": 9
      },
      {
        "name": "Dawn Office Fixer Sinclair",
        "image": "https://limbuscompany.wiki.gg/images/thumb/9/95/Dawn_Office_Fixer_Sinclair.png/125px-Dawn_Office_Fixer_Sinclair.png?b57c03",
        "rarity": "000",
        "ID": 10
      },
      {
        "name": "Devyat' Assoc. North Section 3 Sinclair",
        "image": "https://limbuscompany.wiki.gg/images/thumb/8/86/Devyat%27_Assoc._North_Section_3_Sinclair.png/125px-Devyat%27_Assoc._North_Section_3_Sinclair.png?6fec80",
        "rarity": "000",
        "ID": 11
      },
      {
        "name": "The Middle Little Brother Sinclair",
        "image": "https://limbuscompany.wiki.gg/images/thumb/e/e9/The_Middle_Little_Brother_Sinclair.png/125px-The_Middle_Little_Brother_Sinclair.png?a1848d",
        "rarity": "000",
        "ID": 12
      },
      {
        "name": "The Thumb East Soldato II Sinclair",
        "image": "https://limbuscompany.wiki.gg/images/thumb/3/37/The_Thumb_East_Soldato_II_Sinclair.png/125px-The_Thumb_East_Soldato_II_Sinclair.png?9e0e82",
        "rarity": "000",
        "ID": 13,
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/The_Thumb_East_Soldato_II_Sinclair"
      }
    ]
  },
  {
    "ID": 11,
    "name": "Outis",
    "image": "https://static.wikia.nocookie.net/limbuscompany/images/f/fa/Outis_StoryLog.png",
    "identities": [
      {
        "name": "LCB Sinner Outis",
        "image": "https://limbuscompany.wiki.gg/images/thumb/3/37/LCB_Sinner_Outis.png/125px-LCB_Sinner_Outis.png?d41401",
        "rarity": "0",
        "ID": 1
      },
      {
        "name": "Blade Lineage Salsu Outis",
        "image": "https://limbuscompany.wiki.gg/images/thumb/d/da/Blade_Lineage_Salsu_Outis.png/125px-Blade_Lineage_Salsu_Outis.png?71ac8e",
        "rarity": "00",
        "ID": 2
      },
      {
        "name": "G Corp. Head Manager Outis",
        "image": "https://limbuscompany.wiki.gg/images/thumb/2/28/G_Corp._Head_Manager_Outis.png/125px-G_Corp._Head_Manager_Outis.png?561ca0",
        "rarity": "00",
        "ID": 3
      },
      {
        "name": "Cinq Assoc. South Section 4 Outis",
        "image": "https://limbuscompany.wiki.gg/images/thumb/5/52/Cinq_Assoc._South_Section_4_Outis.png/125px-Cinq_Assoc._South_Section_4_Outis.png?a120fa",
        "rarity": "00",
        "ID": 4
      },
      {
        "name": "The Ring Pointillist Student Outis",
        "image": "https://limbuscompany.wiki.gg/images/thumb/e/e1/The_Ring_Pointillist_Student_Outis.png/125px-The_Ring_Pointillist_Student_Outis.png?a07617",
        "rarity": "00",
        "ID": 5
      },
      {
        "name": "Seven Assoc. South Section 6 Director Outis",
        "image": "https://limbuscompany.wiki.gg/images/thumb/c/cc/Seven_Assoc._South_Section_6_Director_Outis.png/125px-Seven_Assoc._South_Section_6_Director_Outis.png?5b427b",
        "rarity": "000",
        "ID": 6
      },
      {
        "name": "Molar Office Fixer Outis",
        "image": "https://limbuscompany.wiki.gg/images/thumb/9/96/Molar_Office_Fixer_Outis.png/125px-Molar_Office_Fixer_Outis.png?3c6f76",
        "rarity": "000",
        "ID": 7
      },
      {
        "name": "Lobotomy E.G.O::Magic Bullet Outis",
        "image": "https://limbuscompany.wiki.gg/images/thumb/b/b7/Lobotomy_E.G.O_Magic_Bullet_Outis.png/125px-Lobotomy_E.G.O_Magic_Bullet_Outis.png?c759c6",
        "rarity": "000",
        "ID": 8
      },
      {
        "name": "Wuthering Heights Chief Butler Outis",
        "image": "https://limbuscompany.wiki.gg/images/thumb/f/ff/Wuthering_Heights_Chief_Butler_Outis.png/125px-Wuthering_Heights_Chief_Butler_Outis.png?77d837",
        "rarity": "000",
        "ID": 9
      },
      {
        "name": "W Corp. L3 Cleanup Captain Outis",
        "image": "https://limbuscompany.wiki.gg/images/thumb/0/05/W_Corp._L3_Cleanup_Captain_Outis.png/125px-W_Corp._L3_Cleanup_Captain_Outis.png?927376",
        "rarity": "000",
        "ID": 10
      },
      {
        "name": "The Barber of La Manchaland Outis",
        "image": "https://limbuscompany.wiki.gg/images/thumb/6/6c/The_Barber_of_La_Manchaland_Outis.png/125px-The_Barber_of_La_Manchaland_Outis.png?3ed1cc",
        "rarity": "000",
        "ID": 11
      },
      {
        "name": "Heishou Pack - Mao Branch Outis",
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Heishou_Pack_-_Mao_Branch_Outis",
        "primaryEffect": "rupture",
        "traits": [
          "Heishou Pack",
          "Heishou Pack - Mao Branch"
        ],
        "image": "https://limbuscompany.wiki.gg/images/thumb/1/15/Heishou_Pack_-_Mao_Branch_Outis.png/125px-Heishou_Pack_-_Mao_Branch_Outis.png?8ef011",
        "rarity": "000",
        "ID": 12
      }
    ]
  },
  {
    "ID": 12,
    "name": "Gregor",
    "image": "https://static.wikia.nocookie.net/limbuscompany/images/d/d5/Gregor_StoryLog.png",
    "identities": [
      {
        "name": "LCB Sinner Gregor",
        "image": "https://limbuscompany.wiki.gg/images/thumb/6/6c/LCB_Sinner_Gregor.png/125px-LCB_Sinner_Gregor.png?d2b6f8",
        "rarity": "0",
        "ID": 1
      },
      {
        "name": "Liu Assoc. South Section 6 Gregor",
        "image": "https://limbuscompany.wiki.gg/images/thumb/1/1c/Liu_Assoc._South_Section_6_Gregor.png/125px-Liu_Assoc._South_Section_6_Gregor.png?d0c785",
        "rarity": "00",
        "ID": 2
      },
      {
        "name": "R.B. Sous-chef Gregor",
        "image": "https://limbuscompany.wiki.gg/images/thumb/5/5d/R.B._Sous-chef_Gregor.png/125px-R.B._Sous-chef_Gregor.png?509abf",
        "rarity": "00",
        "ID": 3
      },
      {
        "name": "Rosespanner Workshop Fixer Gregor",
        "image": "https://limbuscompany.wiki.gg/images/thumb/a/a9/Rosespanner_Workshop_Fixer_Gregor.png/125px-Rosespanner_Workshop_Fixer_Gregor.png?b5029f",
        "rarity": "00",
        "ID": 4
      },
      {
        "name": "Kurokumo Clan Captain Gregor",
        "image": "https://limbuscompany.wiki.gg/images/thumb/8/8b/Kurokumo_Clan_Captain_Gregor.png/125px-Kurokumo_Clan_Captain_Gregor.png?f5cf43",
        "rarity": "00",
        "ID": 5
      },
      {
        "name": "G Corp. Manager Corporal Gregor",
        "image": "https://limbuscompany.wiki.gg/images/thumb/b/ba/G_Corp._Manager_Corporal_Gregor.png/125px-G_Corp._Manager_Corporal_Gregor.png?e9f96d",
        "rarity": "000",
        "ID": 6
      },
      {
        "name": "Zwei Assoc. South Section 4 Gregor",
        "image": "https://limbuscompany.wiki.gg/images/thumb/b/bf/Zwei_Assoc._South_Section_4_Gregor.png/125px-Zwei_Assoc._South_Section_4_Gregor.png?e1857f",
        "rarity": "000",
        "ID": 7
      },
      {
        "name": "Twinhook Pirates First Mate Gregor",
        "image": "https://limbuscompany.wiki.gg/images/thumb/4/48/Twinhook_Pirates_First_Mate_Gregor.png/125px-Twinhook_Pirates_First_Mate_Gregor.png?3c1b65",
        "rarity": "000",
        "ID": 8
      },
      {
        "name": "Edgar Family Heir Gregor",
        "image": "https://limbuscompany.wiki.gg/images/thumb/0/09/Edgar_Family_Heir_Gregor.png/125px-Edgar_Family_Heir_Gregor.png?ae2b64",
        "rarity": "000",
        "ID": 9
      },
      {
        "name": "The Priest of La Manchaland Gregor",
        "image": "https://limbuscompany.wiki.gg/images/thumb/1/1b/The_Priest_of_La_Manchaland_Gregor.png/125px-The_Priest_of_La_Manchaland_Gregor.png?3cb00e",
        "rarity": "000",
        "ID": 10
      },
      {
        "name": "Firefist Office Survivor Gregor",
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Firefist_Office_Survivor_Gregor",
        "primaryEffect": "burn",
        "traits": [
          "Fixer"
        ],
        "image": "https://limbuscompany.wiki.gg/images/thumb/8/83/Firefist_Office_Survivor_Gregor.png/125px-Firefist_Office_Survivor_Gregor.png?ba9107",
        "rarity": "000",
        "ID": 11
      },
      {
        "name": "Heishou Pack - Si Branch Gregor",
        "wikiUrl": "https://limbuscompany.wiki.gg/wiki/Heishou_Pack_-_Si_Branch_Gregor",
        "primaryEffect": "rupture",
        "traits": [
          "Heishou Pack",
          "Heishou Pack - Si Branch"
        ],
        "image": "https://limbuscompany.wiki.gg/images/thumb/c/c6/Heishou_Pack_-_Si_Branch_Gregor_Uptied.png/125px-Heishou_Pack_-_Si_Branch_Gregor_Uptied.png?e52cde",
        "rarity": "000",
        "ID": 12
      }
    ]
  }
]