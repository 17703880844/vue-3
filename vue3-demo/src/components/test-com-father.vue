<template>
  <div>
    <input type="text" ref="inp" />
    <button ref="btn" @click="handlebtn">点击让输入框聚焦</button>
    <testComVue ref="test"></testComVue>
    <button @click="getCom">获取组件</button>
  </div>
</template>

<script setup>
import testComVue from "./components/test-com.vue";
import { ref, onMounted } from "vue";
let inp = ref(null);
let btn = ref(null);
let test = ref(null);
onMounted(() => {
  console.log(inp.value);
  console.log(btn.value);
  console.log(test.value);
});
let handlebtn = () => {
  inp.value.focus(); //让input聚焦
};
let getCom = () => {
  console.log(test.value.num);
  test.value.add();
};
</script>
