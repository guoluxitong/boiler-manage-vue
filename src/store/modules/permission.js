import {constantRouterMap } from '../../router'
import Layout from '../../views/layout/Layout'

const permission = {
  namespaced: true,
  state: {
    routers: [],
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state,routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    },
    REMOVE_ROUTERS: (state) => {
      state.routers = []
      state.addRouters = []
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {

        const allMenus = data.data;
        const routers=[]
        if(allMenus && allMenus.length>0){
            const firstLevelMenus=filterFirstLevelMenus(allMenus, 0);

            firstLevelMenus.forEach(item=>{
                const routerItem=generateRoute(item)
                routerItem.children=generateRoutesFromMenu(item.resId,allMenus)
                routers.push(routerItem)
            })
        }
        commit('SET_ROUTERS', routers)
        resolve(routers)
      })
    },
    //删除产品信息
    removeRouters({ commit, state }) {
      commit('REMOVE_ROUTERS')
    },
  }
}

/**
 * 过滤各个级别的菜单
 * @param routeMap
 * @param menu_level
 * @returns {*}
 */
function filterFirstLevelMenus(menus, menu_level) {
  const accessedRouters = menus.filter(item => {
      return item.pId==menu_level;
  })
  return accessedRouters;
}

/**
 * 生成路由列表
 * @param id
 * @param menus
 * @returns {Array}
 */
function generateRoutesFromMenu (id, menus = []) {
  let childMenus=[]
  let childRouters=[]
  menus.forEach(item=>{
    if(id==item.pId){
      childMenus.push(item)
    }
  })
  childMenus.forEach(item=>{
    childRouters.push(generateRoute(item))
    childRouters.children=generateRoutesFromMenu(item.resId,menus)
  })
  return childRouters
}

/**
 * 路由各个参数的匹配
 * @param routerMap
 */
function generateRoute(routerMap) {
  let router={};
  router.path=routerMap.url==null?'':routerMap.url;
  if(routerMap.pId==0){
    router.component=Layout
  }else{
    if(routerMap.pageUrl){
      router.component=() => import('@/views'+routerMap.pageUrl)
    }else{
      router.component=() => import('@/views/'+routerMap.url+'/index')
    }
    if(routerMap.hidden){
      router.hidden=routerMap.hidden==1?true:false
    }

  }
  router.name=routerMap.url||""+Math.random();
  router.meta={title:routerMap.resName,noCache: true }
  return router
}

export default permission
