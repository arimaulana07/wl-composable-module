import { defineStore } from 'pinia';
import type { Departures, Destinations, FormsCustomer, FormsPassenger, SelectedOutlet } from "../composables/FormReservation/type";

export const useStore = defineStore('store', {
  state: () => {
    return {
      sessionId: null as any,
      sessionTimeStamp: null as any,
      departures: { kota: null, outlet: null } as Departures,
      destinations: { kota: null, outlet: null } as Destinations,
      selectedDeparture: { editableLabel: null, label: null, value: null } as SelectedOutlet,
      selectedDestination: { editableLabel: null, label: null, value: null } as SelectedOutlet,
      selectedDate: new Date(),
      schedules: null as any,
      totalPassenger: 1,
      selectedSchedule: null as any,
      customerData: null as FormsCustomer | null ,
      passengersData: [] as FormsPassenger[],
      seatsLayout: [] as any,
      calculatedPrice: null as any,
      seats: null as any,
      detailBooking: null as any,
    }
  },
  getters: {
    selectedPassengerData: ({ passengersData }) => {
      if (passengersData && passengersData.length > 0) {
        return passengersData.find((passenger: any) => passenger.isSelected);
      }
      return null;
    },
    selectedSeatsLayout: ({ seats }): any[] => {
      if (seats === null && seats?.petalayoutRemodel?.length <= 1) return [];
      return seats?.petalayoutRemodel.filter((seat: any) => seat.isSelected)  
    },
    seatsTotalTicketPrice (): any {
      if (!this.selectedSeatsLayout || this.selectedSeatsLayout?.length <= 0) return 0;
      return this.selectedSeatsLayout.reduce((prev: any, curr: any) => prev + curr.totalbayar, 0)
    }
  },
  actions: {

  },
});