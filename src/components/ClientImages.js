import React from 'react';
import ClientImage from './ClientImage';


const ClientImages = (props) => {
  console.log("ClientImages:", props);
  return (
    <div className='client-image-container'>
      <ClientImage />
    </div>
  );
}

export default ClientImages;