<!-- 用户绑定 -->
<template>
  <div class="pl20 pr20">
    <div class="userInfo mt20">
      <img src="../assets/pic.png" alt="用户头像">
      <h3 class="mt10 ">{{name}}</h3>
    </div>

    <yd-cell-group class="mt30">
        <yd-cell-item>
            <span slot="left">业主姓名</span>
            <input class='pl20' slot="right" type="text" v-model="userInfo.name" placeholder="请输入姓名">
        </yd-cell-item>
        <yd-cell-item >
            <span slot="left">手机号：</span>
            <input class='pl20' slot="right" type="number" v-model="userInfo.tel" placeholder="请输入手机号">
        </yd-cell-item>
    </yd-cell-group>    

     <yd-button class="mt30" size="large" type="primary" shape="circle">提交</yd-button>

  </div>
</template>

<script>
  export default {
    name: 'userBind',
    data() {
      return {
        name: '康康',
        userInfo: {
          name: '',
          tel: ''
        }
      }
    }


  }

</script>

<style scoped lang="scss">


</style>
