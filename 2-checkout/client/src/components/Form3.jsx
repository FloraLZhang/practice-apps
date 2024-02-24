
import React, {useState} from 'react';

const Form3= ({onAdd}) =>{
  const [creditCardNumber,setCreditCardNumber] = useState('');
  const [expiryDate, setexpiryDate] = useState('');
  const [cvv, setCvv]= useState('');
  const [billingZipCode, setbillingZipCode]= useState('');

  const handleSubmit=(e) =>{
    e.preventDefault();
    onAdd({creditCardNumber, expiryDate, cvv, billingZipCode});
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type='text'placeholder='Type Credit Card # Here' value={creditCardNumber} onChange ={(e) => setCreditCardNumber(e.target.value)}/>
      <input type='text' placeholder='Type expiry date Here' value={expiryDate} onChange={ (e) => setexpiryDate(e.target.value)} />
      <input type='text' placeholder='Type cvv Here' value={cvv} onChange ={(e) => setCvv(e.target.value)} />
      <input type='text' placeholder='Type zip code Here' value={billingZipCode} onChange ={(e) => setbillingZipCode(e.target.value)} />
      <button type='submit'> Next</button>
    </form>

  )

}

export default Form3;