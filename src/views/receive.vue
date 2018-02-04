<template>
  <div class="contain">
   <div v-if="state"> 
      <div class="info">
        <p>维修项目: <span>{{repairInfo.repair_type}}</span> </p>
        <p>维修费用: <span>{{repairInfo.offer}}元</span></p>
      </div>
      <yd-button-group>
        <yd-button @click.native="changeRepairInfo('pending')" size="large">同意</yd-button>
        <yd-button @click.native="changeRepairInfo('cancel')" size="large" type="danger">不同意</yd-button>
      </yd-button-group>
   </div>

   <div class="text"  v-if="!state">
      <yd-icon name="warn-outline"></yd-icon>页面已过期
   </div>
  </div>
</template>
<script>
import * as api from "@/api/index.js";
export default {
  name: "userInfo",
  mounted() {
    if (this.order_id) {
      this.getRepairInfo();
    } else {
      this.toastError("发生了未知的错误");
    }
  },
  data() {
    return {
      order_id: this.$route.query.order_id,
      repairInfo: {},
      state:false
    };
  },
  methods: {
    //获取维修信息
    getRepairInfo() {
      api.getRepairInfo(this.order_id).then(res => {
        console.log(res);
        this.repairInfo = res.data[0];
        this.state = res.data[0].order_state == 'waitting'
      });
    },

    //改变状态
    changeRepairInfo(order_state) {
      api.putRepairInfo(this.order_id, { order_state }).then(res => {
        if (order_state == "pending") {
          this.toastSuccess("提交成功，正在为您处理");
        } else if (order_state == "pending") {
          this.toastSuccess("已关闭订单");
        }
      });
    }
  }
};
</script>
<style scoped lang="scss">
.contain {
  background: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  padding-top: 30%;
}

.info {
  text-align: center;
  margin-top: 30px;
  p {
    font-size: 34px;
    span {
      color: rgb(233, 158, 47);
    }
  }
}

</style>
