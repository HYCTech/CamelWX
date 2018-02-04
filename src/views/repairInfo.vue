<!-- 报修信息-->
<template>
  <div class="">
    <yd-tab>
      <yd-tab-panel label="全部" active>
        <div class="pl20 pr20">
          <yd-preview :buttons="btns" class="mb30" v-for="(item,i) in data" :key="i">
            <yd-preview-header>
              <div slot="left">单号</div>
              <div slot="right">{{item.orderId}}</div>
            </yd-preview-header>
            <yd-preview-item>
              <div slot="left">报修时间</div>
              <div slot="right">{{item.date}}</div>
            </yd-preview-item>
            <yd-preview-item>
              <div slot="left">处理情况</div>
              <div slot="right">
                <yd-badge shape="square" v-if="item.order_state=='cancel'">{{item.order_state |order_state}}</yd-badge>
                 <yd-badge v-if="item.order_state=='pending'" shape="square" type="hollow">{{item.order_state |order_state}}</yd-badge>
                 <yd-badge v-if="item.order_state=='waitting'" shape="square">{{item.order_state |order_state}}</yd-badge>
                 <yd-badge v-if="item.order_state=='finished'" shape="square" type="primary">{{item.order_state |order_state}}</yd-badge>
              </div>       
            </yd-preview-item>

             <yd-preview-item>
              <div slot="left">图片</div>
              <div slot="right"><img class="repimg"  :src="item.picture[0].minFilename"></div>
            </yd-preview-item>
          </yd-preview>
           
           <div v-if="!data.length" class="tc pt10 pb20">无数据</div>

        </div>
      </yd-tab-panel>
      <yd-tab-panel label="待处理" >
        <div class="pl20 pr20">
           <yd-preview :buttons="btns" class="mb30" v-for="(item,i) in data.filter(i=>i.order_state=='waitting')" :key="i">
            <yd-preview-header>
              <div slot="left">单号</div>
              <div slot="right">{{item.orderId}}</div>
            </yd-preview-header>
            <yd-preview-item>
              <div slot="left">报修时间</div>
              <div slot="right">{{item.date}}</div>
            </yd-preview-item>
            <yd-preview-item>
              <div slot="left">处理情况</div>
              <div slot="right">
                <yd-badge shape="square" v-if="item.order_state=='cancel'">{{item.order_state |order_state}}</yd-badge>
                 <yd-badge v-if="item.order_state=='pending'" shape="square" type="hollow">{{item.order_state |order_state}}</yd-badge>
                 <yd-badge v-if="item.order_state=='waitting'" shape="square">{{item.order_state |order_state}}</yd-badge>
                 <yd-badge v-if="item.order_state=='finished'" shape="square" type="primary">{{item.order_state |order_state}}</yd-badge>
              </div>       
            </yd-preview-item>

             <yd-preview-item>
              <div slot="left">图片</div>
              <div slot="right"><img class="repimg"  :src="item.picture[0].minFilename"></div>
            </yd-preview-item>
          </yd-preview>
          
        </div>
      </yd-tab-panel>
      <yd-tab-panel label="处理中">
          <div class="pl20 pr20">
          <yd-preview :buttons="btns" class="mb30" v-for="(item,i) in data.filter(i=>i.order_state=='pending')" :key="i">
            <yd-preview-header>
              <div slot="left">单号</div>
              <div slot="right">{{item.orderId}}</div>
            </yd-preview-header>
            <yd-preview-item>
              <div slot="left">报修时间</div>
              <div slot="right">{{item.date}}</div>
            </yd-preview-item>
            <yd-preview-item>
              <div slot="left">处理情况</div>
              <div slot="right">
                <yd-badge shape="square" v-if="item.order_state=='cancel'">{{item.order_state |order_state}}</yd-badge>
                 <yd-badge v-if="item.order_state=='pending'" shape="square" type="hollow">{{item.order_state |order_state}}</yd-badge>
                 <yd-badge v-if="item.order_state=='waitting'" shape="square">{{item.order_state |order_state}}</yd-badge>
                 <yd-badge v-if="item.order_state=='finished'" shape="square" type="primary">{{item.order_state |order_state}}</yd-badge>
              </div>       
            </yd-preview-item>

             <yd-preview-item>
              <div slot="left">图片</div>
              <div slot="right"><img class="repimg"  :src="item.picture[0].minFilename"></div>
            </yd-preview-item>
          </yd-preview>

          <div v-if="!data.filter(i=>i.order_state=='pending').length" class="tc pt10 pb20">无数据</div>
            </div>

      </yd-tab-panel>
      <yd-tab-panel label="已完成">
          <div class="pl20 pr20">
          <yd-preview :buttons="btns" class="mb30" v-for="(item,i) in data.filter(i=>i.order_state=='finished')" :key="i">
            <yd-preview-header>
              <div slot="left">单号</div>
              <div slot="right">{{item.orderId}}</div>
            </yd-preview-header>
            <yd-preview-item>
              <div slot="left">报修时间</div>
              <div slot="right">{{item.date}}</div>
            </yd-preview-item>
            <yd-preview-item>
              <div slot="left">处理情况</div>
              <div slot="right">
                <yd-badge shape="square" v-if="item.order_state=='cancel'">{{item.order_state |order_state}}</yd-badge>
                 <yd-badge v-if="item.order_state=='pending'" shape="square" type="hollow">{{item.order_state |order_state}}</yd-badge>
                 <yd-badge v-if="item.order_state=='waitting'" shape="square">{{item.order_state |order_state}}</yd-badge>
                 <yd-badge v-if="item.order_state=='finished'" shape="square" type="primary">{{item.order_state |order_state}}</yd-badge>
              </div>       
            </yd-preview-item>

             <yd-preview-item>
              <div slot="left">图片</div>
              <div slot="right"><img class="repimg"  :src="item.picture[0].minFilename"></div>
            </yd-preview-item>
          </yd-preview>

           <div v-if="!data.filter(i=>i.order_state=='finished').length" class="tc pt10 pb20">无数据</div>
            </div>
      </yd-tab-panel>
    </yd-tab>

  </div>
</template>

<script>
import * as api from '@/api'
  export default {
    name: "repairInfo",
    mounted(){
      this.getPriRepairInfo()
    },
    data() {
      return {
        openID:sessionStorage.openid,
        data:[],
        info: [{
            num: "37789456",
            date: "12月13日",
            info: "电灯坏掉了",
            state: 1,
            src: "../assets/a.jpg"
          },
          {
            num: "37789496",
            date: "12月12日",
            info: "电灯坏掉了",
            state: 0,
            src: "../assets/a.jpg"
          }
        ],
        btns: []
      };
    },
    methods:{
      //获取维修信息
    getPriRepairInfo(){
      let openID=this.openID
      let filter = JSON.stringify({openID})
      api.getPriRepairInfo(filter).then(res=>{
        this.data=res.data
      })

    }

    }
  };

</script>

<style scoped>
  .repimg {
    width: 40%;
    height: auto;
  }

</style>
