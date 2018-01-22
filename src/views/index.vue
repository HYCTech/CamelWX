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
  methods:{
    ...mapState(['openID'])
  },
  mounted(){
      api.getWx({url:'http://wx.yx101.cn/#/userBind'}).then(res=>{
        console.log(res)
  //  location.href=`${res}`
      })
  }
};
</script>
<style lang='scss' scoped>

</style>