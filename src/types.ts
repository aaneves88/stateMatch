export interface Question {
  id: string;
  text: string;
  options: {
    text: string;
    value: number;
  }[];
}

export interface City {
  name: string;
  description: string;
}

export interface StateData {
  name: string;
  capital: string;
  description: string;
  principalCity: string;
  cities: City[];
  scores: {
    costOfLiving: number;
    warmWeather: number;
    coldWeather: number;
    jobImportance: number;
    lgbtqSafety: number;
    crimeSafety: number;
    education: number;
    culturalDiversity: number;
    publicTransport: number;
    environment: number;
    population: number;
    taxImportance: number;
    brazilianCommunity: number;
  };
}

export interface UserAnswers {
  [key: string]: number;
}

export interface CriteriaWeight {
  id: string;
  weight: number;
}