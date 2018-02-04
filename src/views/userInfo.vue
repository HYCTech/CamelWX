<!-- 用户信息 -->
<template>
     <div class="pl20 pr20">
    <div class="userInfo mt20">
      <img :src="wx_info.headimgurl" alt="用户头像">
      <h3 class="mt10 ">{{wx_info.nickname}}</h3>
    </div>

   <div class=" mt40 pl20 pr20 pt30 pb30 tc info">
        <h3>业主：{{uesrInfo.owner_name}}</h3>
        <h3>电话：{{uesrInfo.telephone_number}}</h3>
        <h3>地址：{{uesrInfo.room_number}}</h3>   
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
     uesrInfo:JSON.parse(sessionStorage.userInfo),
     wx_info:JSON.parse(sessionStorage.wx_Info) 
    };
  },
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