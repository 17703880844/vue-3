import { defineStore } from "pinia";
import { ref, computed } from "vue";

//定义store
// definStore(仓库的唯一标识，()=>{...})
export let useCounterStore = defineStore(
  "counter",
  () => {
    // 声明数据 state
    let count = ref(100);
    // 声明操作数据的方法 action
    let addCount = () => {
      count.value++;
    };
    let subCount = () => {
      count.value--;
    };
    // 声明基于数据派生的计算属性 getters(computed)
    let double = computed(() => count.value * 2);

    //声明第二个数据 msg
    let msg = ref("宁海杰666");
    return {
      count,
      double,
      msg,
      addCount,
      subCount,
    };
  },
  {
    // persist: true, //开启当前模块的持久化
    persist: {
      key: "hm-counter", //修改本地存储的key
      paths: ["count"], //那些数据需要持久化存储
    },
  }
);
