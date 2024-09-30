import type { OutletDeparture } from "../../composables/types/UseApiData";

export interface GroupedOutlets {
  kota: string | null;
  items: OutletDeparture[] | null;
}

export interface FilterDataParams {
  datas: any;
  by?: any;
  keyword: any;
}

export interface SearchDataParams {
  list: any;
  keyword: string;
  keys: string[]
}