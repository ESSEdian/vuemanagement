'use strict'
module.exports = merge(prodEnv, {
  NODE_ENV: '"test"',
  BASE_API: '"http:/192.168.15.60/:10087"' //配置为本地地址才会访问到本地虚拟的服务器，从而通过第1步中代理访问API服务，避免跨域
})