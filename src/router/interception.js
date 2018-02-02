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

     //白名单
    let WhiteList = ['/receive','/receiveInfomation']
    WhiteList.forEach( item =>{
        if(to.path==item){
            next()
        }
    })
    
 
  //改变标题
  setDocumentTitle(to.name)
  /*if(to.query.openid){
      next()
  }
  else{

    let code
    
     console.log(window.location.href.includes('code'))
      if(!window.location.href.includes('code')){
          console.log('认证')
        api.passWx({url:location.href}).then(res=>{
        // console.log(res)
        window.location.href=res 
          
      })
      }else{
        console.log('没有认证')
        code =location.search.substring(1).split('&')[0].split('=')[1]
        let redirect = location.href.split('state=#')[1]
       console.log(!window.location.href.includes('openid'),window.location.href)
       if(!window.location.href.includes('openid')){
        console.log(code)
        api.getInfo(code).then(res1=>{    
            // console.log(res1,11)
            // console.log('用户的openid:'+res1.data.openid)
            sessionStorage.openid=res1.data.openid
            api.getPropertyOfcInfo( {wxopen_id:res1.data.openid}).then(res2=>{
                console.log('检查用户'+res2.data)
                // let id=res2.data[0].wxopen_id
                if(res2.data.length){
                    console.log('已有id用户')
                    sessionStorage.has='true'
                    api.getUserInfo(res1.data.openid,res1.data.refresh_token,res1.data.access_token).then(res3=>{
                        store.commit('SET_USERINFO',res3.data.userInfo)
                        next({query:{openid:res1.data.openid}})
                      })
                }
                else {
                    console.log('第一次进来')
                    // store.commit('SET_OPENID',res1.data.openid)
                    api.getUserInfo(res1.data.openid,res1.data.refresh_token,res1.data.access_token).then(res3=>{
                    store.commit('SET_USERINFO',res3.data.userInfo)
                    next({ path: `/userBinde?code=${code}&openid=${res1.data.openid}&redirect=${redirect}`,query:{redirect}})
                  //  window.location.href= location.origin+`#/userBinde?code=${code}&openid=${res1.data.openid}`
                  })
                }
              })
          
        })
    
       }else{
           console.log('有openid')
           next()
       }
       

  }
  
  

  }

*/

 next()
  
  })