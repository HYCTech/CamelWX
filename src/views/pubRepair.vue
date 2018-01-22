<template>
  <div class="pb20">

    <Map></Map>
    <div class="repairSet">报修位置:
      <div class="address">{{address}}</div>
    </div>
    <yd-cell-group class="">
      <yd-cell-group class="mt10" title="报修详细地址">
        <yd-cell-item>
          <yd-textarea  slot="right" v-model="repairInfo.remarks" placeholder="请输入地址备注" maxlength="70"></yd-textarea>
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
          <yd-textarea  slot="right" v-model="repairInfo.repairContent" placeholder="请输入您报修的内容" maxlength="120"></yd-textarea>
        </yd-cell-item>
      </yd-cell-group>
    </yd-cell-group>
    <uploads></uploads>
    <yd-button class="mt30 mb30 submit" size="large" type="primary" @click="submitRepairnInfo" shape="circle">提交</yd-button>

  </div>
</template>

<script>
  import uploads from '@/components/upload.vue'
  import Map from '@/components/map.vue'
  import {
    mapState
  } from 'vuex'
  export default {
    name: 'prirRepair',
    data() {
      return {
        repairInfo: {
          department: '',
          address_detail:'',
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
          order_type: 'public'
        }
      }
    },
    computed: mapState({
      address() {
        return this.$store.state.address
      },
      imgUrl() {
        return this.$store.state.imgUrl
      }
    }),
    components: {
      uploads,
      Map
    },
    methods: {
      submitRepairnInfo() {
        // this.department=this.address
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
    }


  }

</script>

<style scoped>
  .repairSet {
    margin-top: 55%;
    color: #888;
    font-size: .25rem;
    padding: 0 .24rem .1rem;
  }

  .address {
    color: #010101;
    font-size: .3rem;
  }
  .addressDetail textarea{
    height: .5rem;
  }
  .yd-textarea>textarea{
    height: 1rem;
  }
  .submit {
    width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

</style>
