import type { Ref } from 'vue'
import type { Destinations } from '../types/UseApiData';

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


