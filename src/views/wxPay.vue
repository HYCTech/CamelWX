<!-- 用户信息 -->
<template>
     <div class="pl20 pr20">
    <div class="userInfo mt20">
      <img :src="wx_info.headimgurl" alt="用户头像">
      <h3 class="mt10 ">{{wx_info.nickname}}</h3>
    </div>

   <div class=" mt40 pl20 pr20 pt30 pb30 tc info">
        <h3>业主：{{uesrInfo.owner_name}}</h3>
        <h3>电话：{{uesrInfo.telephone_number}}</h3>
        <h3>地址：{{uesrInfo.room_number}}</h3>
   </div>

       <yd-button class="mt30 mb30 submit" size="large" type="primary" @click.native="submitInfo" shape="circle">提交</yd-button>
       <yd-button class="mt30 mb30 submit" size="large" type="primary" @click.native="submitInfo2" shape="circle">提交1</yd-button>


  </div>
</template>

<script>
import { mapState } from "vuex";
import * as api from "@/api/index.js";
export default {
  name: "userInfo",
  data() {
    return {
     uesrInfo:JSON.parse(sessionStorage.userInfo),
     wx_info:JSON.parse(sessionStorage.wx_Info)
    };
  },
  methods: {

    submitInfo() {

      /*let filter = JSON.stringify({openid:"oQBciw2BV7CxY7zAxkx-yzEboppI",orderId:"111",descs:"22222",totalPrice:10,spbill_create_ip:"192.168.254.61"})
      //console.log(filter)
      let params={openid:"oQBciw2BV7CxY7zAxkx-yzEboppI",orderId:"111",descs:"22222",totalPrice:10,spbill_create_ip:"192.168.254.61"}
      api.wxpay(params).then(res=>{
        //this.data=res.data
        this.toastSuccess('提交成功，请等待审核')
        console.log("=========")
      })*/


      let params={openid:"oQBciw2BV7CxY7zAxkx-yzEboppI",orderId:"111",descs:"22222",totalPrice:10,spbill_create_ip:"192.168.254.61"}

      //获取订单号，并发起调用支付界面
      api.wxpayOrder(params).then(res=>{
        console.log(res.data);
        let rt=res.data;
        let appId=rt.appId
        let prepay_id=rt.prepay_id
        let nonceStr=rt.nonceStr
        let sign=rt.paySign
        console.log("appId: "+appId+" prepay_id:"+prepay_id+" nonceStr："+nonceStr+" sign:"+sign)
        WeixinJSBridge.invoke("getBrandWCPayRequest",{
            "appId" :appId, //公众号名称，由商户传⼊入
            "timeStamp" : "189026618", //时间戳 这⾥里随意使⽤用了⼀一个值
            "nonceStr" : nonceStr, //随机串
            "package" :"fee_type=1&prepay_id="+prepay_id, //扩展字段，由商户传⼊入
            "signType" : "MD5", //微信签名⽅方式:sha1
            "paySign" : sign //微信签名
          },
          function(e){
            alert(e.err_msg)
          })

       /* WeixinJSBridge.invoke("getBrandWCPayRequest",{
            "appId" : "wxf8b4f85f3a794e77", //公众号名称，由商户传⼊入
            "timeStamp" : "189026618", //时间戳 这⾥里随意使⽤用了⼀一个值
            "nonceStr" : "adssdasssd13d", //随机串
            "package" :"body=xxx&fee_type=1&input_charset=GBK&notify_url=http&out_trade_no=16642817866003386000&partner=1900000109&return_url=http&spbill_create_ip=127.0.0.1&total_fee=1&sign=273B7EEEE642A8E41F27213D8517E0E4", //扩展字段，由商户传⼊入
            "signType" : "SHA1", //微信签名⽅方式:sha1
            "paySign" : "b737015b5b1eabe5db580945a07eac08c7bb55f8" //微信签名
          },
          function(e){
            alert(e.err_msg)
          })*/

        })



    },
    submitInfo2(){
      var timestamp = (new Date()).getTime();
      console.log(timestamp); //1495302061441


      WeixinJSBridge.invoke("getBrandWCPayRequest",{
          "appId" : "wxf8b4f85f3a794e77", //公众号名称，由商户传⼊入
          "timeStamp" : "189026618", //时间戳 这⾥里随意使⽤用了⼀一个值
          "nonceStr" : "adssdasssd13d", //随机串
          "package" :"body=xxx&fee_type=1&input_charset=GBK&notify_url=http&out_trade_no=16642817866003386000&partner=1900000109&return_url=http&spbill_create_ip=127.0.0.1&total_fee=1&sign=273B7EEEE642A8E41F27213D8517E0E4", //扩展字段，由商户传⼊入
          "signType" : "SHA1", //微信签名⽅方式:sha1
          "paySign" : "b737015b5b1eabe5db580945a07eac08c7bb55f8" //微信签名
        },
        function(e){
          alert(e.err_msg)
        })

    },

  }
};
</script>

<style scoped lang='scss'>
.info {
  background: #fff;
  h3{
    margin-top: 30px;
    font-size: 35px;
    color:#000

  }

}
</style>
