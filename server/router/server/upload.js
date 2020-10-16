module.exports = {
    imgUpload: async (req, res) => {
        const file = req.file
        res.send({
            code: 20000,
            url: file.url,
            message: '上传成功！'
        })

    }
}