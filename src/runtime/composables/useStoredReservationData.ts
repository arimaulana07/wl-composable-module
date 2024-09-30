import { useStorage } from "@vueuse/core";
import { useStore } from "../store/store";

interface UseStoredDataParams {
  sessionId: string;
}


export const useStoredReservationData = ({ sessionId }: UseStoredDataParams) => {
  const storedDataRef = useStorage<any>(sessionId, null);
  const storedData = JSON.parse(useStorage<any>(sessionId, null).value as unknown as string);

  const store = useStore();

  const setStoredReservationData = () => {
    storedDataRef.value = JSON.stringify(store.$state);
  }

  const restoreStoredReservationData = () => {
    store.$state = { ...storedData, selectedDate: new Date(storedData.selectedDate) }
  }

  const isSessionExpired = () => {
    const sessionTimeStamp = storedData.sessionTimeStamp;
    const currentTimeStamp = new Date().getTime();
    
    const diffInMinutes = (currentTimeStamp - sessionTimeStamp) / (1000 * 60);
    return diffInMinutes > 15;
  }

  if (storedData && isSessionExpired()) localStorage.removeItem(sessionId);
  
  return {
    getStoredReservationData: storedData,
    setStoredReservationData,
    restoreStoredReservationData,
    isSessionExpired
  }

}
