<template>
  <div>
    <input
      type="text"
      :value="modelValue"
      @input="(e) => (modelValue = e.target.value)"
    />
  </div>
</template>

<script setup>
import { defineModel } from "vue";
let modelValue = defineModel();
</script>
