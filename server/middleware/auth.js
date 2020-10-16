const jwt = require('jsonwebtoken')
const assert = require('http-assert')
const AdminUser = require('../mongodb/models/user')
module.exports = options => {
    return async (req, res, next) => {
        const token = String(req.headers.authorization || '').split(' ').pop()
        assert(token, 401, '请先登录')
        const { id } = jwt.verify(token, req.app.get('secret'))
        assert(id, 401, '用户Token不正确')
        req.user = await AdminUser.findById(id)
        assert(req.user, 401, '用户名不存在')
        await next()
    }
}