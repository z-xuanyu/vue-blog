const Link = require("../../mongodb/models/link");
module.exports = {
  // 添加链接
  addLink: async (req, res) => {
    const data = req.body;
    await Link.create(data).then(() => {
      res.send({
        code: 20000,
        msg: "success",
      });
    });
  },
  // 查看友情链接
  getLinkInfo: async (req, res) => {
    const result = await Link.find();
    if (result) {
      res.send({
        code: 20000,
        result,
        msg: "success",
      });
    } else {
      res.send({
        code: -1,
        msg: "Error",
      });
    }
  },
  // 删除友情链接
  deleteLink: async (req, res) => {
    const id = req.body._id;
    await Link.deleteOne({ _id: id })
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
  //更新友情链接信息
  updataLink: async (req, res) => {
     const id = req.body._id
     await Link.findByIdAndUpdate(id,req.body).then(()=>{
        res.send({
            code:20000,
            msg:"success"
        })
     }).catch(()=>{
         res.send({
             code:-1,
             msg:"Error"
         })
     })
  },
};
