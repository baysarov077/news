const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/news')

const app = express()
app.use(express.json())

mongoose.connect('mongodb+srv://baysarov077:Avenger95@cluster0.9anwb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() => console.log('Успешно соединились с сервером'))
.catch(() => console.log('Ошибка соединения с сервером'))

const port = 4050
app.listen(port, () => console.log('Соединение с сервером'))
app.get('/', (req, res) => res.json('Hello, Adam'))


app.use(require('./routes/cats'))
app.use(require('./routes/comments'))
app.use(require('./routes/news'))