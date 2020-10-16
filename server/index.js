const express = require('express')
const app = express()
const cors = require('cors')
require('./mongodb/db') // 引入Mongodb连接配置文件
// 监听端口
app.listen(3000, () => {
    console.log('http://localhost:3000')
})
app.set('secret', 'xuanyu') // jwt token 密钥
// 跨越
app.use(cors())
// 主页路由
app.get('/', (req, res) => {
    res.send('Hello Ayu')
})
// admin管理端路由
require('./router/server/index')(app)
//web端路由
require('./router/web/index')(app)