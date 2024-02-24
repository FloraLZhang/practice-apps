import React, {useState} from "react";
import ReactDOM from "react-dom";
import Form1 from './components/Form1.jsx';
import Form2 from './components/Form2.jsx';
import Form3 from './components/Form3.jsx';
import Confirmation from './components/Confirmation.jsx';
import axios from 'axios';

const App= () => {

  const [form, setForm] = useState(0);
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    creditCardNumber: '',
    expiryDate: '',
    cvv: '',
    billingZipCode: '',
  })

  const nextForm = () => setForm(form + 1);
  const addData = (newData) => setData({...data,...newData});
  const handleCheckout =() => setForm(1);

  const handlePurchase =() => {
    axios.post('/responses', data)
    .then(response => {
      console.log(response.data);
      setForm(0);
      setData({});
    })
  }



return(
  <div>
    <h1>AzurStyle</h1>
    {form === 0 ? <button onClick={handleCheckout}>Checkout</button> :null}
    {form === 1 ? <Form1 onAdd={data =>{
      addData(data);
      nextForm();
    }} /> : null}
    {form === 2 ? <Form2 onAdd={data =>{
      addData(data);
      nextForm();
    }} /> : null}
     {form === 3 ? <Form3 onAdd={data =>{
      addData(data);
      nextForm();
    }} /> : null}
     {form === 4 ? <Confirmation data = {data} onPurchase={handlePurchase} /> : null}
    <footer>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
    </footer>
  </div>
)
}

ReactDOM.render(<App />, document.getElementById("root"));