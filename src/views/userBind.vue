<!-- 用户绑定 -->
<template>
  <div class="pl20 pr20">
    <div class="userInfo mt20">
      <img :src='wx_info.headimgurl' alt="用户头像">
      <h3 class="mt10 ">{{wx_info.nickname}}</h3>
    </div>
    <div v-if="!has">
    <yd-cell-group class="mt30">
      <yd-cell-item>
        <span slot="left">业主姓名</span>
        <input class='pl20' slot="right" type="text" v-model="user.owner_name" placeholder="请输入姓名">
      </yd-cell-item>
       <yd-cell-item>
        <span slot="left">房号</span>
        <input class='pl20' slot="right" type="text" v-model="user.room_number" placeholder="请输入房号">
      </yd-cell-item>
      <!-- <yd-cell-item >
            <span slot="left">手机号：</span>
            <input class='pl20' slot="right" type="number" v-model="user.telephone_number" placeholder="请输入手机号">
        </yd-cell-item> -->
      <yd-cell-item>
        <yd-icon slot="icon" name="phone3" size=".45rem"></yd-icon>
        <input type="number"  v-model="user.telephone_number" slot="right" placeholder="请输入手机号码">

        <!-- ↓↓关键代码是这里↓↓ -->
        <yd-sendcode slot="right" v-model="start1" @click.native="sendCode" type="warning"></yd-sendcode>
        <!-- ↑↑关键代码是这里↑↑ -->

      </yd-cell-item>

       <yd-cell-item>
        <span slot="left">验证码</span>
        <input class='pl20' slot="right" type="text" v-model="vCode" placeholder="请输入验证码">
      </yd-cell-item>
    </yd-cell-group>

    <yd-button class="mt30" size="large" type="primary" shape="circle" @click.native="sublmit">提交</yd-button>
    </div>
    <div class="text" v-if="has">
        <yd-icon name="warn-outline"></yd-icon>用户已绑定
    </div>
  </div>
</template>

<script>
  import * as api from "@/api/index.js";
  
  export default {
    name: "userBind",
    data() {
      return {
        has :sessionStorage.has == 'true', //是否已经绑定
        start1: false,
        vCode:'',
        user: {
          owner_name: "",  //业主姓名
          telephone_number: "", //电话号码
          wxopen_id: sessionStorage.openid,  
          room_number:''  //房间号

        }
      }
    },
    methods: {
      sendCode() {
        let tel = this.user.telephone_number
        if(this.valTel(tel)){
          api.getCode(tel).then(res=>{
            this.toastSuccess('发送成功，请查收')
          })
        }else{
         this.toastError('请输入正确的电话号码')
        }
       
      },

      //提交按钮
      sublmit() {
        if(this.valInfo()){
          if(!this.vCode==5){
            this.toastError('验证码错误')
          }else{
            this.valsms()            

          }

        }else{
          this.toastError('请填写完整信息！')
        }
        

      },
      //验证验证码
      valsms(){
        api.valsms(this.user.telephone_number,this.vCode).then(res=>{
          this.addUserInfo()
        })
      },

      //验证所有需要的字段是否为空
      valInfo(){
        let userVal = Object.values(this.user)
        let userIs = userVal.includes('')
        if( this.valTel(this.user.telephone_number)&&!userIs&&this.vCode.length){      
           return true
        }else {
          return false
        }     
      },

      //添加用户信息
      addUserInfo(){
        api.addProprietorsInfo(this.user).then(res => {
          console.log(res)
          this.$dialog.toast({
            mes: "绑定成功",
            timeout: 1500,
            icon: "success"
          });
          setTimeout(()=>{
            if(this.$route.query.redirect){
              this.$router.push(this.$route.query.redirect)
            }
          },1500)
        })

      }
    },
    
  
  };

</script>

<style scoped lang="scss">


</style>
