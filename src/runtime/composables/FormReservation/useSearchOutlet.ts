import { ref, computed, watch } from "#imports";
import { groupBy, searchData } from "../../utils/index";

interface SearchOutletParams {
  selectedOutlet: any;
  outlets: any;
}

export const useSearchOutlet = ({ selectedOutlet, outlets }: SearchOutletParams) => {
  const searchedOutlets = ref<any>({ kota: [], outlet: [] });
  const groupedSearchedOutlets = computed(() => {
    return {
      kota: searchedOutlets.value?.kota,
      outlet: groupBy(searchedOutlets.value.outlet)
    }
  });

  /* Change searched outlet based on keywords changes and outlest changes */
  watch([() => selectedOutlet?.value.editableLabel, outlets], ([newLabel]) => {
    if (newLabel) {
      const filteredCity = searchData({ keys: ['nama'], keyword: newLabel, list: outlets.value?.kota });
      const filteredOutlet =  searchData({ keys: ['nama', 'kota'], keyword: newLabel, list: outlets.value?.outlet });
      searchedOutlets.value.kota = filteredCity;
      searchedOutlets.value.outlet = filteredOutlet;
    } else {
      searchedOutlets.value.kota = outlets.value?.kota;
      searchedOutlets.value.outlet = outlets.value?.outlet;
    }

  }, { immediate: true });

  return { searchedOutlets, groupedSearchedOutlets }
}

