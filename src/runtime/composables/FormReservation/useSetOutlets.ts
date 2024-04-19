import type { UseSetOutlets } from "./type";
import type { Departures, Destinations } from "../../types/types.shared.ts";

export const useSetOutlets: UseSetOutlets<Departures | Destinations> = ({ outlets, newOutlets }) => {
  if (outlets.value) {
    outlets.value = {
      kota: newOutlets.kota,
      outlet: newOutlets.outlet
    }
  }
}