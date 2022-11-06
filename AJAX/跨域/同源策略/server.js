const express = require('express')

const app = express()

app.get('/home', (request,response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/data', (require, response) => {
    response.send('hihihi')
})

//监听端口启动服务
app.listen(9090, () => {
    console.log('服务已经启动');
})