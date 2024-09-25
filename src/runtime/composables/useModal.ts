import { ref } from '#imports';
import { onClickOutside } from '@vueuse/core';

export const useModal = () => {
  const showModal = ref(false);
  const modalEl = ref(null);
  onClickOutside(modalEl, () => {
    showModal.value = false;
  });

  return { modalEl, showModal };
}
