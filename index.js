const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://wonjin2:wjdqhrtns1!@cluster0.ktca5.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('Helloo world'))

app.listen(port, () => console.log(`Example app listening on port ${port}~!`))