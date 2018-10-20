import router from './'
import * as api from "@/api/index.js";
import store from '../store'
import axios from 'axios'
const setDocumentTitle = function(title) {
  document.title = title;
  if (/ip(hone|od|ad)/i.test(navigator.userAgent)) {
    var i = document.createElement('iframe');
    i.src = '';
    i.style.display = 'none';
    i.onload = function() {
      setTimeout(function() {
        i.remove();
      }, 10)
    }
    document.body.appendChild(i);
  }
}

const login = () => {
  sessionStorage.openid = 'oQBciw9rRatSaEb0CPiS3XliOgUM'
  let wx_Info = {
    "openid": "oQBciw9rRatSaEb0CPiS3XliOgUM",
    "nickname": "曾永发",
    "sex": 1,
    "language": "zh_CN",
    "city": "泉 州 ",
    "province ": "福建 ",
    "country ": "中国 ",
    "headimgurl ": "http: //wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eonNbjkjaX9tVoF1iaFaCictC3rmmWW3qqFdt1KBfQIG7UQlEwT5iaM6x3wuJjOe7FHMXdQW54ssD4cg / 132 ",
    "privilege ": []
  }
  let userInfo = {
    "_id": "5a6f357d0ef4996bb0f99d7f",
    "owner_name": "永发",
    "telephone_number": "15160777695",
    "wxopen_id": "oQBciw9rRatSaEb0CPiS3XliOgUM",
    "_nowtime": 1517237629293,
    "room_number": "A110"
  }
  sessionStorage.userInfo = JSON.stringify(userInfo)
  sessionStorage.wx_Info = JSON.stringify(wx_Info)

}

//路由拦截
router.beforeEach((to, from, next) => {

  //白名单
  let WhiteList = ['/receive', '/receiveInfomation', '/orderDetails']
  login()
    //改变标题
  setDocumentTitle(to.name)
  console.log(WhiteList.includes(to.path))
  if (to.query.openid || sessionStorage.openid || WhiteList.includes(to.path)) {
    next()
  } else {
    let code
    console.log(window.location.href.includes('code'))
    if (!window.location.href.includes('code')) {
      console.log('认证')
      api.passWx({
        url: location.href
      }).then(res => {
        // console.log(res)
        window.location.href = res

      })
    } else {
      console.log('没有认证')
      code = location.search.substring(1).split('&')[0].split('=')[1]
      let redirect = location.href.split('state=#')[1]
      if (!window.location.href.includes('openid')) {
        console.log(code)
        api.getInfo(code).then(res1 => {
          sessionStorage.openid = res1.data.openid
          api.getPropertyOfcInfo({
            wxopen_id: res1.data.openid
          }).then(res2 => {
            console.log('检查用户', res2.data)
            if (res2.data.length) {
              console.log('已有id用户')
              sessionStorage.has = 'true'
              sessionStorage.userInfo = JSON.stringify(res2.data[0])
              api.getUserInfo(res1.data.openid, res1.data.refresh_token,
                res1.data.access_token).then(res3 => {
                store.commit('SET_USERINFO', res3.data.userInfo)
                sessionStorage.wx_Info = JSON.stringify(res3.data
                  .userInfo)
                next({
                  query: {
                    openid: res1.data.openid
                  }
                })
              })
            } else {
              console.log('第一次进来')
              api.getUserInfo(res1.data.openid, res1.data.refresh_token,
                res1.data.access_token).then(res3 => {
                store.commit('SET_USERINFO', res3.data.userInfo)
                sessionStorage.wx_Info = JSON.stringify(res3.data
                  .userInfo)
                next({
                  path: `/userBinde?code=${code}&openid=${res1.data.openid}&redirect=${redirect}`,
                  query: {
                    redirect
                  }
                })

              })
            }
          })

        })

      } else {
        console.log('有openid')
        next()
      }


    }



  }



  //  next()

})
