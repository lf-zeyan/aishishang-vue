
<template>
    <div>
        <div class="header">
           <div class="touxiang">
               <img src="../assets/images/avatar.jpg" alt="">
           </div>
        </div>
           <div class="title">
               <h3>爱时尚精品屋</h3>
               <p>公告:欢迎光临,流行爆款库存有限请尽早下单,谢谢</p>
           </div>
    </div>
</template>


<script>
export default {
    
}
</script>


<style lang="scss" scoped>
 
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
.header{
  width: 100%;
  height: 200px;
  background: #f60;
  background: url('../assets/images/banner-2.png') no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}
.touxiang{
    width: 80px;
    height: 80px;
    position: absolute;
    bottom: -40px;
    left: 50%;
    margin-left: -40px;
}
.touxiang img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.title{
    margin-top: 50px;
    text-align: center;
    marquee{
        height: 40px;
        line-height: 40px;
    }
}
</style>