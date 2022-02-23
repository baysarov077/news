const News = require('../modules/News.model')

module.exports.newsController = {
    createNews: async (req, res) => {
     await News.create({
        name: req.body.name,
        text: req.body.text,
        category: req.body.category
    })
    res.json('Новость добавлена')
    },
    deleteNews: async (req, res) => {
        await News.findByIdAndRemove(req.params.id)
        res.json('Новость удалена')
    },
    getNews: async (req, res) => {
        const news = await News.find({})
        res.json(news)
    },
    getNewsById: async (req, res) => {
        const news = await News.findById(req.params.id)
        res.json('Новость найдена')
    },
    updeteNews: async (req, res) => {
        await News.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            text: req.body.text,
            category: req.body.category
        })
        res.json('Новость обновлена')
    },
    getNewsOfCategorie: async (req, res) => {
        const news = await News.find({ category: req.params.id });
        res.json(news)
    }

}