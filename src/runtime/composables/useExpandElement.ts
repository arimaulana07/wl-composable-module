import { ref } from "#imports";

export const useExpandElement = () => {
  const expandedElIndex = ref<number | null>(null);
  const isElementExpanded = ref<boolean>(false);
  const elements = ref<HTMLElement[] | HTMLElement>([]);

  const onClickElHandler = (index?: number) => {
    if (index === undefined) return isElementExpanded.value = !isElementExpanded.value;
    expandedElIndex.value == index ? expandedElIndex.value = null : expandedElIndex.value = index as number;
  }

  const dynamicHeight = (index?: number) => {
    if (Array.isArray(elements.value)) {
      if (index === expandedElIndex.value) {
        return elements?.value[index]?.scrollHeight ? elements?.value[index]?.scrollHeight  + 'px' : '0px';
      } else {
        return '0px';
      }
    }

    return isElementExpanded.value ? elements.value.scrollHeight + 'px' : '0px';
  }

  return {
    expandedElIndex,
    isElementExpanded,
    elements,
    onClickElHandler,
    dynamicHeight
  };
}
