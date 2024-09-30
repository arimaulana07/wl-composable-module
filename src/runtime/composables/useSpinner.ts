import { ref } from "vue";

export const useSpinner = () => {
  const showSpinner = ref(true);
  return { showSpinner }
};
