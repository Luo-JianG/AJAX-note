XML :可扩展标记语言，最初服务器与客户端传输数据的一种格式，作用是传输和存储数据，它全是自定义标签



JSON : 数据更加简洁，数据转换更加灵活方便



AJAX

优点：1.可以无需刷新页面与服务器进行通信。 2.可以通过用户事件来更新页面内容

缺点：1.没有浏览历史，不能退回。 2.存在跨域问题。 3.对seo不友好



HTTP：超文本传输协议，规定浏览器与万维网服务器相互通信的规则



请求报文

行      get，post（请求方式）/ url  HTTP/1.1版本号

头      Host： xxx.com

​		  Cookie： xxxx

​	      Content-type： XXX（请求体类型）

​	     User-Agent： chrome 80

​         （  注意请求头格式  xxx：‘空格’xxx  ）

空行  

体       （post方式有）



相应报文

行： HTTP/1.1    200  OK       /HTTP版本    响应状态码   响应字符串

头：  Content-type： XXX（响应体类型）

空行：

体：  html内容



`express：`

`//引入express`

`const express = require(express)`

`//创建应用对象`

`const app = express()`

`//创建路由规则`

`//request是对请求报文的一个封装`

`//response是对响应报文的封装`

`app.get('/',(request,response) => {`

  `//设置响应头 允许跨域`

  `response.setHeader('Access-Control-Allow-Origin','*')`

  `response.send("hello express")`

`})`

`//监听端口启动服务`

`app.listen(8000, () => {`

  `console.log("服务已经启动，8000 端口");`

`})`

> res.end()：它可以在不需要任何数据的情况下快速结束响应。这个方法实际上来自 [Node](https://so.csdn.net/so/search?q=Node&spm=1001.2101.3001.7020) 核心，具体           					来说是 `http.ServerResponse.Use` 的 `response.end()` 方法
>
> res.send()：向请求客户端发送 HTTP 响应消息。
> Express 的 res.end() 和 res.send() 方法的相同点：
>
> 二者最终都是回归到 http.ServerResponse.Use 的 response.end() 方法。
> 二者都会结束当前响应流程。
> 不同点
> Express 的 res.end() 和 res.send() 方法的不同点：
>
> 前者只能发送 string 或者 Buffer 类型，后者可以发送任何类型数据。
> 从语义来看，前者更适合没有任何响应数据的场景，而后者更适合于存在响应数据的场景。
> 总结
> Express 的 res.end() 和 res.send() 方法使用上，一般建议使用 res.send()方法即可，这样就不需要关心响应数据的格式，因为 Express 内部对数据进行了处理。



​      `//1.创建对象`

​      `const xhr = new XMLHttpRequest();`

​      `//2.初始化  设置请求方法和url`

​      `xhr.open('GET', 'http://127.0.0.1:8000/server')`

​      `//3.发送`

​      `xhr.send()`

​      `//4.事件绑定 处理服务端返回的结果`

​      `//on  当什么时候`

​      `//readystate 是xhr对象中的属性，表示对象0，1，2，3，4，`

​      `// 0 － （未初始化）还没有调用send()方法`

​      `// 1 － （载入）已调用send()方法，正在发送请求`

​      `// 2 － （载入完成）send()方法执行完成，已经接收到全部响应内容`

​      `// 3 － （交互）正在解析响应内容`

​      `// 4 － （完成）响应内容解析完成，可以在客户端调用了`

​      `xhr.onreadystatechange = function () {`

​        `if(xhr.readyState === 4) {`

​          `if (xhr.status >= 200 || xhr.status <= 300) {`

​            `// console.log(xhr.status);//状态码`

​            `// console.log(xhr.statusText);//状态字符串`

​            `// console.log(xhr.getAllResponseHeaders());//所有响应头`

​            `console.log(xhr.response);//响应体`

​            `result.innerHTML = xhr.response`

​          `}` 

​        `}`

​      `}`



AJAX 设置URL参数 

`xhr.open('GET', 'http://127.0.0.1:8000/server?a=100&b=200&c=300')`



addEventListener() 方法用于向指定元素添加监听事件。且同一元素目标可重复添加，不会覆盖之前相同事件，配合 removeEventListener() 方法来移除事件。



post请求体（传递参数）

​        `xhr.send('a=100&b=200&c=300')`

​        `xhr.send('a:100&b:200&c:300')`



​        //设置请求头

**xhr.setRequestHeader**

 `xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')`



服务器端响应一个数据

  `//响应一个数据`

  `const data = {`

​    `name:'dadada'`

  `}`

  `//对对象进行一个字符串转换`

  `let str = JSON.stringify(data)`

  `response.send(str)`



浏览器接受数据并进行转换

手动转换

​      `let data = JSON.parse(xhr.response)`

​      result.innerHTML = data.name`

自动转换

​      `//自动转换json字符串`

​      `xhr.responseType = 'json'`

​      `result.innerHTML = xhr.response.name`



Nodemon工具      它将监控任何 更改源并自动重新启动服务器。



处理ie浏览器的缓存机制，让他实时更新

`xhr.open("GET", "http://127.0.0.1:8000/ie?t="+Date.now())`



​      `//设置超时时间`

​      `xhr.timeout = 2000;`

​      `//超时回调`

​      `xhr.ontimeout = function() {`

​        `alert('请求超时')`

​      `}`

​      `//网络异常回调`

​      `xhr.onerror = function() {`

​        `alert("网络错误")`

​      `}`



​    `//手动取消请求`

​    `btns[1].onclick = function () {`

​      `x.abort();`

​    `}`



​    `//AJAX请求重复发送问题`

​    `let x = null`

​    `let isSending = false`

​    `btn.onclick = function() {`

​      `if(isSending) x.abort() //如果正在发送请求，则取消该请求，发送一个新的`

​      `x = new XMLHttpRequest()`

​      `isSending = true`

​      `x.open('GET', 'http://127.0.0.1:8000/delay')`

​      `x.send()`

​      `x.onreadystatechange = function() {`

​        `if (x.readyState === 4) {`

​          `isSending = false`

​        `}`

​      `}`

​    `}`



第二章 jQuery中的AJAX

2.1 get请求

```
$.get(url, [data], [callback], [type])
url: 请求的URL地址
data: 请求携带的参数
callbac: 载入成功时回调函数
type：设置返回内容格式，xml、html、script、json、text、_default
```



jQuery 发送 AJAX 请求

        $('button').eq(0).click(function(){
            $.get('http://127.0.0.1:8000/jquery-server', {a:100, b:200}, function (data) {
                console.log(data)
            },'json');
        })
    
        $('button').eq(1).click(function(){
            $.post('http://127.0.0.1:8000/jquery-server', {a:100, b:200}, function (data) {
                console.log(data)
            });
        })
    
        $('button').eq(2).click(function () {
            $.ajax({
                //url
                url: 'http://127.0.0.1:8000/jquery-server',
                //参数
                data: {a:100, b:200},
                //请求类型
                type: 'GET',
                //响应体结果设置
                dataType: 'json',
                //成功的回调
                success: function (data) {
                    console.log(data);
                },
                //超时时间
                timeout: 2000,
                //失败的回调
                error: function(){
                    console.log('出错拉~');
                },
                //头信息
                headers: {
                    c: 300,
                    d: 400
                }
            });
            
        })



axios:

  

```
        //配置 baseURL
        axios.defaults.baseURL = 'http://127.0.0.1:8000'
        //axios发送get请求
        btns[0].onclick = function () {
            axios.get('/axios-server', {
                //url参数
                params: {
                    a: 100,
                    b: 200
                },
                //请求头信息
                headers: {
                    hh: 111,
                },
            }).then((value) => {
                console.log(value);
            })
        }

        //axios发送post请求
        btns[1].onclick = function () {
            axios.post('/axios-server',
            //请求体
                {
                    name: 'admin',
                    password: 'admin'
                }, {
                //url参数
                params: {
                    height: 100,
                    weight: 100
                },
                //请求头信息
                headers: {
                    hh: 11,
                    kk: 22
                }
            }
            )
        }
        
        //axios通用方式发送
        btns[2].onclick = function() {
            axios({
                //请求方式
                method: 'post',
                //url
                url: '/axios-server',
                //url参数
                params:{
                    gg:'gg',
                    hh:'hh'
                },
                //请求头信息
                headers:{
                    a:200,
                    b:100
                },
                //请求体参数
                data:{
                    height:100,
                    weight:200
                }
            }).then(
                response => {
                    console.log(response);
                    console.log(response.status);//响应状态码
                    console.log(response.statusText);//响应字符串
                    console.log(response.headers);//响应头信息
                    console.log(response.data);//响应体
                }
            )
        }
```

fetch：

```
        btn.onclick = function() {
            fetch('http://127.0.0.1:8000/fetch-server?a=1&b=2', {
                //请求方法
                method: 'POST',
                //请求头
                headers:{
                    w:100,
                    h:100
                },
                //请求体
                body:'naem=daming'
            }).then(
                (response) => {
                    // return response.text()
                    return response.json()
                }
            ).then(response => {
                console.log(response);
            })
        }
```

跨域

同源策略

同源：协议，域名，端口号完全相同

违反同源策略就是跨域

#### JSONP

1. JSONP是什么

   JSONP (JSON with Padding)，是一个非官方的跨域解决方案，纯粹凭借程序员的聪明才智开发出来，只支持get请求

2. JSONP 怎么工作的？

   在网页有一些标签天生具有跨域能力，比如：img, link, iframe, script

   JSONP就是利用**script**标签的跨域能力来发送请求的

3. JSONP的使用

   - 动态的创建一个script标签

   ```
   var script = document.createElement("script");
   ```

   - 设置script的src，设置回调函数

   ```
   script.src = "http://locallhost:3000/textAJAX?callback=abc"
   ```

客户端

    <script>
        //预先定义一个函数
        function handle (data) {
            const result = document.querySelector('div')
            result.innerHTML = data.name 
        }
    </script>

​    <!-- 利用script标签经跨域请求 -->
    <script src="http://127.0.0.1:8000/jsonp-server"></script>

服务端

```
app.all('/jsonp-server', (request, response) => {

  const data = {

    name: 'haha'

  }

  const str = JSON.stringify(data)

  //将数据传给客户端，调用客户端与预先定义好的函数

  response.send(`handle(${str})`)

})
```



原生jsonp案例

客户端

```
        const input = document.querySelector('input')
        const p = document.querySelector('p')

        //声明handle函数
        function handle(data) {
            console.log('111');
                input.style.border = '1px solid #f00'
                p.innerHTML = data.msg
        }
        //绑定事件，当input失去焦点时触发
        //1. onfocus 事件在对象获得焦点时发生。
        //2. onblur 事件会在对象失去焦点时发生;
        //3.onload 事件会在页面或图像加载完成后立即发生
        input.onblur = function() {
            //获取用户输入的值
            let username = this.value
            //document.createElement()是在对象中创建一个对象，要与appendChild() 或insertBefore()方法联合使用。其中，appendChild()方法在节点的子节点列表末添加新的子节点。insertBefore() 方法在节点的子节点列表任意位置插入新的节点。
            //创建script标签
            const script = document.createElement('script')
            //设置script的src属性
            script.src = 'http://127.0.0.1:8000/check-username'
            //将script插入到文档中
            document.body.appendChild(script)

        }
```

服务端

```
app.all('/check-username', (request, response) => {
    const data = {
        exist:1,
        msg: '该用户名已存在'
    }
    const str = JSON.stringify(data)
    //将数据传给客户端，调用客户端与预先定义好的函数
    response.send(`handle(${str})`)
})
```

jquery实现jsonp

客户端

        $('button').eq(0).click(function(){
            $.getJSON('http://127.0.0.1:8000/jquery-jsonp-server?callback=?', function(data){
                // console.log(data);
                $('#result').html(`
                    名称: ${data.name}<br />
                    校区: ${data.city}
                `)
            })
        });

服务端

```
app.all('/jquery-jsonp-server', (request, response) =>{
    // response.send('console.log("hello jsonp")');
    const data = {
        name: 'Nliver',
        city: ['北京', '上海', '深圳']
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //接收 callback 参数
    let cb = request.query.callback;

    //返回结果
    response.end(`${cb}(${str})`);

});
```

CORS解决跨域

### 3.2.2 CORS

1. ```
   推荐阅读：
   
   - http://www.ruanyifeng.com/blog/2016/04/cors.html
   - https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS
   
   1. CORS是什么？
   
      CORS (Cross-Origin Resource Sharing), 跨域资源共享。CORS 是官方的跨域解决方案，它的特点是不需要在客户端做任何特殊的操作，完全在服务器中进行处理，支持 get 和 post 等请求。跨域资源共享标准新增了一组 HTTP 首部字段（响应头），允许服务器声明哪些源站通过浏览器有权限访问哪些资源
   
   2. CORS怎么工作的？
   
      CORS 是通过设置一个响应头来告诉浏览器，该请求允许跨域，浏览器收到该响应以后就会对响应放行。
   
   3. CORS 的使用
   
      主要是服务端的设置：
      rounter.get("/testAJAX",function(req, res){
   
   })
   ```

     在服务端设置响应头

   ```
   1. app.all('/cors-server', (request, response) => {
   
        ////设置响应头(后面填写url，如"http://127.0.0.1:5500") 允许跨域
   
        response.setHeader('Access-Control-Allow-Origin','*')
   
        response.send('hihi')
   
      })
   
   
   ```

   
