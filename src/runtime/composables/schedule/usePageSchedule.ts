import { onMounted } from 'vue';
import { useSpinner } from '../useSpinner';

export const usePageSchedule = () => {
  const { showSpinner } = useSpinner();

  onMounted(() => {
    showSpinner.value = false;
  });

  return { showSpinner };
}