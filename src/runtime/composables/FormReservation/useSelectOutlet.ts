import type { UseSelectOutlet } from "./type";

export const useSelectOutlet: UseSelectOutlet = ({ currentSelectedOutlet, newSelectedOutlet }) => {
  currentSelectedOutlet.value = newSelectedOutlet;
}