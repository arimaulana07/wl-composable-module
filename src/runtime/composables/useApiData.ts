import { useWlFetch } from "./useCommons";
import type {
  requestTokenBody,
  GetScheduleParams,
  GetSeatsParams,
  GetCalculatePriceParams,
  GetBookingParams,
  BookingDetailParams
} from "./types/UseApiData";

import type { 
  Booking,
  Departures,
  Destinations,
  Schedule,
  Seats,
  ListPayment,
  CalculatePrice,
  DetailBooking
 } from "./types/UseApiData";


export const useApiData = () => {
  const requestToken = async (body: requestTokenBody) => {
    return await useWlFetch({ action: 'requestToken', body });
  }
  const getDeparture = async () => {
    const response = await useWlFetch<Departures>({ action: 'departure' });
    
    return response.tiketux.result;
  }
 
  const getDestination = async (params: { outletasal: string }) => {
    const response = await useWlFetch<Destinations>({ action: 'destination', params });
    return response.tiketux.result;
  }

  const getSchedule = async (params: GetScheduleParams) => {
    const response = await useWlFetch<Schedule>({ action: 'schedule', params });
    return response.tiketux.result;
  }

  const getSeats = async (params: GetSeatsParams) => {
    const response = await useWlFetch<Seats>({ action: 'seats', params });
    return response;
  }

  const getListPayment = async () => {
    const response = await useWlFetch<ListPayment>({ action: 'listPayment' });
    return response;
  }

  const calculatePrice = async (params: GetCalculatePriceParams) => {
    const response = await useWlFetch<CalculatePrice>({ action: 'calculatePrice', params });
    return response;
  }

  const booking = async (body: GetBookingParams) => {
    const response = await useWlFetch<Booking>({ action: 'booking', body });
    return response;
  }

  const detailBooking = async (params: BookingDetailParams ) => {
    const response = await useWlFetch<DetailBooking>({ action: 'detailBooking', params })
    return response;
  }

  return {
    requestToken,
    getDeparture,
    getDestination,
    getSchedule,
    getSeats,
    getListPayment,
    calculatePrice,
    booking,
    detailBooking
  }
}