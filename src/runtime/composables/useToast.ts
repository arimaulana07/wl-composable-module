import { useNuxtApp } from '#imports';

export const useToast = () => {
  const { $toast } = useNuxtApp();
  return { toast: $toast }
};