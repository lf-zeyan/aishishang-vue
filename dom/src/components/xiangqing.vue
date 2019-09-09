<template>
  <div class="boss">
    <h1>我是购物车</h1>
    <div v-if="lists.length<1">
      <div>
        <img src="../assets/images/没有更多.png" alt />
      </div>
    </div>
    <div v-else>
      <div class="uls" v-for="(item,index) in lists" :key="index">
        <div class="left">
          <img :src="item.pic" alt />
        </div>
        <div class="right">
          <p class="title">{{item.name}}</p>
          <p>已售:{{item.buyCount}}件</p>
          <div>
            单价:
            <span class="span">￥{{item.price}}</span>
          </div>
        </div>
        <div class="nums">
          <button @click="jian(item.id)">-</button>
          <span>{{item.num}}</span>
          <button @click="jia(item.id)">+</button>
        </div>
      </div>
    </div>
    <div class="bars">
      <div>
        总数:
        <span>{{totle}}</span>
      </div>
      <div>
        总价:
        <span>￥{{zongjia}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["lists"]),
    totle() {
      //总数
      return this.lists.reduce((a, b) => {
        return a + b.num;
      }, 0);
    },
    zongjia() {
      return this.lists.reduce((a, b) => {
        return a + b.num * b.price;
      }, 0);
    }
  },
  methods: {
    jia(id) {
      this.$store.commit("jia", id);
    },
    jian(id) {
      this.$store.commit("jian", id);
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.bars {
  position: absolute;
  display: flex;
  span {
    color: #f00;
  }
}

.uls {
  width: 100%;
  height: 100px;
  display: flex;
  border-bottom: 1px solid #ccc;
  align-items: center;
  position: relative;
  .left {
    width: 30%;
    img {
      width: 100%;
    }
  }
  .right {
    padding-left: 10px;
  }
  .nums {
    display: flex;
    position: absolute;
    bottom: 10px;
    right: 5px;
    button {
      padding: 0px 10px;
    }
  }
}
</style>