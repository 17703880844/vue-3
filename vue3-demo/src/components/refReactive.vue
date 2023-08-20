<template>
  <div>
    <!-- 1.学习ref与reactive  -->
    <!-- <div>{{ test }} -- {{ obj.count }}</div>
      <button @click="add">+1</button> -->
    <!-- 2.学习computed -->
    <!-- <div>原始数据：{{ arr }}</div>
      <div>处理后数据： {{ computedlist }}</div>
      <button @click="edit">修改</button> -->
  </div>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
// 1.学习ref与reactive
// let test = ref("宁海杰666");
// let obj = reactive({ count: 100 });
// let add = () => {
//   obj.count++;
//   console.log(obj.count);
// };
// 2.学习computed
// let arr = ref([1, 2, 3, 4, 5, 6, 7, 8]);
// let computedlist = computed(() => {
//   return arr.value.filter((item) => {
//     return item > 2;
//   });
// });
// let edit = () => {
//   arr.value.push("666");
// };
</script>
