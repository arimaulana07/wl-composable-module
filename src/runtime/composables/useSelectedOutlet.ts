import { ref } from "#imports";

interface SelectedDepartureParams {
  setSelectedDeparture?: any;
  isDeparture?: any;
  modal: any
}

interface SelectedOutlet {
  label: any;
  value: any;
  editableLabel: any;
}

export const useSelectedOutlet = ({ setSelectedDeparture = null, isDeparture = null, modal }: SelectedDepartureParams) => {
  const selectedOutlet = ref<SelectedOutlet>({ label: null, value: null, editableLabel: null });
  const selectOutletHandler = (outlet: any) => {
    selectedOutlet.value.label = outlet.label;
    selectedOutlet.value.editableLabel = outlet.label;
    selectedOutlet.value.value = outlet.value;
    modal.value = false;
    if (isDeparture) {
      setSelectedDeparture(outlet.value)
    }

    console.log({ outlet })
  }

  return { selectedOutlet, selectOutletHandler }
}
