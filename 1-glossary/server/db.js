const mongoose = require("mongoose");


// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost/glossary');
// 2. Set up any schema and models needed by the app

const wordSchema = mongoose.Schema({
  name: {type: String,unique:true},
  definition: String,
});


const Word = mongoose.model('Word',wordSchema);

//create a save function to save a word or words to mongodb

let save = (words) => {
//save for single word
if (!Array.isArray(words)){
  words = [words];
}

  let savedWords = words.map(word => {
    let newWord = new Word({
      name: word.name,
      definition: word.definition,
    });
    return newWord.save();
  });
  //wait for all words to finish
  return Promise.all(savedWords);

  }

//function to get words from mongodb

let getWords = ()=> {
  return Word.find({});
}

let updateWord = (word) =>{
  return Word.findByIdAndUpdate(word.id,{
    name: word.name,
    definition: word.definition
  })
}

let deleteWord = (id) => {
  return Word.findByIdAndDelete(id)
}

// 3. Export the models
module.exports.save = save;
module.exports.getWords = getWords;
module.exports.updateWord = updateWord;
module.exports.deleteWord = deleteWord;
// 4. Import the models into any modules that need them
