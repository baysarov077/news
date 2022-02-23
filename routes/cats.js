const { Router } = require('express')
const { categorieController } = require('../controllers/cats.controller')
const router = Router()

router.post('/cats', categorieController.createCat)
router.delete('/cats/:id', categorieController.deleteCat)
router.get('/cats', categorieController.getCat)

module.exports = router
