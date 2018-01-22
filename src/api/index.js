import axios from "axios"
import cookie from 'cookies-js'

//微信认证接口（授权）
export const passWx = (data) => {
    return axios.post('/wxauto',data);
};
//通过code 获取用户信息 query code 授权成功返回的code
export const getInfo = (data) => {
   
    axios.get(`/autoInfo?code=${data}`)
};


