<!-- 用户绑定 -->
<template>
  <div class="pl20 pr20">
    <div class="userInfo mt20">
      <img :src='userInfo.headimgurl' alt="用户头像">
      <h3 class="mt10 ">{{userInfo.nickname}}</h3>
    </div>

    <yd-cell-group class="mt30">
      <yd-cell-item>
        <span slot="left">姓名</span>
        <input class='pl20' slot="right" type="text" v-model="user.owner_name" placeholder="请输入姓名">
      </yd-cell-item>
      <!-- <yd-cell-item >
            <span slot="left">手机号：</span>
            <input class='pl20' slot="right" type="number" v-model="user.telephone_number" placeholder="请输入手机号">
        </yd-cell-item> -->
      <yd-cell-item>
        <yd-icon slot="icon" name="phone3" size=".45rem"></yd-icon>
        <input type="number"  v-model="user.telephone_number" slot="right" placeholder="请输入手机号码">

        <!-- ↓↓关键代码是这里↓↓ -->
        <yd-sendcode slot="right" v-model="start1" @click.native="sendCode1" type="warning"></yd-sendcode>
        <!-- ↑↑关键代码是这里↑↑ -->

      </yd-cell-item>
    </yd-cell-group>

    <yd-button class="mt30" size="large" type="primary" shape="circle" @click.native="sublmit">提交</yd-button>

  </div>
</template>

<script>
  import {
    mapState
  } from "vuex";
  import * as api from "@/api/index.js";
  
  export default {
    name: "userBind",
    data() {
      return {
        start1: false,
        user: {
          owner_name: "",
          telephone_number: "",
          wxopen_id: '',

        }
      };
    },
    computed: {
      ...mapState(['openID', 'userInfo'])
    },
    methods: {
      sendCode1() {
        this.$dialog.loading.open('发送中...');
        setTimeout(() => {
          this.start1 = true;
          this.$dialog.loading.close();
          this.$dialog.toast({
            mes: '已发送',
            icon: 'success',
            timeout: 1500
          });

        }, 1000);
      },


      sublmit() {
        if(this.$route.query.openid){
         this.user.wxopen_id=this.$route.query.openid
        }else{
          this.user.wxopen_id=sessionStorage.openid

       }
        api.addProprietorsInfo(this.user).then(res => {
          window.localStorage.yongXingOpenID=JSON.stringify(this.openID)
          console.log(res)
          this.$dialog.toast({
            mes: "绑定成功",
            timeout: 1500,
            icon: "success"
          });
        })

      }
    },
    mounted() {
     console.log(this.$route)
     
     
      console.log(this.openID,1)
    }
  };

</script>

<style scoped lang="scss">


</style>
