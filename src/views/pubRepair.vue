<template>
  <div class="pb20">
    <yd-cell-group>
   
      <yd-cell-group class="mt20" title="报修位置备注">
        <yd-cell-item>
          <yd-textarea slot="right" v-model="repairInfo.remarks" placeholder="备注" maxlength="70"></yd-textarea>
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
    <yd-button class="mt30 submit" size="large" type="primary" @click="submitRepairnInfo" shape="circle">提交</yd-button>

  </div>
</template>

<script>
  import uploads from'../components/upload.vue'
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
      components:{
        uploads
      },
      methods:{
          submitRepairnInfo(){
            console.log(repairInfo)
          }
      }


  }

</script>

<style>
.submit{
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>
