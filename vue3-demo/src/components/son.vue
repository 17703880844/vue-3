<template>
  <div>
    这里是son组件
    <!-- 对于props传递过来的数据，模板中可以直接使用 -->
    {{ car }}--{{ money }}
    <button @click="conutmoney">花钱</button>
  </div>
</template>

<script setup>
// 由于写了setup 无法直接配置props选项 需要借助"编译器宏"函数接收子组件传递的数据
let props = defineProps({
  car: String,
  money: Number,
});
let emit = defineEmits(["changemoney"]);
let conutmoney = () => {
  emit("changemoney", 5);
};
</script>
