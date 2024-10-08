<script setup lang="ts">
import { useToast } from '#imports';


onMounted(() => {
  useToast().toast.warn('Loaded!')
});
</script>
<template>
  <h1>Hello World</h1>
</template>