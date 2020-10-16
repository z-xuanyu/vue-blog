module.exports = app => {
    const router = require('express').Router()
    // 设置路由前缀
    app.use('/web/api', router)

    // 获取详情文章
    const { getArticleInfo } = require('./article')
    router.get('/getArticleInfo', getArticleInfo)
}