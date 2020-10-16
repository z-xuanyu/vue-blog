const Category = require('../../mongodb/models/category')

module.exports = {
    // 首页分类
    getCategory: async (req, res) => {
        const result = await Category.find().populate('categories')
        res.send({
            code: 20000,
            data: result,
            message: '成功'
        })
    }

    // 首页文章
}