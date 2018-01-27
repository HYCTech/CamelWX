import axios from "axios"
import cookie from 'cookies-js'

//微信认证接口（授权）
export const passWx = (data) => {
    return axios.post('/wxauto',data);
};
//通过code 获取用户信息 query code 授权成功返回的code
export const getInfo = (data) => {
   return axios.get(`/autoInfo?code=${data}`)
};
//通过 openid ,accessToken ,refreshToken 找用户信息
//query openid 
//query rToken  返回的 refreshToken 
//query token   返回的 accessToken
export const getUserInfo = (openid,rToken,token ) => {
    return axios.get(`/opUserinfo?openid=${openid}&rToken=${rToken}&token=${token}`)
 };
//添加业主信息
 export const addProprietorsInfo = (data) => {
    return axios.post(`hycDevelop/api/owner/`,data);
};
//获取物业人员分页信息
export const getPropertyOfcInfo = (filter) => {

return axios.get(`hycDevelop/api/owner?filter=${JSON.stringify(filter)}`);
};
