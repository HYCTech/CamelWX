<template>
  <div>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">第几栋：</span>
        <input slot="right" v-model="buildNum" type="text" placeholder=" 请输入栋数  例东3#">
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">房号：</span>
        <input slot="right" v-model="roomNum" type="number" placeholder=" 请输入房号 例2109">
      </yd-cell-item>


      <yd-cell-item arrow type="label">
        <span slot="left">报修类别：</span>
        <select v-model="category" slot="right">
          <option value="">选择类别</option>
          <option value="1">灯具</option>
          <option value="2">厕所</option>
          <option value="3">门锁</option>
        </select>
      </yd-cell-item>

      <yd-cell-group class="mt20" title="报修信息">
        <yd-cell-item>
          <yd-textarea slot="right" v-model="repairContent" placeholder="请输入您报修的内容" maxlength="120"></yd-textarea>
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
                buildNum:'',
                roomNum:'',
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
