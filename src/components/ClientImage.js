import React from 'react';

const ClientImage = (props) => {
  console.log("Image", props)

  const singleImage = <img src={require(`../assets/images/${props.client.folder}/${props.image}`)} alt=''/>

  return (
    <div className='client-image'>
      {singleImage}
    </div>
  )
}

export default ClientImage;
