import React from 'react';
import ClientImage from './ClientImage';

const ClientImageArray = (props) => {
  console.log("Array", props)

  const clientImages = props.client.images.map((image, index) => {
    return <ClientImage client={props.client} image={image}/>
  })

  return (
    <div className='client-image-array'>
      {props.client.images.length >= 1 ? clientImages : "Loading"}
      {/* {clientImages} */}
    </div>
  )
}

export default ClientImageArray;
