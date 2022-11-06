//引入express
const express = require('express')

//创建应用对象
const app = express()

//创建路由规则
//request是对请求报文的一个封装
//reponse是对响应报文的封装
app.get('/server', (request, response) => {

    //设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')

    response.send("hello express")
})

app.post('/server', (request, response) => {

    //设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')

    response.send("hello express")
})

app.get('/json-server', (request, response) => {

    //设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')

    //响应一个数据
    const data = {
        name: 'dadada'
    }
    //对对象进行一个字符串转换
    let str = JSON.stringify(data)
    response.send(str)
})

app.get('/ie', (request, response) => {

    //设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')

    response.send("ie aaa")
})

app.get('/delay', (request, response) => {

    //设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置延迟响应
    setTimeout(() => {
        response.send("延迟3s")
    }, 3000)


})

app.all('/axios-server', (request, response) => {

    //设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //遇到自定义响应头时可以设置
    response.setHeader('Access-Control-Allow-Headers', '*')

    const data = {
        name: 'haha'
    }
    response.send(JSON.stringify(data))

})

app.all('/fetch-server', (request, response) => {

    //设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //遇到自定义响应头时可以设置
    response.setHeader('Access-Control-Allow-Headers', '*')

    const data = {
        name: 'haha'
    }
    response.send(JSON.stringify(data))

})

app.all('/jsonp-server', (request, response) => {
    const data = {
        name: 'haha'
    }
    const str = JSON.stringify(data)
    //将数据传给客户端，调用客户端与预先定义好的函数
    response.send(`handle(${str})`)
})

app.all('/check-username', (request, response) => {
    const data = {
        exist:1,
        msg: '该用户名已存在'
    }
    const str = JSON.stringify(data)
    //将数据传给客户端，调用客户端与预先定义好的函数
    response.send(`handle(${str})`)
})

app.all('/cors-server', (request, response) => {
    ////设置响应头(后面填写url，如"http://127.0.0.1:5500") 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')

    response.send('hihi')
})





//监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000 端口");
})