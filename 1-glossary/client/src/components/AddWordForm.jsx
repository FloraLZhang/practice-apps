import React , {useState} from 'react';

const AddWordForm = ({onAdd}) => {

  const [name, setName]= useState('');
  const [definition, setDefinition] = useState('');

  const handleSubmit =(event) => {
    event.preventDefault();
    onAdd({name, definition});
    setName('');
    setDefinition('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Add word name' value={name} onChange ={(event)=> setName(event.target.value)}></input>
    <input type='text' placeholder = 'Add word definition' value={definition} onChange={(event)=> setDefinition(event.target.value)}></input>
    <button type='submit'> Add Word </button>
    </form>

  )
}

export default AddWordForm;