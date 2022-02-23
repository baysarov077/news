const { Router } = require('express')
const { commentsController } = require('../controllers/comments.controller')
const router = Router()

router.get('/news/:id/comment/:id', commentsController.getComment)
router.post('/news/:id/comment', commentsController.createComment)
router.delete('/comment/:id', commentsController.deleteComment)

module.exports = router