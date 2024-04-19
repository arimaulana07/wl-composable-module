export interface Theming {
  bgPrimary: string;
  bgSecondary: string;
}

/* Outlets Departure */
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

interface City {
  kode: string;
  nama: string;
  group: string;
  img: string;
}

export interface Departures {
  outlet: OutletDeparture[] | null;
  kota: City[] | null;
}

/* Outlets Destinations */
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

/* Form Reservtion */
export interface FormReservationProps {
  departures: Departures,
  destinations: Destinations,
  selectedDeparture: string,
  selectedDestination: string;
}
