<template>
  <div>
    <div class="ul" v-for="(item,index) in userList" :key="index">
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
        <button class="btn" @click='jiaCart(item)'>加入购物车</button>
      </div>
    </div>
    <div class="go_Cart" @click="cart">
      <img src="../assets/images/cart.png" alt />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import gets from "../eVue/eVue.js";
import "../mock/mock.js";

export default {
  mounted() {
    axios.get("/getData").then(res => {
      res.data.map((item, index) => {
        this.userList = item.goodList;
      });
    });
    gets.$on("sendData", data => {
      if (data == 0) {
        this.userList.sort((a, b) => {
          //价格升序
          return a.price - b.price;
        });
      } else if (data == 1) {
        this.userList.sort((a, b) => {
          //价格降序
          return b.price - a.price;
        });
      } else if (data == 2) {
         //销量升序
        this.userList.sort((a, b) => {
          return a.buyCount - b.buyCount;
        });
      } else if (data == 3) {
         //销量降序
        this.userList.sort((a, b) => {
          return b.buyCount - a.buyCount;
        });
      }
    });
  },
  data() {
    return {
      userList: []
    };
  },
  methods: {
    cart() {
      this.$router.push("/xiangqing");
    } ,
    jiaCart(row){
      //  console.log(item)
       this.$store.commit('jiaCart',row)
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
.ul {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 20px;
  .left {
    width: 30%;
    img {
      width: 100%;
    }
  }
  .right {
    width: 65%;
    padding-left: 10px;
    line-height: 30px;
  }
  .btn {
    position: absolute;
    bottom: 10px;
    right: 5px;
    background: #f00;
    outline: none;
    border: 0;
    padding: 5px 10px;
    color: #fff;
  }
  .span {
    color: #f00;
  }
  .title {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.go_Cart {
  width: 50px;
  height: 50px;
  background: rgb(121, 204, 224);
  position: fixed;
  top: 40%;
  right: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 30px;
    height: 30px;
  }
}
</style>