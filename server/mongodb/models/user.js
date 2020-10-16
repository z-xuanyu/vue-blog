const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

let userSchema = new Schema({
    // 用户名
    username:{
        type:String,
        required:true, // 必填
        unique:true  // 唯一
    },
    password:{
        type:String,
        set(val){
            return bcrypt.hashSync(val,10)
        }
    }
})

module.exports = mongoose.model("User",userSchema)