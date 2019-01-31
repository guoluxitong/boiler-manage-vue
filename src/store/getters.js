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
  organizationName:state => state.user.organizationName,
  roleIdArray: state => state.user.roleIdArray,
  roleList:state => state.user.roleList,
  websock:state=>state.user.websock,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters
}
export default getters
