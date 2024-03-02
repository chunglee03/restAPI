const Brand = require('../model/brand')
const Clothes = require('../model/clothes')

const brandController = {
    addNewBrand: async(req, res) => {
        try {
            const brand = new Brand(req.body)
            const savedBrand = await brand.save()
            res.status(200).json(savedBrand)
        } catch (error) {
            res.status(500).json(error)
        }    
    },
    getAllBrands: async(req, res) => {
        try {
            const brand = await Brand.find()
            res.status(200).json(brand)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getABrands: async(req, res) => {
        try {
            const brand = await Brand.findById(req.params.id)
            res.status(200).json(brand)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateABrand: async(req, res) => {
        try {
            await Brand.updateOne({_id: req.params.id}, {$set: req.body})
            res.status(200).json("updated successfully!")
        } catch (error) {
            res.status(500).json(error)
        }
    },
    deleteABrand: async(req, res) => {
        try {
            await Brand.deleteOne({_id: req.params.id})
            await Clothes.deleteMany({brand: req.params.id})
            res.status(200).json("deleted successfully!")
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = brandController