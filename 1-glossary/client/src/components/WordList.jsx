import React from 'react';

const WordList =({words}) => {
  return (
    <div>
      <h4>  Current Word List </h4>
      <ul>
      {words.map(word => (
        <li key = {word.name}>{word.name}:{word.definition}</li>
      ))}
      </ul>
    </div>
  )
}

export default WordList;