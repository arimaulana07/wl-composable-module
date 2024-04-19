import type { Ref } from 'vue'
import type { Destinations } from '../../types/types.shared';

/* Select Outlet */
interface UseSelectOutletParams {
  currentSelectedOutlet: Ref<string>;
  newSelectedOutlet: string;
}
export type UseSelectOutlet = (params: UseSelectOutletParams) => void;

/* Select Departure */
interface UseSelectDepartureParams {
  currentSelectedDepartureOutlet: Ref<string>;
  newSelectedDepartureOutlet: string;
  currentSelectedDestinationOutlet: Ref<string>;
  destinationOutlets: Ref<Destinations>
}
export type UseSelectDepature = (params: UseSelectDepartureParams) => void;

/* Select Outlet */
interface UseSetOutletsParams<T> {
  outlets: Ref<T> | Ref<null>
  newOutlets: T
}
export type UseSetOutlets<T> = (params: UseSetOutletsParams<T>) => void;