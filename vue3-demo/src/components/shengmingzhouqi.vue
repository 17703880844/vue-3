<template>
  <div></div>
</template>

<script setup>
import { onMounted } from "vue";
// beforeCreate和 created生命周期变成setup
let getlist = () => {
  setTimeout(() => {
    console.log("宁海杰666");
  }, 2500);
};
getlist();
// 如果有些代码需要在mounted中运行
onMounted(() => {
  console.log("onMounted生命周期--1");
});
// 写成函数的调用方式，可以调用多次 不会冲突
onMounted(() => {
  console.log("onMounted生命周期--2");
});
</script>
