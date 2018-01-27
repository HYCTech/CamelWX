<template>
    <div class="contain">
        <div class="info">
            <p>维修项目: <span>{{repairInfo.type}}</span> </p>
            <p>维修费用: <span>{{repairInfo.money}}元</span></p>
        </div>
        <yd-button-group>

        <yd-button @click.native="openConfrim" size="large">同意</yd-button>

        <yd-button @click.native="openNotify" size="large" type="danger">不同意</yd-button>

    </yd-button-group>
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
        type:'灯具',
        money:'100'
      }
    };
  },
  computed:{
    ...mapState(['userInfo'])
  },
  mothods:{
      
  },
  mounted(){
    // api.getPropertyOfcInfo('oQBciw1V5vt5kAYoY1RqLPc-7hX8').then(res=>{
    //   console.log(res)
    // })
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
        font-size: 17px;
        span{
        color: rgb(233, 158, 47);
        }
    }
   
    
}
</style>
