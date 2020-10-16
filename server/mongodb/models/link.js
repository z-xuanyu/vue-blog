const mogoose = require("mongoose");
const Schema = mogoose.Schema;

let linkSchema = new Schema(
  {
    name: { type: String },
    url: { type: String },
    desc: { type: String },
    status: { type: Boolean, default: true },
    time: { type: Date, default: new Date() },
  },
  { timestamps: String }
);

module.exports = mogoose.model("link", linkSchema);
