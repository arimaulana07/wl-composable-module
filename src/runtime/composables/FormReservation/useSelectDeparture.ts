import type { UseSelectDepature } from "./type";
import { useSelectOutlet } from './useSelectOutlet'
import { useSetOutlets } from "./useSetOutlets";
import { useApiData }  from "../useApiData";

export const useSelectDeparture: UseSelectDepature = async ({
    currentSelectedDepartureOutlet,
    newSelectedDepartureOutlet,
    currentSelectedDestinationOutlet,
    destinationOutlets
  }) => {
    const { getDestination } = useApiData();
    const fetchDestination = await getDestination({ outletasal: newSelectedDepartureOutlet });

    useSetOutlets({ outlets: destinationOutlets, newOutlets: fetchDestination });
    useSelectOutlet({
      currentSelectedOutlet: currentSelectedDepartureOutlet,
      newSelectedOutlet: newSelectedDepartureOutlet
    });
    
    if (fetchDestination.outlet) {
      useSelectOutlet({
        currentSelectedOutlet: currentSelectedDestinationOutlet,
        newSelectedOutlet: fetchDestination?.outlet[0]?.id
      })
    }
}