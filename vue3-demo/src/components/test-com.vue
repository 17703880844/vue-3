<template>
  <div>
    我是用于测试的组件--{{ num }}
    <button @click="add">++</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
let num = ref(100);
let add = () => {
  num.value++;
};
defineExpose({
  num,
  add,
});
</script>
