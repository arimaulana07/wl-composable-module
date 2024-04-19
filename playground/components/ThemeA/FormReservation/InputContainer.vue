<script setup lang="ts">
interface Props {
  title: string
}
const props = defineProps<Props>();

</script>

<template>
  <div class="flex flex-col">
    <span class="text-white mb-1">
      {{ props.title }}
    </span>
    
    <slot></slot>
  </div>
</template>