
import React from 'react';

const Confirmation = ( {data , onPurchase}) => {

const transferedData = Object.entries(data);

  return (
    <div>
      <h2>Confirmation! Please check!</h2>
      <div>
        {transferedData.map(([key, value]) => (
          <li key={key}>{key}:{value}</li>
        ))}
      </div>
      <button onClick={onPurchase}>Purchase</button>
    </div>

  )
}

export default Confirmation;