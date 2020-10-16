const mogoose = require("mongoose");
const Schema = mogoose.Schema;

let tagSchema = new Schema({
  name: { type: String },
}, { timestamps: true });

module.exports = mogoose.model("Tag", tagSchema);
