const router = require('express').Router()
const clothesController = require("../controller/clothesController")

router.post('/', clothesController.addNewClothes)
router.get('/', clothesController.getAllClothes)
router.get('/:id', clothesController.getAClothes)
router.put('/:id', clothesController.updateAClothes)
router.delete("/:id", clothesController.deleteAClothes)

module.exports =  router