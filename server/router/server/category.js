const Category = require('../../mongodb/models/category')

module.exports = {
    // 创建分类
    createCategory: async (req,res)=>{
        const data = req.body
        await Category.create(data).then((doc)=>{
            console.log(doc)
            res.send({
                code:20000,
                msg:'success'
            })
        })
    },
    // 获取分类信息
    getCategory: async (req,res)=>{
        const result = await Category.find().populate("parent")
        res.send({
            code:20000,
            msg:'success',
            result
        })
    },
    // 删除分类
    deleteCategory: async (req,res)=>{
        const id = req.body._id
        await Category.deleteOne({_id:id}).then(()=>{
            res.send({
                code:20000,
                msg:"success"
            })
        })
    }
}