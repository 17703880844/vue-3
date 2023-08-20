<template>
  <div>
    <h3>
      我是son1-{{ counterStore.count }} <br /><button
        @click="counterStore.addCount"
      >
        +
      </button>
    </h3>
  </div>
</template>
<script setup>
import { useCounterStore } from "../store/counter";
let counterStore = useCounterStore();
</script>
