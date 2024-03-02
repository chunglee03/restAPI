const Brand = require("../model/brand")
const Clothes = require("../model/clothes")
const brandController = require("./brandControlller")

const clothesController = {
    addNewClothes: async(req, res) => {
        try {
            const clothes = new Clothes(req.body)
            const savedClothes = await clothes.save()
            if (savedClothes.brand) {
                const brand = await Brand.findById(savedClothes.brand)
                await brand.updateOne({$push: {clothes: savedClothes._id}})
            }
            res.status(200).json(savedClothes)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getAllClothes: async(req, res) => {
        try {
            const clothes = await Clothes.find()
            res.status(200).json(clothes)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getAClothes: async(req, res) => {
        try {
            const clothes = await Clothes.findById(req.params.id)
            res.status(200).json(clothes)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateAClothes: async(req, res) => {
        try {
            await Clothes.updateOne({_id: req.params.id}, {$set: req.body})
            res.status(200).json("updated successfully!")
        } catch (error) {
            res.status(500).json(error)
        }
    },
    deleteAClothes: async(req, res) => {
        try {
            await Clothes.deleteOne({_id: req.params.id})
            res.status(200).json("deleted successfully!")
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = clothesController