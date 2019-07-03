import { loginByUsername, loginByCAS } from '../../api/login'
import { getLoginUserInfo } from '../../api/user'
import { getToken, setToken, removeToken } from '../../utils/auth'
import { loginout } from "../../api/loginout";
import { config } from '../../config/index'
const user = {
    state: {
        token: getToken(),
        userId: '',
        password: '',
        orgId: '',
        orgType: '',
        mobile: '',
        email: '',
        weiXin: '',
        qQ: '',
        realName: '',
        organizationName: '',
        roleIdArray: [],
        roleList: [],
        websock: null
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
        SET_ORGANIZATIONNAME: (state, organizationName) => {
            state.organizationName = organizationName
        },
        SET_ROLEIDARRAY: (state, roleIdArray) => {
            state.roleIdArray = roleIdArray
        },
        SET_ROLELIST: (state, roleList) => {
            state.roleList = roleList
        },
        INIT_WEBSOCK: (state, websock) => {
            state.websock = websock
        },
        CLOSE_WEBSOCK: (state) => {
            if (state.websock) state.websock.close()
        }
    },

    actions: {
        initWebSock({ commit }, userId) {
            const wsuri = process.env.NODE_ENV === 'development'
                ? "ws://" + config.development_base_ip + ":" + config.development_base_port + "/websocket/" + userId
                : "ws://" + config.product_base_ip + ":" + config.product_base_port + "/websocket/" + userId
            commit('INIT_WEBSOCK', new WebSocket(wsuri))
        },
        LoginByUsername(store, {userInfo,router}) {
            const { commit, dispatch, rootState } = store
            const userName = userInfo.account.trim()
            return new Promise((resolve, reject) => {
                loginByUsername(userName, userInfo.passWord).then(response => {
                    const data = response.data
                    if (data.code != 0) {
                        commit('SET_USERID', data.data.id)
                        commit('SET_PASSWORD', data.data.password)
                        commit('SET_ORGID', data.data.orgId)
                        commit('SET_ORGTYPE', data.data.orgType)
                        commit('SET_MOBILE', data.data.mobile)
                        commit('SET_EMAIL', data.data.email)
                        commit('SET_WEIXIN', data.data.weiXin)
                        commit('SET_QQ', data.data.qQ)
                        commit('SET_REALNAME', data.data.realName)
                        commit('SET_ORGANIZATIONNAME', data.data.organizationName)
                        commit('SET_ROLEIDARRAY', getRoleIdArray(data.data.roleList))
                        commit('SET_ROLELIST', data.data.roleList)
                        commit('SET_TOKEN', userName)

                        setToken(userName)

                        dispatch('permission/GenerateRoutes', {"data":data.data.listResource},{root:true}).then(() => {
                            router.addRoutes(rootState.permission.addRouters)

                        })
                        resolve(data.data.roleList?data.data.roleList.length:0)//返回角色的长度值
                    } else {
                        reject(data.msg)
                    }
                }).catch(error => {
                    reject(error)
                })
            })
        }
    },
}
function getRoleIdArray(roles = []) {
    let roleIdArray = []
  if(roles){
    roles.forEach(item => {
      roleIdArray.push(item.roleId)
    })
  }
    return roleIdArray
}
export default user
