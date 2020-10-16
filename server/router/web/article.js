const Article = require("../../mongodb/models/article");
module.exports = {
    getArticleInfo: async (req, res) => {
        const result = await Article.findById('5f1124355b49d3222c85fc41')
        res.send({
            code: 20000,
            data: result,
            message: '成功'
        })
    }
}