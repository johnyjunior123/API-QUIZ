const express = require('express')
const app = express()
const questions = require("./questions.json")
const searchThemes = require('./Functions/Searchs')
const ThemesWithDifficutly = require('./Functions/Searchs')


app.use(express.json())
app.listen(3000)

app.route('/').get((req,res)=>{
    res.send( "Enable!" )
})

app.route('/consult/:indice').get((req,res)=>{
    res.json(questions.answers[req.params.indice])
})

app.route('/themes/:theme').get((req,res)=>{
    res.json(searchThemes(req.params.theme, questions))
})
