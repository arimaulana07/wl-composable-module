import type { UseSetOutlets } from "./type";
import type { Departures, Destinations } from "../types/UseApiData";

export const useSetOutlets: UseSetOutlets<Departures | Destinations> = ({ outlets, newOutlets }) => {
  if (outlets) {
    outlets.value = {
      kota: newOutlets.kota,
      outlet: newOutlets.outlet
    }
  }
}
