const mongoose = require('mongoose')

const catsSchema = mongoose.Schema({
    name: String
})

const Categorie = mongoose.model('Categorie', catsSchema)

module.exports = Categorie