
require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require('./db.js');

const app = express();

//middleware to parse data
app.use(express.json());
// Serves up all static and generated assets in in a specified folder.
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/words', function(req, res) {
  db.getWords()
  .then(words =>{
    res.send(words)
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(500);
  })
})

app.post('/words', function(req,res) {
  //get words from request body
  const words = req.body;
  db.save(words)
  .then(() => res.sendStatus(201))
  .catch((err) => {
    console.log(err);
    res.sendStatus(500);
  })
})

app.put('/words/:id',function(req,res){
  const wordData = {
    _id: req.params.id,
    name: req.body.name,
    definition: req.body.definition,
  }
  db.updateWord(wordData)
  .then((updatedWord) => {
    res.send(updatedWord);
    res.status(200);
  })
  .catch((err) => {
    console.log(err);
    res.sendStatus(500);
  })
})

app.delete('/words/:id',function(req,res){
  const wordId = req.params.id;
  db.deleteWord(wordId)
  .then(() => res.sendStatus(200))
  .catch(()=> {
    console.log(err);
    res.sendStatus(500);
  })
})


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
