import axios from "axios"
import cookie from 'cookies-js'


//添加照片
export const addPicture = (data) => {
    return axios.post(`http://api.yx101.cn/upload`,data);
};

//提交维修的数据
export const addRepair = (data) => {
    return axios.post(`http://api.yx101.cn/hycDevelop/api/order`,data);
};

