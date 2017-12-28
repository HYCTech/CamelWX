import router from './'

const setDocumentTitle = function(title) {
  document.title = title;
  if (/ip(hone|od|ad)/i.test(navigator.userAgent)) {
      var i = document.createElement('iframe');
      i.src = '/favicon.ico';
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
  //改变标题
  setDocumentTitle(to.name)

  next()
  
  })