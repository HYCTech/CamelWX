import axios from "axios"
import cookie from 'cookies-js'

//微信认证接口（授权）
export const getWx = (data) => {
    return axios.post('/wxauto',data);
};




