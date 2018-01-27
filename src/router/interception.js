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
          setTimeout(function(){
              i.remove();
          }, 10)
      }
      document.body.appendChild(i);
  }
}

//路由拦截
router.beforeEach((to, from, next) => {
    console.log(to)


  //改变标题
  setDocumentTitle(to.name)
  
  let getCold=true,
        code

 console.log(window.location.href.includes('code'))
  if(!window.location.href.includes('code')){
    api.passWx({url:'http://wx.yx101.cn/#/userBind'}).then(res=>{
    console.log(res)
    window.location.href=res 
      
  })
  }else{
      let _this=this
   code =location.search.substring(1).split('&')[0].split('=')[1]
   getCold=false
   console.log(code)
    api.getInfo(code).then(res1=>{    
        alert('用户的openid:'+res1.data.openid)
        api.getPropertyOfcInfo( {wxopen_id:res1.data.openid}).then(res2=>{
            alert('检查用户'+res2.data[0])
            // let id=res2.data[0].wxopen_id
            if(res2.data[0].wxopen_id.lengh!=0){
                alert('已有id用户')
                api.getUserInfo(res1.data.openid,res1.data.refresh_token,res1.data.access_token).then(res3=>{
                    store.commit('SET_USERINFO',res3.data.userInfo)
                    next()
               
                  })
            }
            else {
                alert('第一次进来')
                // store.commit('SET_OPENID',res1.data.openid)
                api.getUserInfo(res1.data.openid,res1.data.refresh_token,res1.data.access_token).then(res3=>{
                store.commit('SET_USERINFO',res3.data.userInfo)
                next()
           
              })
            }
          })
      
    })

  }



  //next()
  
  })