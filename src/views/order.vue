<!-- 报修信息-->
<template>
  <div class="">
    <yd-tab>
      <yd-tab-panel label="可接单" active>
        <div class="pl20 pr20">
          <yd-preview :buttons="btns" class="mt30" v-for="(item,i) in info" :key="i">
            <!-- <yd-preview-header>
              <div slot="left">单号</div>
              <div slot="right">{{item.num}}</div>
            </yd-preview-header> -->
         
      
      
            <yd-preview-item>
              <div slot="left">房间号</div>
              <div slot="right">{{item.room}}</div>
            </yd-preview-item>
            <yd-preview-item>
              <div slot="left">报修类别</div>
              <div slot="right">
                <yd-badge shape="square">灯具</yd-badge>
              </div>

            </yd-preview-item>
            <yd-preview-item>
              <div slot="left">维修描述</div>
              <div slot="right">{{item.info}}</div>
            </yd-preview-item>
            <yd-preview-item>
              <div slot="left">报修图片</div>
              <div slot="right"><img class="repimg" src="../assets/a.jpg" :alt="item.info"></div>
            </yd-preview-item>
            <yd-button-group class="pd10">
              <yd-button class="mt20"  @click.native="openConfrim" size="small">接单</yd-button>
            </yd-button-group>
          </yd-preview>
        </div>
      </yd-tab-panel>
      <yd-tab-panel label="处理中">
             <div class="pl20 pr20">
          <yd-preview :buttons="btns" class="mt30" v-for="(item,i) in info" :key="i">
            <!-- <yd-preview-header>
              <div slot="left">单号</div>
              <div slot="right">{{item.num}}</div>
            </yd-preview-header> -->
         
      
      
            <yd-preview-item>
              <div slot="left">房间号</div>
              <div slot="right">{{item.room}}</div>
            </yd-preview-item>
            <yd-preview-item>
              <div slot="left">报修类别</div>
              <div slot="right">
                <yd-badge shape="square">灯具</yd-badge>
              </div>

            </yd-preview-item>
            <yd-preview-item>
              <div slot="left">维修描述</div>
              <div slot="right">{{item.info}}</div>
            </yd-preview-item>
            <yd-preview-item>
              <div slot="left">报修图片</div>
              <div slot="right"><img class="repimg" src="../assets/a.jpg" :alt="item.info"></div>
            </yd-preview-item>
            <yd-button-group class="pd10">
              <yd-button class="mt20"  @click.native="openConfrim" size="small" type="warning" disabled>处理中</yd-button>
            </yd-button-group>
          </yd-preview>
        </div>

      </yd-tab-panel>
      <yd-tab-panel label="已完成">
             <div class="pl20 pr20">
          <yd-preview :buttons="btns" class="mt30" v-for="(item,i) in info" :key="i">
            <!-- <yd-preview-header>
              <div slot="left">单号</div>
              <div slot="right">{{item.num}}</div>
            </yd-preview-header> -->
         
      
      
            <yd-preview-item>
              <div slot="left">房间号</div>
              <div slot="right">{{item.room}}</div>
            </yd-preview-item>
            <yd-preview-item>
              <div slot="left">报修类别</div>
              <div slot="right">
                <yd-badge shape="square">灯具</yd-badge>
              </div>

            </yd-preview-item>
            <yd-preview-item>
              <div slot="left">维修描述</div>
              <div slot="right">{{item.info}}</div>
            </yd-preview-item>
            <yd-preview-item>
              <div slot="left">报修图片</div>
              <div slot="right"><img class="repimg" src="../assets/a.jpg" :alt="item.info"></div>
            </yd-preview-item>
            <yd-button-group class="pd10">
              <yd-button class="mt20"  @click.native="openConfrim" size="small" type="disabled" disabled>已完成</yd-button>
            </yd-button-group>
          </yd-preview>
        </div>
      </yd-tab-panel>
    </yd-tab>

  </div>
</template>

<script>
  export default {
    name: "repairInfo",
    data() {
      return {
        info: [{
            num: "37789456",
            room: "9#209",
            info: "电灯坏djjdjdjddn思考开始掉电灯坏djjdjdjddn思考开始掉电灯坏djjdjdjddn思考开始掉了",
            state: 1,
            src: "../assets/a.jpg"
          },
          {
            num: "37789496",
            room: "9#000",
            info: "电灯坏掉了",
            state: 0,
            src: "../assets/a.jpg"
          }
        ],
        btns: []
      };
    }
  };

</script>

<style scoped>
  .repimg {
    width: 60%;
    height: auto;
  }

</style>
