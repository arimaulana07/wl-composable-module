import { useWlFetch } from "./useCommons";
import type { requestTokenBody } from "./types/useApiData.type";
import type { Departures, Destinations } from "../types/types.shared";

export const useApiData = () => {
  const requestToken = async (body: requestTokenBody) => {
    return await useWlFetch({ action: 'requestToken', body });
  }
  const getDeparture = async () => {
    const response = await useWlFetch<Departures>({ action: 'departure' });
    return response.tiketux.result;
  }
  
  const getDestination = async (params: { outletasal: string }) => {
    const response = await useWlFetch<Destinations>({ action: 'destination', params })
    return response.tiketux.result;
  }

  return { requestToken, getDeparture, getDestination }
}