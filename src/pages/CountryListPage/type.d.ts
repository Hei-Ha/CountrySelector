export interface CountryCallingCodeType {
    country: string;
    calling_code: number;
}


export interface CountryByAbbreviationType {
    country: string;
    abbreviation: string;
}


export interface CountryDataListType {
    countryName: string;
    calling_code: number;
    abbreviation?: string;
}