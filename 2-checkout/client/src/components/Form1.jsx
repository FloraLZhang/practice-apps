
import React, {useState} from 'react';

const Form1= ({onAdd}) =>{

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword]= useState('');

  const handleSubmit=(e) =>{
    e.preventDefault();
    onAdd({name, email, password});

  }
  return (
    <form onSubmit={handleSubmit}>
      <input type='text'placeholder='Type Name Here' value={name} onChange ={(e) => setName(e.target.value)}/>
      <input type='text' placeholder='Type Emial Here' value={email} onChange={ (e) => setEmail(e.target.value)} />
      <input type='text' placeholder='Type Password Here' value={password} onChange ={(e) => setPassword(e.target.value)} />
      <button type='submit'> Next</button>
    </form>

  )
}

export default Form1;