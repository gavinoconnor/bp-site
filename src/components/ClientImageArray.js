import React from 'react';
import ClientImage from './ClientImage';

const ClientImageArray = (props) => {
  // console.log("Image Array", props.clientImages)

  const clientImages = props.client.images.map(image => {
    return <ClientImage
      client={props.client}
      image={image}
      key={image}/>
  })

  return (
    <div className='client-image-array'>
      {props.client.images.length >= 1 ? clientImages[0] : "Loading"}
    </div>
  )


  // return (
  //   <div className='client-image-array'>
  //       {props.client.images.map((image, index) => (
  //         <div className='client-image'>

  //         </div>
  //       ))}
  //   </div>
  // )
}

export default ClientImageArray;
