const express = require('express')
const CategoryController = require('../controllers/CategoryController')
const router = express.Router()

router.get('/', CategoryController.categoryList)
router.get('/:id', CategoryController.categoryDetail)
router.post('/', CategoryController.categoryAdd)
router.delete('/:id', CategoryController.categoryDelete)

module.exports = router
