const mogoose = require("mongoose");
const Schema = mogoose.Schema;

let articleSchema = new Schema(
  {
    // 文章分类
    categories: [
      {
        type: mogoose.SchemaTypes.ObjectId,
        ref: "Category",
      },
    ],
    //文章标题
    title: { type: String },
    //文章封面
    pic: { type: String },
    //文章版式
    postStyle: { type: Number, default: 1 },
    //文章发布时间
    time: { type: String },
    //文章作者
    author: { type: String },
    //文章标签
    tags: [{ type: mogoose.SchemaTypes.ObjectId, ref: "Tag" }],
    //文章点赞数
    likes: { type: Number, default: 0 },
    //文章阅读量
    views: { type: Number, default: 0 },
    //文章内容
    body: { type: String },
    // 发布状态
    isRelease: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mogoose.model("Article", articleSchema);
