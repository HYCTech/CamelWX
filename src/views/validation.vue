<!-- 验收-->
<template>
<div class="pl20 pr20 pb20">
    <yd-preview :buttons="btns"  class="mt20 mb20" v-for="(item,i) in info" :key="i" @click.native="click(i)">
        <yd-preview-header>
            <div slot="left">单号</div>
            <div slot="right">{{item.num}}</div>
        </yd-preview-header>
        <yd-preview-item>
            <div slot="left">时间</div>
            <div slot="right">{{item.date}}</div>
        </yd-preview-item>
         <yd-preview-item>
            <div slot="left">维修师傅</div>
            <div slot="right">{{item.name}}</div>
        </yd-preview-item>
        <yd-preview-item>
            <div slot="left">维修描述</div>
            <div slot="right">{{item.info}}</div>
        </yd-preview-item>
        <yd-preview-item>
            <div slot="left">图片</div>
            <div slot="right"><img class="repimg" src="../assets/ligth.jpg" :alt="item.info"></div>      
        </yd-preview-item>     
    </yd-preview>
</div>
</template>

<script>
export default {
  name: "validation",
  data() {
    return {
      index: 0,
      info: [
        {
          num: "37789456",
          date: "12月13日",
          info: "电灯已修好",
          src: "../assets/a.jpg",
          name:'白师傅'
        },
        {
          num: "37789496",
          date: "12月12日",
          info: "电灯已修好",
          src: "../assets/a.jpg",
          name:'黄师傅'
        }
      ],
      btns: [
        {
          text: "不合格",
          click: () => {
            this.$dialog.toast({
              mes: "不合格",
              timeout: 1500,
              icon: "error"
            });
          }
        },
        {
          color: "#F00",
          text: "通过",
          click: () => {
            this.$dialog.toast({
              mes: "通过",
              timeout: 1500,
              icon: "success"
            });
          }
        }
      ]
    };
  },
  methods: {
    click(i) {
      this.index = i;
      console.log(i);
    }
  }
};
</script>

<style scoped>
.repimg {
  width: 60%;
  height: auto;
}
</style>