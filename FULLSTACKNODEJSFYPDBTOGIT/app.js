const express = require('express')
const path = require('path')
const { v4 } = require('uuid')
const app = express()

let CONTACTS = [
    { id: v4(), name: 'MiKhan', value: '+7-800-555-35-35', marked: false }
]
const mongoose = require('mongoose');
//Здесь создать схемы БД через mongoose
//Но лучше в отдельной папке и через экспорт
var User = require('./dbmodules/user');
var UserChars = require('./dbmodules/userchars');
var News = require('./dbmodules/news');
var Articles = require('./dbmodules/articles');
var Test = require('./dbmodules/tests');
var Quest = require('./dbmodules/question.js');
var Answer = require('./dbmodules/answer');
var UserNews = require('./dbmodules/usernews.js');
var UserArticles = require('./dbmodules/userarticles.js');
var UserAnswer = require('./dbmodules/useranswer.js');
//Подключить лучше к кластеру, а не локально
//Как?
app.use(express.static(__dirname + "/public"));
//Строка для подключения  к кластеру (хз, надо или нет)
var mongodbString = 'mongodb+srv://admin:admin@fyp.czjbf.mongodb.net/FYPDB?retryWrites=true&w=majority';
mongoose.connect('mongodb://localhost:27017/FYPBL', function (err) {
    if (err) throw err;
    console.log('Successfully connected');
});

app.use(express.json())
//GET
app.get('/api/contacts', (req, res) => {
    res.status(200).json(CONTACTS)
})

//POST
app.post('/api/contacts', (req, res) => {
    //Здесь должна быть серверная валидация
    const contact = { ...req.body, id: v4(), marked: false }
    CONTACTS.push(contact)
    res.status(201).json(contact)
})

//DELETE
app.delete('/api/contacts/:id', (req, res) => {
    CONTACTS = CONTACTS.filter(c => c.id !== req.params.id)
    res.status(200).json({ message: 'Контакт был удален' })
})

//PUT 
app.put('/api/contacts/:id', (req, res) => {
    const idx = CONTACTS.findIndex(c => c.id === req.params.id)
    CONTACTS[idx] = req.body
    res.json(CONTACTS[idx])
})

//В самом низу, отрабатывают последними эти запросы
app.use(express.static(path.resolve(__dirname, 'client')))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})
app.listen(3000, () => console.log('Server has been started on port 3000 ...'))
