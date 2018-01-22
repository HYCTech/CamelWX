<template>
  <div class="pb20">
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">房号：</span>
        <input slot="right" v-model="repairInfo.department" type="text" placeholder="  例 5#2109">
      </yd-cell-item>

      <yd-cell-item arrow type="label">
        <span slot="left">报修类别：</span>
        <select v-model="repairInfo.repair_type" slot="right">
          <option value="">选择类别</option>
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
    <uploads></uploads>
    <yd-button class="mt30 mb30 submit" size="large" type="primary" @click.native="submitInfo" shape="circle">提交</yd-button>

  </div>
</template>

<script>
  import * as api from "@/api/repair";
  import {
    mapState
  } from 'vuex'
  import uploads from '../components/upload.vue'
  export default {
    name: 'prirRepair',
    data() {
      return {
        repairInfo: {
          department: '',
          employee_name: 'cxxDemo',
          telephone_number: '',
          repair_type: '',
          date: (new Date()).toLocaleDateString(),
          content: '',
          picture: '',
          material_cost: '',
          maintenance_cost: '',
          offer: '',
          order_state: 'waiting',
          order_type: 'personal'
        }
      }
    },
    computed: mapState({
      imgUrl() {
        return this.$store.state.imgUrl
      }
    }),
    components: {
      uploads
    },
    methods: {
      submitInfo() {
        this.repairInfo.picture = this.imgUrl
        this.openConfrim()


      },
      openConfrim() {
        console.log('res')
        // this.$dialog.loading.open('正在提交中...');
        this.$dialog.confirm({
          title: '提交成功',
          mes: '继续报修请点击继续!!  查看报修信息请点击查看!!',
          opts: [{
              txt: '继续',
              color: false,
              callback: () => {
                
                // this.repairInfo.department=''
                this.$router.go(0)
                // this.$router.replace({
                //   path: `/priRepair`
                // })
                // this.$router.push({
                //   path: `/priRepair`
                // })
              }
            },
            {
              txt: '查看',
              color: true,
              callback: () => {
                this.$router.push({
                  path: `/repairInfo`
                })
              }
            }
          ]
        });
      }
    },
    mounted(){
      console.log('this.repairInfo.department')
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
