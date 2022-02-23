const Comment = require('../modules/Comment.model')

module.exports.commentsController = {
    createComment: async (req, res) => {
        await Comment.create({
            author: req.body.author,
            text: req.body.text,
            newsId: req.params.id
        })
        res.json('Комментарий добавлен')
    },
    deleteComment: async (req, res) => {
        await Comment.findByIdAndDelete(req.params.id)
        res.json('комментарий удален')
    },
    getComment: async (req, res) => {
        const comment = await Comment.findById(req.params.id)
        res.json(comments)
    }

}