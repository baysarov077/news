const Categorie = require('../modules/Categorie.model')

module.exports.categorieController = {
    createCat: async (req, res) => {
       await Categorie.create({
            name: req.body.name
        })
        res.json('категория создана')
    },
    deleteCat: async (req, res) => {
        await Categorie.findByIdAndDelete(req.params.id) 
        res.json('категория удалена')
    },
    getCat: async (req, res) => {
        const data = await Categorie.find({});
        res.json(data);
    }
}
        