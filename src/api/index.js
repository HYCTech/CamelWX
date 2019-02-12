import axios from "axios"
import cookie from 'cookies-js'

//微信认证接口（授权）
export const passWx = (data) => {
  return axios.post('/wxauto', data);
}
//通过code 获取用户信息 query code 授权成功返回的code
export const getInfo = (data) => {
  return axios.get(`/autoInfo?code=${data}`)
}

export const getUserInfo = (openid, rToken, token) => {
  return axios.get(`/opUserinfo?openid=${openid}&rToken=${rToken}&token=${token}`)
}
//添加业主信息
export const addProprietorsInfo = (data) => {
  return axios.post(`hycDevelop/api/owner/`, data);
}
//获取物业人员分页信息
export const getPropertyOfcInfo = (filter) => {
  return axios.get(`hycDevelop/api/owner?filter=${JSON.stringify(filter)}`);
}


//添加照片
export const addPicture = (data, config) => {
  return axios.post(`upload`, data, config);
}

//获取维修单信息（id）
export const getRepairInfo = (id) => {
    return axios.get(`hycDevelop/api/order/${id}`);
}

//获取报修信息
export const getPriRepairInfo = (filter) =>{
  return axios.get(`hycDevelop/api/order?filter=${filter}`)

}

//修改维修信息
export const putRepairInfo = (id,data) => {
    return axios.put(`hycDevelop/api/order/${id}`,data);
}

//提交维修的数据
export const addRepair = (data) => {
  return axios.post(`hycDevelop/api/order?order=1`, data);
}

export const getCode = (tel)=>{
  return axios.get(`sms/${tel}`)
}

//验证码验证
export const valsms = (tel,code)=>{
  return axios.get(`valsms/${tel}/${code}`)
}

export const wxpay = (data) => {
  return axios.post('/wxpay', data);
}
//获取订单号
export const wxpayOrder = (data) => {
  return axios.post('/payOrder', data);
}
