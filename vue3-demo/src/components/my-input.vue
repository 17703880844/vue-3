<template>
  <div>
    <input
      type="text"
      :value="modelValue"
      @input="(e) => emit('update:modelValue', e.target.value)"
    />
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
defineProps({
  modelValue: String,
});
let emit = defineEmits(["updata:modelValue"]);
</script>
