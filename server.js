const express = require('express')
const app = express()
const questions = require("./questions.json")


function searchThemes(theme){
    let newArray = []
    for(i=0; i<questions.answers.length; i++){
        if(questions.answers[i].theme == theme)
        newArray.push(questions.answers[i])
    }
    return newArray
}


app.use(express.json())

app.listen(3000)

app.route('/').get((req,res)=>{
    res.send( "Enable!" )
})

app.route('/consult/:indice').get((req,res)=>{
    res.json(questions.answers[req.params.indice])
})

app.route('/themes/:theme').get((req,res)=>{
    res.json(searchThemes(req.params.theme))
})



