const Tag = require('../../mongodb/models/tag')

module.exports = {
    // 添加标签
    addTag: async (req, res) => {
        const result = await Tag.create(req.body)
        if (result) {
            res.send({
                code: 20000,
                data: result,
                msg: '添加成功'
            })
        }
    },
    // 获取标签列表
    getTagList: async (req, res) => {
        const { pageSize, currentPage } = req.query
        const total = await Tag.find()
        const result = await Tag.find().limit(Number(pageSize) || 10).skip(((Number(currentPage) || 1) - 1) * (Number(pageSize) || 10))
        if (result) {
            res.send({
                pageSize: Number(pageSize) || 10,
                currentPage: Number(currentPage) | 1,
                code: 20000,
                data: result,
                msg: "ok",
                total: total.length
            });
        }

    },
    //更新标签
    updataTag: async (req, res) => {
        const id = req.body._id
        await Tag.findByIdAndUpdate(id, req.body).then(() => {
            res.send({
                code: 20000,
                msg: "更新成功"
            })
        }).catch(() => {
            res.send({
                code: -1,
                msg: "更新失败"
            })
        })
    },

    // 删除标签
    deleteTag: async (req, res) => {
        const id = req.body._id;
        await Tag.deleteOne({ _id: id })
            .then(() => {
                res.send({
                    code: 20000,
                    msg: "删除成功",
                });
            })
            .catch(() => {
                res.send({
                    code: -1,
                    msg: "删除失败",
                });
            });
    }
}