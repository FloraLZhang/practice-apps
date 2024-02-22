import React from 'react';

const WordList =({words, onEdit, onDelete}) => {
  return (
    <div>
      <h4>  Current Word List </h4>
      <ul>
      {words.map(word => (
        <li key = {word.name}>{word.name}:{word.definition}
        <button onClick={()=> onEdit(word)}>Edit</button>
        <button onClick={()=> onDelete(word._id)}>Delete</button>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default WordList;