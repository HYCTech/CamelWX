<template>
  <div class="pb20">
     
      <Map></Map>
    <div class="repairSet">报修位置:<div class="address">{{address}}</div> </div> 
    <yd-cell-group class="">
      <yd-cell-group class="mt10" title="请输入报修备注">       
        <yd-cell-item>
          <yd-textarea slot="right" v-model="repairInfo.remarks" placeholder="" maxlength="70"></yd-textarea>
        </yd-cell-item>
      </yd-cell-group>

      <yd-cell-item arrow type="label">
        <span slot="left">报修类别：</span>
        <select v-model="repairInfo.category" slot="right">
          <option value="">选择类别</option>
          <option value="1">灯具</option>
          <option value="2">厕所</option>
          <option value="3">门锁</option>
        </select>
      </yd-cell-item>

      <yd-cell-group class="mt20" title="报修信息">
        <yd-cell-item>
          <yd-textarea slot="right" v-model="repairInfo.repairContent" placeholder="请输入您报修的内容" maxlength="120"></yd-textarea>
        </yd-cell-item>
      </yd-cell-group>
    </yd-cell-group>
    <uploads></uploads>
    <yd-button class="mt30 mb30 submit" size="large" type="primary" @click="submitRepairnInfo" shape="circle">提交</yd-button>

  </div>
</template>

<script>
  import uploads from'@/components/upload.vue'
  import Map from'@/components/map.vue'
  import {mapState } from 'vuex'
    export default {
      name:'prirRepair',
      data(){
          return{
              repairInfo:{
                remarks:'',
                // buildNum:'',
                // roomNum:'',
                category:'',
                repairContent:''
              }
          }
      },
      computed: mapState({
          address() {
          return this.$store.state.address
          }
        }),
      components:{
        uploads,
        Map
      },
      methods:{
          submitRepairnInfo(){
            console.log(repairInfo)
          }
      }


  }

</script>

<style scoped>
.repairSet{
  margin-top: 55%;
  color: #888;
  font-size: .25rem;
}
.address{
  color: #010101;
  font-size: .3rem;  
  
}
.submit{
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>
