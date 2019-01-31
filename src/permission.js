import router from './router'
import store from './store'

router.beforeEach((to, from, next) => {
  if(to.path === '/login'){
    next()
  }else{
    if(store.getters.roleList.length === 0){
      store.dispatch('GetUserInfo').then(data => {
        store.dispatch('GenerateRoutes', {data}).then(() => {
          router.addRoutes(store.getters.addRouters)
          if(data.length>0){
            next({ ...to, replace: true })
          }else{
            next()
          }
        })
      }).catch((err) => {
        store.dispatch('LogOut').then(() => {
          window.close()
        })
      })
    }else{
      next()
    }
  }
})
