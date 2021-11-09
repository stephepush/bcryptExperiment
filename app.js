var express = require('express');
var app = express()
const path = require('path')
const { hashesString, passwordCheck } = require('./bcryptUtil');

app.use(express.urlencoded({
    extended: true
}))

app.use(express.static(path.join(__dirname, 'public')))

app.post('/submit-form', (req, res) => {
    const userInput = req.body.string;
    hashesString(userInput)
        .then((output) => {
            console.log(output);
            res.send(JSON.stringify({ output: output }))


        })
        .catch(err => console.log(err))
})


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
    //line 10 suffices, you don't need the next line
    //res.sendFile(path.join(__dirname, './public/script.js'))
})



app.listen(3003);