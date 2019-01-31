import { loginByUsername } from '../../api/login'
import { getLoginUserInfo } from '../../api/user'
import { getToken, setToken, removeToken } from '../../utils/auth'
import {loginout} from "../../api/loginout";
import { config } from '../../config/index'
const user = {
  state: {
    token: getToken(),
    userId:'',
    password:'',
    orgId: '',
    orgType: '',
    mobile: '',
    email:'',
    weiXin: '',
    qQ: '',
    realName: '',
    organizationName:'',
    roleIdArray: [],
    roleList:[],
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
    SET_PASSWORD: (state,password) => {
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
    INIT_WEBSOCK:(state,websock)=>{
      state.websock = websock
    },
    CLOSE_WEBSOCK:(state)=>{
      if(state.websock) state.websock.close()
    }
  },

  actions: {
    initWebSock({ commit },userId){
        const wsuri = process.env.NODE_ENV === 'development'
            ? "ws://"+config.development_base_ip+":"+config.development_base_port+"/websocket/"+userId
            : "ws://"+config.product_base_ip+":"+config.product_base_port+"/websocket/"+userId
      commit('INIT_WEBSOCK', new WebSocket(wsuri))
    },
    setUserToken({ commit },userName){
      commit('SET_TOKEN', userName)
      setToken(userName)
    },
    LoginByUsername({ commit }, userInfo) {
      const userName = userInfo.account.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(userName, userInfo.passWord).then(response => {
          const data = response.data
          if(data.code!=0){
            this.dispatch('initWebSock',data.data.id)
            resolve(userName)
          }else{
            reject(data.msg)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getLoginUserInfo(state.token).then(response => {
          const data = response.data.data;
          this.dispatch('initWebSock',data.id)
          commit('SET_USERID', data.id)
          commit('SET_PASSWORD', data.password)
          commit('SET_ORGID', data.orgId)
          commit('SET_ORGTYPE', data.orgType)
          commit('SET_MOBILE', data.mobile)
          commit('SET_EMAIL', data.email)
          commit('SET_WEIXIN', data.weiXin)
          commit('SET_QQ', data.qQ)
          commit('SET_REALNAME', data.realName)
          commit('SET_ORGANIZATIONNAME', data.organizationName)
          commit('SET_ROLEIDARRAY', getRoleIdArray(data.roleList))
          commit('SET_ROLELIST', data.roleList)
          resolve(data.listResource)
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
}
function getRoleIdArray(roles=[]) {
  let roleIdArray=[]
  roles.forEach(item=>{
    roleIdArray.push(item.roleId)
  })
  return roleIdArray
}
export default user
