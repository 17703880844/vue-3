<template>
  <div>
    <h3>APP根组件-{{ msg }}-{{ count }}-{{ counterStore.double }}</h3>
    <button @click="channelStore.getList">获取频道数据</button>
    <ul>
      <li v-for="item in channelStore.channelList" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
    <son1Com></son1Com>
    <son2Com></son2Com>
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import son1Com from "./components/son1Com.vue";
import son2Com from "./components/son2Com.vue";
import { useCounterStore } from "./store/counter";
import { usechannelStore } from "./store/channel";
let counterStore = useCounterStore();
let channelStore = usechannelStore();
// 直接结构会破坏响应性 用storeToRefs包含需要结构的pinia
let { count, msg } = storeToRefs(counterStore);
</script>
