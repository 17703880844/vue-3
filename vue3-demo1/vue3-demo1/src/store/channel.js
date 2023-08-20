import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
export let usechannelStore = defineStore("channel", () => {
  let channelList = ref([]);
  let getList = async () => {
    let {
      data: { data },
    } = await axios.get("http://geek.itheima.net/v1_0/channels");
    channelList.value = data.channels;
    console.log(data.channels);
  };
  return {
    channelList,
    getList,
  };
});
