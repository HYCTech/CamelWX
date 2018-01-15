import axios from "axios"
import cookie from 'cookies-js'


//添加照片
export const addPicture = (data,config) => {
    return axios.post(`http://api.yx101.cn/upload`,data,config);
};

//自动生成id
export const addOrderId = (data) => {
    return axios.post(`{baseUrl}/ccc/api/owner/`,data)
};


//提交维修的数据
export const addRepair = (data) => {
    return axios.post(`http://api.yx101.cn/hycDevelop/api/order`,data);
};




