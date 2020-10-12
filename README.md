# cyy-music-server
基于koa2.js(node)实现的cyy-music的后台服务，主要用于跨域请求

# 部署
cyy-music打包npm run build后的dist文件夹下的丢到该目录下

## 下载node_modules
npm i

## 在远程服务器上
pm2 start musicServer.js

## 或者在本地服务器上
node musicServer.js
