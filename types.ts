
export interface Section {
  heading: string;
  content: string;
}

export interface Event {
  year: number;
  event: string;
}

export interface Quote {
  speaker: string;
  text: string;
}

export interface ContentImage {
  src: string;
  caption: string;
  credit: string;
}

export interface ChronologyItem {
  id: string;
  period: string;
  title: string;
  summary: string;
  keyEvents: string[];
  estimatedDeaths?: {
    range: string;
    notes?: string;
    details?: string[];
  };
  reportedDeathTolls?: {
    governmentFigures?: number;
    humanRightsConfirmed?: number;
    underInvestigation?: number;
    highEndEstimates?: number;
  };
  notableIncidents?: {
    name: string;
    year: number;
    details: string;
  }[];
}

export interface PageData {
  id: string;
  title: string;
  slug: string;
  overview?: string;
  note?: string;
  sections?: Section[];
  events?: Event[];
  quotes?: Quote[];
  images?: ContentImage[];
  chronologyItems?: ChronologyItem[];
  isLanding?: boolean;
}

export interface SiteConfig {
  title: string;
  subtitle: string;
  coreConcept: string;
  description: string;
  theme: string;
  language: string;
  disclaimer: string;
  navigationOrder: string[];
}
