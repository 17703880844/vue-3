<template>
  <div>
    <myInput v-model="txt"></myInput>
    {{ txt }}
  </div>
</template>

<script setup>
import myInput from "./components/my-input.vue";
import { ref } from "vue";
let txt = ref("123456");
</script>
