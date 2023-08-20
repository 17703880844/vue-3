<template>
  <h3>
    我是son2-{{ counterStore.count }}<br /><button
      @click="counterStore.subCount"
    >
      -
    </button>
  </h3>
</template>
<script setup>
import { useCounterStore } from "../store/counter";
let counterStore = useCounterStore();
</script>
