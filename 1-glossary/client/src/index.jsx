import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import WordList from './components/WordList.jsx';
import Search from './components/Search.jsx';
import AddWordForm from './components/AddWordForm.jsx';


const App= () => {
  const [words, setWords] = useState([]);

  //helper function for get request
  const fetchWords  =() => {
    axios.get('/words')
    .then((response) =>{ setWords(response.data)})
    .catch((err) =>{
      console.log('Failed to get words:', err);
    })
  }
  useEffect(() => {
    fetchWords();
  },[]);

  const addWord = (newWord) =>{
    axios.post('/words', newWord)
    .then((response) => {
      fetchWords();
    })
    .catch((err) =>{
      console.error('Error new word:', err);
    })
  }

  const deleteWord = (id) => {
    axios.delete(`/words/${id}`)
    .then(() =>{
      fetchWords();
    })
    .catch((err) => {
      console.error('Error delete word:', err);
    })
  }

  const editWord = (word) => {
    const updatedName = prompt('Edit word name:', word.name);
    const updatedDefinition = prompt('Edit word definition:', word.definition);
    // avoid null input && empty string
    if ( updatedName !== null && updatedDefinition !== null && updatedName.trim() !=='' && updatedDefinition.trim() !== '') {
    // const updatedWord = {
    //   _id: word._id,
    //   name: updatedName,
    //   definition: updatedDefinition,
    // };
    axios.put(`/words/${word._id}`, {name: updatedName, definition: updatedDefinition})
    .then(() =>{
      fetchWords();
    })
    .catch((err) => {
      console.error('Error edit word:', err);
    })
  }
  }

  const searchWord =(input) =>{
    const searchedWord = words.filter(word =>word.name.toLowerCase().includes(input.toLowerCase()));
    setWords(searchedWord);
  }

  return (
    <div>
      <h1>Glossary</h1>
      <nav><AddWordForm onAdd={addWord} /></nav>
      <nav><Search onSearch={searchWord}/></nav>
      <WordList words= {words} onEdit={editWord} onDelete= {(id) =>deleteWord(id)}/>
    </div>

  )
}

  ReactDOM.render(<App />, document.getElementById("app"));

