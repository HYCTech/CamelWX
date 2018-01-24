<!-- by your name -->
<template>
  <div >
    <yd-cell-group class="mt30">
     <yd-cell-item  v-for="(item , index) in routerList" :key="index" arrow type="a" @click.native="$router.push(item.path)">
            <span slot="left">{{item.name}}</span>
        </yd-cell-item>  
    </yd-cell-group>
  </div>
</template>

<script>
import router from '../router'
import * as api from "@/api/index.js";
import { mapState } from "vuex";
import axios from 'axios'
export default {
  data() {
    return {
       routerList:router.options.routes.filter(i=>i.name)
    };
  },
  computed:{
    ...mapState(['openID'])
  },
  methods:{
    
  },
  mounted(){
      if(window.localStorage.openID=''){
        api.passWx({url:'http://wx.yx101.cn/#/userBind'}).then(res=>{
        console.log(res)
        window.location.href=res 
        let path = window.location.href
          let satart=path.indexOf('code')+1
          let last =path.lastIndexOf('&')
          let code =path.substring(start,last)
       api.getInfo('code').then(res1=>{
         this.$store.commit('SET_OPENID',res1.data.openid)
         api.getUserInfo(res1.data.openid,res1.data.refresh_token,res1.data.access_token).then(res2=>{
         this.$store.commit('SET_USERINFO',res2.data.userInfo)

       }) 
       })

      })
      }
      else{
        
      }
  }
};
</script>
<style lang='scss' scoped>

</style>