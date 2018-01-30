<template>
    <div class="contain">
        <div class="info">
            <h3>物业通知</h3>
            <p>{{repairInfo.infomation}}</p>
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
      repairInfo: {
        infomation:'业主集体开会啦'
      }
    };
  },
  computed:{

  },
  mothods:{
      
  },
  mounted(){
    api.getPropertyOfcInfo('oQBciw1V5vt5kAYoY1RqLPc-7hX8').then(res=>{
      console.log(res)
    })
  }
};
</script>
<style scoped lang="scss">
.contain{
    background: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    padding-top: 30%;
}
.info{
    
    text-align: center;
    margin-top: 30px;
    p{
        font-size: 34px;
    }
   
    
}
</style>
