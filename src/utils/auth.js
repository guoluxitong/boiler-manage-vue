const TokenKey = 'Admin-Token'

export function getToken () {
  return window.localStorage[TokenKey]
}

export function setToken (token) {
  return window.localStorage[TokenKey] = token
}

export function removeToken () {
  return window.localStorage[TokenKey] = ''
}
