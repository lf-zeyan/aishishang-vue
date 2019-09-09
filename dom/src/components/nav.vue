<template>
  <div class="nav">
    <p v-for="(item,index) in list" :key="index"  @click='sort(index)'>
        {{item.name}}
    </p>
  </div>
</template>

<script>

import gets from '../eVue/eVue.js'

export default {
  data() {
    return {
      list: [
        { name: "价格升序↑", path: "/jiagesheng" },
        { name: "价格降序↓", path: "/jiagejiang" },
        { name: "销量升序↑", path: "/xiaoliangsheng" },
        { name: "销量降序↓", path: "/xiaoliangjiang" }
      ]
    };
  },
  methods: {
    sort(index){
      // console.log(index)
      gets.$emit('sendData',index)
    }
  }
};
</script>

<style lang="scss" scoped>
.nav{
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #ccc;
}
</style>