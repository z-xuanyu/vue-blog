const mogoose = require("mongoose");
const Schema = mogoose.Schema;

let commentSchema = new Schema({
    // 评论者名称
    nickName:{type:String},
    //评论者头像
    avatar:{type:String},
    //评论内容
    content:{type:String},
    // 评论关联文章
    post:{type:mogoose.SchemaTypes.ObjectId,ref:"Article"},
    //二级评论
    parent:{type:mogoose.SchemaTypes.ObjectId, ref:"Comment"},
    // 被@人名称
    byAiteName:{type:String}
})

module.exports = mogoose.model("Comment",commentSchema)