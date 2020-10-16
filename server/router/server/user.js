const Users = require('../../mongodb/models/user')
const jwt = require('jsonwebtoken')
module.exports = {
  // 用户登录
  login: async (req, res) => {
    const { username, password } = req.body
    // 查找用户
    const user = await Users.findOne({ username })

    // 用户是否存在
    if (!user) {
      return res.send({
        code: -1,
        message: '用户不存在'
      })
    }

    // 验证用户密码
    const isPasswordValid = require('bcrypt').compareSync(password, user.password)

    // 密码错误
    if (!isPasswordValid) {
      return res.send({
        code: -1,
        message: '密码错误'
      })
    }

    // 密码认证成功，设置用户的token
    const token = jwt.sign({
      id: String(user._id)
    }, req.app.get('secret'))

    // 返回用户token
    res.send({
      code: 20000,
      msg: "登录成功",
      token: token
    });
  },
  // 获取用户信息
  getInfo: async (req, res) => {
    const result = await Users.find()
    res.send({
      code: 20000,
      data: result,
      message: '用户信息更新成功！'
    })
  },
  // 注册
  regist: async (req, res) => {
    const result = await Users.create(req.body)
    if (result) {
      res.send({
        code: 20000,
        message: '注册成功'
      })
    }
  },
  // 退出登录
  logout: async (req, res) => { }
};
