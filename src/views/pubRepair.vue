<template>
  <div class="pb20">
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">位置：</span>
        <input slot="right" v-model="repairInfo.repair_place" type="text" placeholder="  例 5#2109">
      </yd-cell-item>

      <yd-cell-item arrow type="label">
        <span slot="left">报修类别：</span>
        <select v-model="repairInfo.repair_type" slot="right">
          <option value="其他">选择类别</option>
          <option value="灯具">灯具</option>
          <option value="厕所">厕所</option>
          <option value="门锁">门锁</option>
        </select>
      </yd-cell-item>

      <yd-cell-group class="mt20" title="报修信息">
        <yd-cell-item>
          <yd-textarea slot="right" v-model="repairInfo.content" placeholder="请输入您报修的内容" maxlength="120"></yd-textarea>
        </yd-cell-item>
      </yd-cell-group>
    </yd-cell-group>
    <!-- 图片上传 -->
    <uploads :uSuccess="uSuccess" :udel="del"></uploads>

    <yd-button class="mt30 mb30 submit" size="large" type="primary" @click.native="submitInfo" shape="circle">提交</yd-button>

  </div>
</template>

<script>
  import * as api from "@/api"
  import uploads from '../components/upload.vue'
  export default {
    name: 'prirRepair',
    components: {uploads},
    mounted(){
      this.repairInfo.openID = this.uesrInfo.wxopen_id
      this.repairInfo.customer_name = this.uesrInfo.owner_name
      this.repairInfo.customer_tel = this.uesrInfo.telephone_number
    },
    data() {
      return {
        repairInfo: {
          openID:'',
          repair_place: '',
          customer_name: '',
          customer_tel: '',
          repair_type: '',
          date: (new Date()).toLocaleDateString(),
          content: '',
          picture: [],
          order_state: 'waitting',
          order_type: 'public'
        }
      }
    },
    
    methods: {
      uSuccess(res){
       //  console.log(res,'上传成功回调')
        let filename =this.imgbaseUrl + res.filename
        let minFilename =this.imgbaseUrl +res.minFilename
        this.repairInfo.picture.push({filename,minFilename})
      },
      del(i){
        this.repairInfo.picture.splice(i,1)
      },
      submitInfo() {
        if(this.repairInfo.repair_place&&this.repairInfo.repair_type&&this.repairInfo.content&&this.repairInfo.picture.length){     
             api.addRepair(this.repairInfo).then(res=>{
                 this.toastSuccess('提交成功，请等待审核') 
             })
        }else{
             this.toastError('请完整填写信息！') 
        }      
      }
    }
  }

</script>

<style scoped>
  .submit {
    width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

</style>
