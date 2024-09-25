import { ref } from "#imports";

const schedule = ref<any>(null);
const selectedSchedule = ref<any>(null);

export const useSchedule = () => {
  return { schedule, selectedSchedule };
}
