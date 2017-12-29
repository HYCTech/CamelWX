<!-- 评价 -->
<template>
    <div class=" mt20 pl20 pr20">
        <yd-cell-group>
        <yd-cell-item>
            <span class="title mr30" slot="left">单号:</span>
            <input  slot="right" type="text" disabled v-model="orderNum">
        </yd-cell-item>

        <yd-cell-item>
            <span class="title mr30" slot="left">服务人员:</span>
            <input  slot="right" type="text" disabled v-model="seraveNmae">
        </yd-cell-item>
        
        <yd-cell-item>
             <span class="title mr30" slot="left">服务态度:</span>
             <yd-rate slot="left"  color='rgb(247, 186, 42) !important' active-color="rgb(247, 186, 42)" v-model="num1" :show-text="tipText"></yd-rate>
            
        </yd-cell-item>

        <yd-cell-item>
             <span class="title mr30" slot="left">服务质量:</span>
             <yd-rate slot="left" color='rgb(247, 186, 42) !important' active-color="rgb(247, 186, 42)" v-model="num2" :show-text="tipText"></yd-rate>   
        </yd-cell-item>
             
    </yd-cell-group>

    <yd-cell-group class="mt20" title="描述信息">
        <yd-cell-item>
            <yd-textarea slot="right" placeholder="请输入您的描述信息" maxlength="100"></yd-textarea>
        </yd-cell-item>
    </yd-cell-group>

<yd-button class="mt30" size="large" type="primary"  shape="circle">提交</yd-button>
     
    </div>
</template>

<script>
export default {
  name: "evaluation",
  data() {
    return {
      orderNum: "58444688",
      seraveNmae: "小黄师傅",
      num1: 5,
      num2: 5,
      tipText: [
        '<span style="color:red;">很差</span>',
        '<span style="color:blue;"> 勉强</span>',
        '<span style="color:green;"> 一般</span>',
        '<span style="color:black;"> 挺好</span>',
        '<span style="color:rgb(247, 186, 42);"> 非常好</span>'
      ]
    };
  }
};
</script>

<style scoped  lang='scss'>
.title {
  width: 150px;
  text-align: right;
}
input{
    color:#000 !important;
}
</style>