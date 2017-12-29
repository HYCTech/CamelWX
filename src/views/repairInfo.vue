<!-- 报修信息-->
<template>
  <div class="">
    <yd-tab>
      <yd-tab-panel label="未处理" active>
        <div class="pl20 pr20">
          <yd-preview :buttons="btns" class="mb30" v-for="(item,i) in info" :key="i">
            <yd-preview-header>
              <div slot="left">单号</div>
              <div slot="right">{{item.num}}</div>
            </yd-preview-header>
            <yd-preview-item>
              <div slot="left">报修时间</div>
              <div slot="right">{{item.date}}</div>
            </yd-preview-item>
            <yd-preview-item>
              <div slot="left">处理情况</div>
              <div slot="right">
                <yd-badge shape="square">未处理</yd-badge>
              </div>

            </yd-preview-item>
            <yd-preview-item>
              <div slot="left">维修描述</div>
              <div slot="right">{{item.info}}</div>
            </yd-preview-item>
            <yd-preview-item>
              <div slot="left">图片</div>
              <div slot="right"><img class="repimg" src="../assets/a.jpg" :alt="item.info"></div>
            </yd-preview-item>
          </yd-preview>
        </div>
      </yd-tab-panel>
      <yd-tab-panel label="处理中">
          <div class="pl20 pr20">
              <yd-preview :buttons="btns" class="mb30" v-for="(item,i) in info" :key="i">
                <yd-preview-header>
                  <div slot="left">单号</div>
                  <div slot="right">{{item.num}}</div>
                </yd-preview-header>
                <yd-preview-item>
                  <div slot="left">报修时间</div>
                  <div slot="right">{{item.date}}</div>
                </yd-preview-item>
                <yd-preview-item>
                  <div slot="left">处理情况</div>
                  <div slot="right">
                    <yd-badge shape="square" type="hollow">处理中</yd-badge>
                  </div>
    
                </yd-preview-item>
                <yd-preview-item>
                  <div slot="left">维修描述</div>
                  <div slot="right">{{item.info}}</div>
                </yd-preview-item>
                <yd-preview-item>
                  <div slot="left">图片</div>
                  <div slot="right"><img class="repimg" src="../assets/a.jpg" :alt="item.info"></div>
                </yd-preview-item>
              </yd-preview>
            </div>

      </yd-tab-panel>
      <yd-tab-panel label="已完成">
          <div class="pl20 pr20">
              <yd-preview :buttons="btns" class="mb30" v-for="(item,i) in info" :key="i">
                <yd-preview-header>
                  <div slot="left">单号</div>
                  <div slot="right">{{item.num}}</div>
                </yd-preview-header>
                <yd-preview-item>
                  <div slot="left">报修时间</div>
                  <div slot="right">{{item.date}}</div>
                </yd-preview-item>
                <yd-preview-item>
                  <div slot="left">处理情况</div>
                  <div slot="right">
                    <yd-badge shape="square" type="primary">已完成</yd-badge>
                  </div>
    
                </yd-preview-item>
                <yd-preview-item>
                  <div slot="left">维修描述</div>
                  <div slot="right">{{item.info}}</div>
                </yd-preview-item>
                <yd-preview-item>
                  <div slot="left">图片</div>
                  <div slot="right"><img class="repimg" src="../assets/a.jpg" :alt="item.info"></div>
                </yd-preview-item>
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
    }
  };

</script>

<style scoped>
  .repimg {
    width: 60%;
    height: auto;
  }

</style>
