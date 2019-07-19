const getters = {
  token: state => state.user.token,
  userId: state => state.user.userId,
  orgId: state => state.user.orgId,
  orgType: state => state.user.orgType,
  mobile: state => state.user.mobile,
  email: state => state.user.email,
  weiXin: state => state.user.weiXin,
  qQ: state => state.user.qQ,
  realName: state => state.user.realName,
  organizationName: state => state.user.organizationName,
  role: state => state.user.roleIdArray,
  websock: state => state.user.websock,
  permission_routers: function (state) {
    return state.permission.routers
  },
  menus: state => state.user.menus,
  addRouters: state => state.permission.addRouters,
  mapFull: state=>state.app.mapFull
}
export default getters
