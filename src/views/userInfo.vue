<!-- 用户信息 -->
<template>
     <div class="pl20 pr20">
    <div class="userInfo mt20">
      <img :src=userInfo.headimgurl alt="用户头像">
      <h3 class="mt10 ">{{userInfo.nickname}}</h3>
    </div>

   <div class=" mt40 pl20 pr20 pt30 pb30 tc info">
        <h3>业主：{{dbInfo.ownername}}</h3>
        <h3>电话：{{dbInfo.tel}}</h3>
        <h3>地址：{{dbInfo.address}}</h3>   
   </div>
       

   

  </div>
</template>

<script>
import { mapState } from "vuex";
import * as api from "@/api/index.js";
export default {
  name: "userInfo",
  data() {
    return {
      dbInfo: {
        name: "康康",
        ownername: "小唐",
        tel: 15160777766,
        address: "博士后家园A栋304"
      }
    };
  },
  computed:{
    ...mapState(['userInfo'])
  },
  mounted(){
    api.getPropertyOfcInfo( {wxopen_id:'oQBciw1V5vt5kAYoY1RqLPc-7hX8'}).then(res=>{
      console.log(res)
    })
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