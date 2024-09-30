import type { Ref } from 'vue'

/* Select Outlet */
export interface UseSelectOutletParams {
  currentSelectedOutlet: Ref<SelectedOutlet>;
  newSelectedOutlet: SelectedOutlet;
}
export type UseSelectOutlet = (params: UseSelectOutletParams) => void;

/* Select Departure */
export interface UseSelectDepartureParams {
  currentSelectedDepartureOutlet: SelectedOutlet;
  newSelectedDepartureOutlet: SelectedOutlet;
  currentSelectedDestinationOutlet: SelectedOutlet;
  destinationOutlets: Destinations
}
export type UseSelectDepature = (params: UseSelectDepartureParams) => void;

/* Select Outlet */
export interface UseSetOutletsParams<T> {
  outlets: Ref<T> | Ref<null>
  newOutlets: T
}
export type UseSetOutlets<T> = (params: UseSetOutletsParams<T>) => void;

/* Departure Outlets */
export interface OutletDeparture {
  id: string;
  group: string;
  kode: string;
  nama: string;
  telpon: string;
  alamat: string;
  latitude: string;
  longitude: string;
  kode_kota: string;
  kota: string;
  flag_agen: string | number;
  flag_aktif: string | number;
  img: string;
  url_map?: string;
  list_img: Array<string>;
}

export interface City {
  kode: string;
  nama: string;
  group: string;
  img: string;
}

export interface Departures {
  outlet: OutletDeparture[] | null;
  kota: City[] | null;
}

/* Destination Outlets */
export interface OutletDestination extends OutletDeparture {
  flag_bandara: number | number;
  url_map_tujuan: string;
  min_tarif: number;
  max_tarif: number;
  range_tarif: string;
}

export interface Destinations {
  outlet: OutletDestination[] | null;
  kota: City[] | null;
}


export interface SelectedDepartureParams {
  setSelectedDeparture?: any;
  isDeparture?: any;
  modal: any
}

export interface SelectedOutlet {
  label: any;
  value: any;
  editableLabel: any;
}


