import React from 'react';

const ClientImage = (props) => {
  console.log("Image", props)
  return (
    <div className='client-image'>
      {props.client.image ?
      <img src={require(`../assets/images/${props.client.image}`)} alt=''/>
      :
      "Loading"
    }
    </div>
  )
}

export default ClientImage;
