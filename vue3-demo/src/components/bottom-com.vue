<template>
  <div>
    <h3>低层组件--{{ color }}--{{ money }}</h3>
    <button @click="clickFn">使用父组件传递的方法</button>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";
let color = inject("theme-color");
let money = inject("num");
let changemoney = inject("changemoney");
let clickFn = () => {
  changemoney(500);
};
</script>
