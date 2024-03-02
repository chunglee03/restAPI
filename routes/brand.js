const router = require('express').Router()
const brandController = require('../controller/brandControlller')

router.post('/', brandController.addNewBrand)
router.get('/', brandController.getAllBrands)
router.get('/:id', brandController.getABrands)
router.put('/:id', brandController.updateABrand)
router.delete('/:id', brandController.deleteABrand)

module.exports =  router