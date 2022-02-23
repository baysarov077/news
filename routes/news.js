const { Router } = require('express')
const { newsController } = require('../controllers/new.controller')
const router = Router()


router.get('/news', newsController.getNews)
router.get('/news/cats/:id', newsController.getNewsOfCategorie)
router.get('/news/:id', newsController.getNewsById)
router.post('/news', newsController.createNews)
router.delete('/news/:id', newsController.deleteNews)
router.patch('/news/:id', newsController.updeteNews)

module.exports = router