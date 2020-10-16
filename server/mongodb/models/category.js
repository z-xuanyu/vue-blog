const mogoose = require("mongoose");
const Schema = mogoose.Schema;

let categorySchema = new Schema({
  // 分类名称
  name: { type: String },
  //分类图标
  icon: { type: String },
  //上级分类
  parent:{type:mogoose.SchemaTypes.ObjectId,ref:'Category'}
});



module.exports = mogoose.model('Category',categorySchema)