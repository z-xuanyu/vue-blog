const mongoose = require('mongoose')
mongoose.connect("mongodb://121.42.14.221:27017/vue-blog",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log('数据库连接成功')
}).catch(()=>{
    console.log('数据库连接失败')
})