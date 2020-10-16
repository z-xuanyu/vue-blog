module.exports = (app) => {
  const router = require("express").Router();
  const bodyParser = require("body-parser");
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  const authMiddleware = require('../../middleware/auth')  // 权限中间件
  // 设置路由前缀
  app.use("/server/api", authMiddleware(), router);

  // 用户
  const { login, getInfo, logout, regist } = require("./user");
  app.post("/admin/login", login); //用户登录
  app.post("/admin/regist", regist) // 注册
  router.get("/getInfo", getInfo); //获取用户信息
  router.post("/logout", logout); //退出登录

  // 图片上传
  const multer = require('multer')
  const MAO = require('multer-aliyun-oss');
  const { imgUpload } = require("./upload")
  const upload = multer({
    storage: MAO({
      config: {
        region: 'oss-cn-shenzhen',
        accessKeyId: 'LTAI4FzDnAmwU3RpTyFtdGsa',
        accessKeySecret: 'zot5lHfGOzbjHKLYnUNwmzBGSbHLgs',
        bucket: 'nestshop'
      }
    })
  })
  router.post('/imgUpload', upload.single('file'), imgUpload)  // 文章图片上传
  // 分类
  const { createCategory, getCategory, deleteCategory } = require("./category");
  router.post("/createCategory", createCategory); //创建分类
  router.get("/getCategory", getCategory); //获取分类
  router.delete("/deleteCategory", deleteCategory); //删除分类

  // 文章
  const {
    createArticle,
    getArticle,
    deleteArticle,
    updateArticle,
    getEditArticle
  } = require("./article");
  router.post("/createArticle", createArticle); //新建文章
  router.get("/getArticle", getArticle); //获取文章信息
  router.delete("/deleteArticle", deleteArticle); //删除文章
  router.put("/updateArticle", updateArticle); //更新文章
  router.get("/getEditArticle/:id", getEditArticle) //编辑文章

  // 评论
  const {
    postComment,
    getCommentInfo,
    deleteComment,
    updataComment,
  } = require("./comment");
  router.post("/postComment", postComment); //发表评论
  router.get("/getCommentInfo", getCommentInfo); //获取评论信息
  router.delete("/deleteComment", deleteComment); //删除评论
  router.put("/updataComment", updataComment); //更新评论

  // 友情链接
  const { addLink, getLinkInfo, deleteLink, updataLink } = require("./link");
  router.post("/addlink", addLink); //添加链接
  router.get("/getLinkInfo", getLinkInfo); //获取链接信息
  router.delete("/deleteLink", deleteLink); //删除链接
  router.put("/updataLink", updataLink); //更新链接

  // 文章标签
  const { addTag, updataTag, deleteTag, getTagList } = require("./tag")
  router.get("/getTagList", getTagList)  // 获取标签列表
  router.post("/addTag", addTag) //添加标签
  router.put("/updataTag", updataTag)  // 更新标签
  router.delete("/deleteTag", deleteTag) // 删除标签
};
