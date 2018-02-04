import intercepter from './intercepter'
import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog';
export default {
    install(Vue, opts) {
        intercepter(Vue, opts)
        Vue.mixin({
            data() {
                return {
                imgbaseUrl: 'http://api.yx101.cn/img/',
                 uesrInfo:sessionStorage.userInfo?JSON.parse(sessionStorage.userInfo):{},
                 wx_info:sessionStorage.wx_Info?JSON.parse(sessionStorage.wx_Info):{} 
                };
              },
            created() {
                // console.log(this.$options.name + 'created')
            },
            mounted() {
                //console.log(this.$options.name + 'mounted') 
            },
            methods:{
                //成功弹框
                toastSuccess(mes) {Toast({mes,timeout: 1500,icon: 'success'})}, 
                //错误弹框
                toastError(mes) {Toast({ mes,timeout: 1500, icon: 'error'}) }, 

                //验证电话码号
                valTel(tel){
                    tel = tel+''
                    return tel&&tel.length==11&&tel[0]==1
                }
            },
            filters:{
                order_state(v){
                     switch(v){
                         case 'pending':
                         return '处理中'
                         case 'cancel':
                         return '已取消'
                         case 'waitting':
                         return '待处理'
                         case 'finished':
                         return '已完成'
                         default :
                         return '其他'
                         
                     } 
                }
            }
        })
    }

}