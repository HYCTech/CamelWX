import axios from "axios"
import cookie from 'cookies-js'
let baseUrl = '/index.php?i=1&c=entry&m=rq_custom&do='

//模拟登陆
export const login = () => {
    return axios.post(`${baseUrl}login` )
};


//获取用户基础信息
export const getUserInfo = () => {
    return axios.post(`${baseUrl}user` )
};

//微信JS配置参数获取
export const getConfigInfo = () =>{
    return axios.post(`${baseUrl}jsconfig`)
}
//微信支付预下单数据(测试版)
export const pay = () =>{
  return axios.post(`${baseUrl}prepay`)    
} 