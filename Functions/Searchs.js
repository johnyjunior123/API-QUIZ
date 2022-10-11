
function searchThemes(theme, questions){
    let newArray = []
    for(i=0; i<questions.answers.length; i++){
        if(questions.answers[i].theme == theme){
            newArray.push(questions.answers[i])}
    }
    return newArray
}



module.exports = searchThemes