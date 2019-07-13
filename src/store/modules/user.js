import Layout from '../../views/layout/Layout'

const user = {
    state: {
        token: '',
        userId: '',
        password: '',
        orgId: '',
        orgType: '',
        mobile: '',
        email: '',
        weiXin: '',
        qQ: '',
        realName: '',
        userName: '',
        organizationName: '',
        role: {roleId:0},
        websock: null,
        menus: null
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_USERID: (state, userId) => {
            state.userId = userId
        },
        SET_ORGID: (state, orgId) => {
            state.orgId = orgId
        },
        SET_PASSWORD: (state, password) => {
            state.password = password
        },
        SET_ORGTYPE: (state, orgType) => {
            state.orgType = orgType
        },
        SET_MOBILE: (state, mobile) => {
            state.mobile = mobile
        },
        SET_EMAIL: (state, email) => {
            state.email = email
        },
        SET_WEIXIN: (state, weiXin) => {
            state.weiXin = weiXin
        },
        SET_QQ: (state, qQ) => {
            state.qQ = qQ
        },
        SET_REALNAME: (state, realName) => {
            state.realName = realName
        },
        SET_USERNAME: (state, userName) => {
            state.userName = userName
        },
        SET_ORGANIZATIONNAME: (state, organizationName) => {
            state.organizationName = organizationName
        },
        SET_ROLE: (state, role) => {
            state.role = role
        },
        SET_ROLELIST: (state, roleList) => {
            state.roleList = roleList
        },
        INIT_WEBSOCK: (state, websock) => {
            state.websock = websock
        },
        CLOSE_WEBSOCK: (state) => {
            if (state.websock) state.websock.close()
        },
        SET_MENUS: (state, menus) => {
            state.menus = menus
        },
    },

    actions: {
        saveUserState(store, { baseInfo, sysInfo, router }) {
            return new Promise((resolve, reject) => {
                const { commit, dispatch, rootState } = store
                commit('SET_USERID', baseInfo.id)
                commit('SET_PASSWORD', baseInfo.password)
                commit('SET_ORGID', baseInfo.orgId)
                commit('SET_ORGTYPE', baseInfo.orgType)
                commit('SET_MOBILE', baseInfo.mobile)
                commit('SET_EMAIL', baseInfo.email)
                commit('SET_WEIXIN', baseInfo.weiXin)
                commit('SET_QQ', baseInfo.qQ)
                commit('SET_REALNAME', baseInfo.realName)
                commit('SET_ORGANIZATIONNAME', baseInfo.orgName)
                commit('SET_USERNAME', sysInfo.userName)
                commit('SET_ROLE', { "roleId": sysInfo.roleId, "roleName": sysInfo.roleName })
                let menus = generateMenusFromResources(sysInfo.listResource);
                commit('SET_MENUS', menus)
                router.addRoutes(generateRoutesFromMenus(menus))
                resolve()
            })
        },
        changePassword({commit}, newPassword){
            commit('SET_PASSWORD', newPassword)
        }
    },
}

/**
 * 由菜单列表生产路由项
 * @param {菜单列表} menus 
 */
function generateRoutesFromMenus(menus = []) {
    if (menus) {
        let routers = []
        menus.forEach(m => {
            if (m.hasChilds) {
                let router = {}
                router.component = Layout
                router.path = '/'
                router.children = []
                m.childs.forEach(s => {
                    router.children.push(generateChildRoute(s))
                })
                routers.push(router)
            }
            else {
                routers.push(generateSingleRoute(m))
            }
        })
        return routers
    }
    return [];
}
/**
 * 生产子路由
 * @param {菜单项} menuitem 
 */
function generateChildRoute(menuitem) {
    let child = {}
    child.path = menuitem.url
    child.name = Math.random()
    if (menuitem.pageUrl) {
        child.component = () => import('@/views' + menuitem.pageUrl)
    } else {
        child.component = () => import('@/views/' + menuitem.url + '/index')
    }
    if (menuitem.hidden) {
        child.hidden = menuitem.hidden == 1
    }
    child.meta = { title: menuitem.title, noCache: true }
    return child
}
/**
 * 生产单条路由
 * @param {菜单项} menuitem 
 */
function generateSingleRoute(menuitem) {
    let router = {}
    let child = generateChildRoute(menuitem)
    router.component = Layout
    router.path = '/'
    router.children = [child]
    return router
}
/**
 * 由资源构建菜单
 * @param {资源列表} resources 
 */
function generateMenusFromResources(resources = []) {
    if (resources) {
        let topMenus = [];
        let topResources = resources.filter(r => r.pId == 0);
        topResources.forEach(t => {
            let subResources = resources.filter(r => r.pId == t.id)
            let topMenu = {"id":t.id, "title": t.resName, "hasChilds": subResources.length != 0, "childs": [], "url": t.url, "pageUrl": t.pageUrl, "hidden": t.hidden }
            subResources.forEach(s => {
                let subMenu = { "id":s.id,"title": s.resName, "url": s.url, "pageUrl": s.pageUrl, "hidden": s.hidden }
                topMenu.childs.push(subMenu)
            })
            topMenus.push(topMenu)
        });
        return topMenus;
    }
    return [];
}
export default user
