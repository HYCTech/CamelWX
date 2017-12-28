<!-- 用户信息 -->
<template>
     <div class="pl20 pr20">
    <div class="userInfo mt20">
      <img src="../assets/pic.png" alt="用户头像">
      <h3 class="mt10 ">{{userInfo.name}}</h3>
    </div>

   <div class=" mt40 pl20 pr20 pt30 pb30 tc info">
        <h3>业主：{{userInfo.ownername}}</h3>
        <h3>电话：{{userInfo.tel}}</h3>
        <h3>地址：{{userInfo.address}}</h3>   
   </div>
       

   

  </div>
</template>

<script>
export default {
  name: "userInfo",
  data() {
    return {
      userInfo: {
        name: "康康",
        ownername: "小唐",
        tel: 15160777766,
        address: "博士后家园A栋304"
      }
    };
  }
};
</script>

<style scoped lang='scss'>
.info {
  background: #fff;
  h3{
    margin-top: 30px;
    font-size: 35px;
    color:#000
    
  }

}
</style>