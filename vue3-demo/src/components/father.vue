<template>
  <div>
    <h1>这里是父组件--{{ money }}</h1>
    <son car="宝马" :money="money" @changemoney="getson"></son>
    <button @click="addmoney">加钱</button>
  </div>
</template>

<script setup>
// 父传子
// 1.给子组件，添加属性的方法传值
// 2.在子组件，通过props传值
// 子传父
// 1.在子组件内部，通过emit触发事件(编译器宏)
// 2.在父组件，通过@监听
import son from "./components/son.vue";
import { ref } from "vue";
let money = ref(100);
let addmoney = () => {
  money.value++;
};
let getson = (newMoney) => {
  money.value = newMoney;
  console.log(newMoney);
};
</script>
