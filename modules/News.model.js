const mongoose = require('mongoose')

const newsSchema = mongoose.Schema({
    name: String,
    text: String,
    category: mongoose.Schema.Types.ObjectId
})

const News = mongoose.model('News', newsSchema);

module.exports = News