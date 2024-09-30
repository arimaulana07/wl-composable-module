import type { Router } from "vue-router";

export interface Emits {
  (e: 'onClickDetailTripHandler', indexParent: number): void;
}

export interface Props {
  data: any;
  isExpandedElement: boolean;
  indexParent: number;
}

export interface UsePageSchedule {
  router: Router;
  emits: Emits;
  props: Props;
}
