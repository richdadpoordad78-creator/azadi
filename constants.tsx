
import { SiteConfig, PageData } from './types';

export const SITE_CONFIG: SiteConfig = {
  title: "Women · Life · Freedom",
  subtitle: "زن زندگی آزادی",
  coreConcept: "Women, Life, Freedom",
  description: "An educational and artistic exploration of the Iranian Revolution, centered on human dignity, women’s resistance, and the universal struggle for freedom.",
  theme: "dark-human-rights",
  language: "en",
  disclaimer: "This project presents historical context, lived experiences, and cultural interpretations. It does not claim to represent a single official narrative.",
  navigationOrder: [
    "landing",
    "history-persian-tree",
    "mohammad-reza-shah-positive",
    "chronology",
    "walk-through-the-pain",
    "timeline",
    "major-events",
    "women-role",
    "after-the-revolution",
    "voices",
    "support-texas"
  ]
};

export const PAGES: PageData[] = [
  {
    id: "landing",
    title: "The Living Archive",
    slug: "/",
    isLanding: true,
    overview: "A journey through the roots, the struggle, and the enduring hope of a nation seeking dignity."
  },
  {
    id: "history-persian-tree",
    title: "History – The Persian Tree",
    slug: "/history-persian-tree",
    sections: [
      {
        heading: "Deep Roots",
        content: "Persian civilization grew from deep cultural roots shaped by poetry, philosophy, art, and reverence for life. Women historically held visible and influential roles in society, culture, and family life."
      },
      {
        heading: "The Trunk of Power",
        content: "Under the monarchy, Iran experienced rapid modernization in education, infrastructure, and women’s legal rights. At the same time, political power centralized, dissent narrowed, and freedoms became conditional."
      },
      {
        heading: "Cracks in the Tree",
        content: "As identity, belief, and personal choice were increasingly constrained, social fractures widened. The struggle extended beyond politics into the intimate fabric of daily life."
      }
    ]
  },
  {
    id: "mohammad-reza-shah-positive",
    title: "The Era of Progress",
    slug: "/mohammad-reza-shah-positive-contributions",
    overview: "Mohammad Reza Shah Pahlavi ruled Iran during a period of rapid modernization, national development, and expanded social freedoms. Many Iranians remember significant progress in education, women’s rights, and global standing during his era.",
    sections: [
      {
        heading: "Modernization and Infrastructure",
        content: "Under the Shah, Iran experienced large-scale modernization. Roads, railways, airports, and universities were built across the country, laying the foundation for national development."
      },
      {
        heading: "Women’s Rights and Social Freedom",
        content: "Women gained the right to vote and run for office. They were encouraged to pursue higher education and careers in various sectors, having freedom of dress and movement."
      },
      {
        heading: "The White Revolution",
        content: "Introduced land reforms, literacy campaigns, and healthcare expansion. These reforms aimed to modernize agriculture and improve living conditions."
      }
    ],
    note: "This section focuses on progress and does not deny political repression existed. Historical understanding requires acknowledging both progress and shortcomings."
  },
  {
    id: "chronology",
    title: "Chronology of the Struggle",
    slug: "/chronology",
    overview: "A formal documentation of the shifts in Iranian society, tracing the path from modernization to revolution and the subsequent decades of resistance.",
    chronologyItems: [
      {
        id: "01",
        period: "1960s–1970s",
        title: "The Formative Years",
        summary: "A period marked by the Shah’s White Revolution and rapid Westernization. Economic growth and modernization occurred alongside increasing income inequality, cultural disruption, religious alienation, and centralized authoritarian control.",
        keyEvents: [
          "White Revolution land reforms",
          "Expansion of Western cultural influence",
          "Growth of SAVAK intelligence repression",
          "Rising clerical and social opposition"
        ]
      },
      {
        id: "02",
        period: "1977–1978",
        title: "The Spark of Unrest",
        summary: "Economic slowdown and political tightening triggered widespread demonstrations. Students, intellectuals, workers, and religious leaders united in opposition to authoritarian rule.",
        keyEvents: [
          "Student-led demonstrations",
          "Clerical mobilization",
          "Nationwide strikes",
          "Escalating street protests"
        ]
      },
      {
        id: "03",
        period: "1979",
        title: "The 1979 Turning Point",
        summary: "The Shah fled Iran and Ayatollah Ruhollah Khomeini returned from exile. A diverse revolutionary coalition was soon consolidated into an Islamic theocratic state, leading to major rollbacks of women’s rights and civil freedoms.",
        keyEvents: [
          "Departure of Mohammad Reza Shah",
          "Return of Ayatollah Khomeini",
          "Establishment of the Islamic Republic",
          "Introduction of mandatory hijab laws",
          "Suppression of secular and leftist groups"
        ]
      },
      {
        id: "04",
        period: "1980s–2000s",
        title: "Post-Revolutionary Repression",
        summary: "Localized uprisings, labor strikes, ethnic protests, and student movements emerged repeatedly and were suppressed. Protest culture survived underground through education, art, and dissent networks.",
        keyEvents: [
          "1980s political purges and executions",
          "Student protests in Tehran and Tabriz",
          "Labor strikes across industrial sectors",
          "Kurdish and minority uprisings",
          "Systematic suppression of dissent"
        ]
      },
      {
        id: "05",
        period: "2009",
        title: "The Green Movement",
        summary: "Following disputed presidential elections, millions protested under the slogan 'Where is my vote?'. The movement was violently crushed, marking the largest unrest since the early years of the Islamic Republic.",
        keyEvents: [
          "Contested presidential election",
          "Mass protests in Tehran and major cities",
          "Internet censorship and media shutdowns",
          "Dozens to hundreds of protesters killed",
          "Thousands arrested and imprisoned"
        ],
        estimatedDeaths: {
          range: "70–300+",
          notes: "Exact numbers disputed due to state censorship"
        }
      },
      {
        id: "06",
        period: "2022–2023",
        title: "Mahsa Amini Uprising",
        summary: "The death of Mahsa Amini in morality police custody ignited nationwide protests against compulsory hijab laws, gender oppression, and state violence. The slogan 'Woman, Life, Freedom' became globally recognized.",
        keyEvents: [
          "Death of Mahsa Amini",
          "Nationwide women-led protests",
          "University strikes and school walkouts",
          "Public hijab defiance",
          "Security forces using live ammunition"
        ],
        estimatedDeaths: {
          range: "500–700+",
          details: [
            "Women protesters",
            "Students",
            "Children and minors"
          ]
        }
      },
      {
        id: "07",
        period: "2025–2026",
        title: "The 2025–2026 Uprising",
        summary: "The largest and deadliest protest wave since 1979. Triggered by economic collapse, inflation, and political repression, demonstrations spread to hundreds of cities and were met with extreme state violence.",
        keyEvents: [
          "Protests beginning December 28, 2025",
          "Demonstrations in 400+ cities",
          "Near-total internet shutdown",
          "IRGC and security forces using live fire",
          "Mass arrests and disappearances"
        ],
        reportedDeathTolls: {
          governmentFigures: 3117,
          humanRightsConfirmed: 6400,
          underInvestigation: 18000,
          highEndEstimates: 30000
        },
        notableIncidents: [
          {
            name: "Fardis Massacre",
            year: 2026,
            details: "Security forces reportedly killed at least 50 protesters in a single location."
          },
          {
            name: "Killing of the Kadyvrian Brothers",
            year: 2026,
            details: "Brothers shot dead by IRGC forces during protests."
          },
          {
            name: "Children Killed During Protests",
            year: 2026,
            details: "Independent groups documented dozens to hundreds of minors killed."
          }
        ]
      },
      {
        id: "08",
        period: "Post-2026",
        title: "Aftermath and Ongoing Resistance",
        summary: "Following mass crackdowns, reports emerged of sham trials, executions, and enforced disappearances. Despite repression, resistance continues through cultural defiance, digital activism, and generational memory.",
        keyEvents: [
          "Mass detentions and secret trials",
          "Executions linked to protest participation",
          "International sanctions and condemnation",
          "Continued underground resistance"
        ]
      }
    ]
  },
  {
    id: "walk-through-the-pain",
    title: "Walk Through the Pain",
    slug: "/walk-through-the-pain",
    sections: [
      {
        heading: "Life Under Control",
        content: "Fear entered everyday existence. Speech, clothing, movement, and thought were monitored. For women, the body itself became a contested space."
      },
      {
        heading: "Silenced Lives",
        content: "Families lived between hope and loss. Women carried emotional labor—raising children, working, resisting, mourning—often without acknowledgment."
      },
      {
        heading: "Pain That Became Resistance",
        content: "Pain did not vanish. It transformed into endurance and courage. Ordinary people, especially women, chose dignity over silence."
      }
    ]
  },
  {
    id: "timeline",
    title: "Timeline of Key Events",
    slug: "/timeline",
    events: [
      { year: 1978, event: "Nationwide protests begin, with women visibly participating in demonstrations and organizing resistance" },
      { year: 1978, event: "Black Friday (September 8): state violence shocks the nation and deepens collective grief" },
      { year: 1979, event: "Nationwide strikes weaken the monarchy and disrupt state control" },
      { year: 1979, event: "The Shah leaves Iran on January 16" },
      { year: 1979, event: "The revolution succeeds on February 11, transforming political power and everyday life" }
    ]
  },
  {
    id: "major-events",
    title: "Major Events & Protest",
    slug: "/major-events-protest",
    sections: [
      {
        heading: "Streets as a Voice",
        content: "Public spaces became platforms of expression. Women marched beside men, confronting violence with determination and solidarity."
      },
      {
        heading: "Strikes and Solidarity",
        content: "Workers, students, and families united across class lines. The movement became a struggle for collective life rather than power alone."
      },
      {
        heading: "Turning Points",
        content: "Each protest carried loss and clarity: the demand was not only for change, but for the right to live freely."
      }
    ]
  },
  {
    id: "women-role",
    title: "Role of Women",
    slug: "/role-of-women",
    sections: [
      {
        heading: "Women at the Center",
        content: "Women were not spectators. They organized protests, protected communities, documented injustice, and sustained the moral force of the movement."
      },
      {
        heading: "Life as Resistance",
        content: "Daily choices—how to dress, speak, work, and exist—became political acts. Control over one’s life became a form of defiance."
      },
      {
        heading: "Freedom and Its Cost",
        content: "After the revolution, many women faced new legal and social restrictions. The struggle continued, evolving into a long fight for autonomy and equality."
      }
    ]
  },
  {
    id: "after-the-revolution",
    title: "After the Revolution",
    slug: "/after-the-revolution",
    sections: [
      {
        heading: "A New Order",
        content: "The fall of the monarchy introduced a new political system. Hope coexisted with uncertainty as laws reshaped public and private life."
      },
      {
        heading: "Control of the Body",
        content: "Mandatory dress codes and moral policing transformed personal choice into a matter of state authority, especially for women."
      },
      {
        heading: "Enduring Resistance",
        content: "Resistance adapted. It lived in education, art, quiet defiance, and the refusal to forget."
      }
    ]
  },
  {
    id: "voices",
    title: "Voices of Survival",
    slug: "/voices",
    quotes: [
      { speaker: "Anonymous Woman", text: "We did not lose our voices. We learned how to protect them." },
      { speaker: "Anonymous Activist", text: "Resistance did not always shout. Sometimes it survived." }
    ]
  },
  {
    id: "support-texas",
    title: "Support from Texas",
    slug: "/support-from-texas",
    sections: [
      {
        heading: "Diaspora Voices",
        content: "Iranian communities in Texas amplified the call for women’s rights through protests, art, education, and public dialogue."
      },
      {
        heading: "Global Solidarity",
        content: "Support from Texas demonstrated that the demand for dignity and freedom transcends borders and generations."
      }
    ],
    images: [
      {
        src: "https://github.com/richdadpoordad78-creator/azadi-ka-images-/blob/main/ramesh%20nambiyath2%20(1).jpeg?raw=true",
        caption: "Diaspora gathering in Texas",
        credit: "Community archive"
      },
      {
        src: "https://github.com/richdadpoordad78-creator/azadi-ka-images-/blob/main/ramesh%20nambiyath2%20(2).jpeg?raw=true",
        caption: "Public demonstration",
        credit: "Community archive"
      },
      {
        src: "https://github.com/richdadpoordad78-creator/azadi-ka-images-/blob/main/ramesh%20nambiyath2%20(4).jpeg?raw=true",
        caption: "Women-led solidarity protest",
        credit: "Community archive"
      },
      {
        src: "https://github.com/richdadpoordad78-creator/azadi-ka-images-/blob/main/ramesh%20nambiyath2%20(5).jpeg?raw=true",
        caption: "Art and resistance",
        credit: "Community archive"
      },
      {
        src: "https://github.com/richdadpoordad78-creator/azadi-ka-images-/blob/main/ramesh%20nambiyath2%20(6).jpeg?raw=true",
        caption: "Diaspora remembrance",
        credit: "Community archive"
      },
      {
        src: "https://github.com/richdadpoordad78-creator/azadi-ka-images-/blob/main/ramesh%20nambiyath3.jpeg?raw=true",
        caption: "Global solidarity moment",
        credit: "Community archive"
      }
    ]
  }
];
