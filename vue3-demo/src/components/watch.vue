<template>
  <div>
    {{ name }} -{{ number }}
    <button @click="changenumber">改数字</button>
    <button @click="changename">改名字</button>
    <div>{{ obj.name }}--{{ obj.age }}</div>
    <button @click="changeobj">改对象</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
let number = ref(666);
let name = ref("宁海杰");
let obj = ref({
  name: "宁海杰",
  age: 23,
});
let changenumber = () => {
  number.value++;
};
let changename = () => {
  name.value = "宁海杰666";
};
let changeobj = () => {
  // obj.value.name = "宁海杰666";
  // obj.value.age = "666";
  obj.value.age++;
};
// 1.监视单个数据的变化
// watch(number, (newvalue, oldvalue) => {
//   console.log(oldvalue);
//   console.log(newvalue);
// });
// 2.监视多个数据的变化
// watch([number, name], (newvalue, oldvalue) => {
//   console.log(oldvalue);
//   console.log(newvalue);
// });
// 3.immediate 立即触发回调
// watch(
//   number,
//   (newvalue, oldvalue) => {
//     console.log(oldvalue);
//     console.log(newvalue);
//   },
//   { immediate: true }
// );
// 4.deep深度监视，默认watch进行的是 浅层监视
// watch(
//   obj,
//   (newvalue) => {
//     console.log(newvalue);
//   },
//   { deep: true }
// );
// 5.对于对象中的属性 进行监视
watch(
  () => obj.value.age,
  (newvalue, oldvalue) => {
    console.log(oldvalue);
    console.log(newvalue);
  }
);
</script>
