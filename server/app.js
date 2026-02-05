// 引入依赖
const express = require("express")
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')

// 创建后端服务
const app = express()
const port = 3001

// 中间件配置（跨域+解析数据）
app.use(cors()) // 解决前端跨域问题
app.use(bodyParser.json()) // 解析json格式数据
app.use(bodyParser.urlencoded({ extended: true })) // 解析表单格式数据

// 定义数据库文件路径
const dbPath = path.join(__dirname, 'db.json')

// 工具函数：读取/写入数据库
const readDb = () => {
    const data = fs.readFileSync(dbPath, 'utf8')
    return JSON.parse(data)
}
const writeDb = (data) => {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8')
}

// 接口1：获取产品列表（前端用来展示产品）
app.get('/api/product', (req, res) => {
    const db = readDb()
    res.json({ code: 200, data: db.productList, msg: '请求成功' })
})

// 接口2：提交联系表单（前端表单提交）
app.post('/api/contact', (req, res) => {
    const db = readDb()
    // 接收前端传的表单数据
    const newFormData = {
        id: Date.now(), // 用时间戳做唯一ID
        ...req.body,
        time: new Date().toLocaleString() // 自动添加提交时间
    }
    // 存入数据库
    db.formData.push(newFormData)
    writeDb(db)
    res.json({ code: 200, msg: '提交成功' })
})

// 接口3：获取表单数据（你自己/客户用来查看，可选）
app.get('/api/form', (req, res) => {
    const db = readDb()
    res.json({ code: 200, data: db.formData, msg: '请求成功' })
})

// 启动后端服务
app.listen(port, () => {
    console.log(`后端服务运行在：http://127.0.0.1:${port}`)
})