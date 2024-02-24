
import React , {useState} from 'react';

const Form2= ({onAdd}) =>{
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2 , setAddressLine2] = useState('');
  const [city, setCity]= useState('');
  const [state, setState]=useState('');
  const [zipCode, setZipcode] = useState('');


  const handleSubmit=(e) =>{
    e.preventDefault();
    onAdd({addressLine1, addressLine1, city, state, zipCode});
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text'placeholder='Address Line 1' value={addressLine1} onChange ={(e) => setAddressLine1(e.target.value)}/>
      <input type='text' placeholder='Address Line 2' value={addressLine2} onChange={ (e) => setAddressLine2(e.target.value)} />
      <input type='text' placeholder='city' value={city} onChange ={(e) => setCity(e.target.value)} />
      <input type='text' placeholder='state' value={state} onChange ={(e) => setState(e.target.value)} />
      <input type='ZipCode' placeholder='zipCode' value={zipCode} onChange={(e) => setZipcode(e.target.value)} />
      <button type='submit'> Next</button>
    </form>

  )

}

export default Form2;