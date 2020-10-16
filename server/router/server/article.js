const Article = require("../../mongodb/models/article");

module.exports = {
  // 新建文章
  createArticle: async (req, res) => {
    const result = await Article.create(req.body)
    if (result) {
      res.send({
        code: 20000,
        msg: "success",
      });
    }
  },
  // 获取文章
  getArticle: async (req, res) => {
    const { pageSize, currentPage } = req.query
    const total = await Article.find().populate('categories')
    const result = await Article.find().populate('categories').limit(Number(pageSize) || 10).skip(((Number(currentPage) || 1) - 1) * (Number(pageSize) || 10))
    if (result) {
      res.send({
        pageSize: Number(pageSize) || 10,
        currentPage: Number(currentPage) | 1,
        code: 20000,
        data: result,
        msg: "success",
        total: total.length
      });
    }
  },
  // 获取编辑文章内容
  getEditArticle: async (req, res) => {
    const id = req.params.id
    const result = await await Article.findById(id).populate('categories')
    res.send({
      code: 20000,
      result,
      msg: "success"
    })
  },
  // 删除文章
  deleteArticle: async (req, res) => {
    const id = req.body._id;
    await Article.deleteOne({ _id: id })
      .then(() => {
        res.send({
          code: 20000,
          msg: "success",
        });
      })
      .catch(() => {
        res.send({
          code: -1,
          msg: "Error",
        });
      });
  },
  // 更新文章
  updateArticle: async (req, res) => {
    const id = req.body._id
    await Article.findByIdAndUpdate(id, req.body).then(() => {
      res.send({
        code: 20000,
        msg: "success"
      })
    }).catch(() => {
      res.send({
        code: -1,
        msg: "Error"
      })
    })
  },
};
