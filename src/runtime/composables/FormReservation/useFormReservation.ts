import { useApiData } from "../useApiData"
import { ref, onMounted } from 'vue'
import { useSetOutlets } from "./useSetOutlets"
import { useSelectDeparture } from "./useSelectDeparture"
import { useSelectOutlet } from "./useSelectOutlet"

import type { Departures, Destinations } from "../../types/types.shared"

export const useFormReservation = ({ fetchDepartures, fetchDestinations }: any) => {
  const { getDeparture, getDestination } = useApiData()

  const departures = ref<Departures>({ kota: null, outlet: null })
  const destinations = ref<Destinations>({ kota: null, outlet: null })
  const selectedDeparture = ref<string>('')
  const selectedDestination = ref<string>('')

  

  // useSetOutlets({ 
  //   outlets: departures,
  //   newOutlets: {
  //     outlet: fetchDepartures?.outlet,
  //     kota: fetchDepartures?.kota
  //   }
  // })

  // useSetOutlets({ 
  //   outlets: destinations,
  //   newOutlets: {
  //     outlet: fetchDestinations?.outlet,
  //     kota: fetchDestinations?.kota
  //   }
  // })

  const setSelectedDeparture = (id: string) => {
    useSelectDeparture({
      currentSelectedDepartureOutlet: selectedDeparture,
      newSelectedDepartureOutlet: id,
      destinationOutlets: destinations,
      currentSelectedDestinationOutlet: selectedDestination
    })
  }

  const setSelectedDestination = (id: string) => {
    useSelectOutlet({ currentSelectedOutlet: selectedDestination, newSelectedOutlet: id })
  }

  onMounted(async () => {
    const resultDepartures = await fetchDepartures();
    useSetOutlets({ 
      outlets: departures,
      newOutlets: {
        outlet: resultDepartures?.outlet,
        kota: resultDepartures?.kota
      }
    });

    const resultDestinations = await fetchDestinations();
    useSetOutlets({ 
      outlets: destinations,
      newOutlets: {
        outlet: resultDestinations?.outlet,
        kota: resultDestinations?.kota
      }
    });

  })
  

  return { setSelectedDeparture, setSelectedDestination, departures, destinations, selectedDeparture, selectedDestination }
}