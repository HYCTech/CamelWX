import axios from "axios"
import cookie from 'cookies-js'


//添加照片
export const addPicture = (data,config) => {
    return axios.post(`upload`,data,config);
};




//提交维修的数据
export const addRepair = (data) => {
    return axios.post(`hycDevelop/api/order?order=1`,data);
};




