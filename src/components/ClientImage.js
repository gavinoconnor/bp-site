import React from 'react';

const ClientImage = (props) => {
  // console.log("Image", props)
  return (
    <div>
      <img src={require(`../assets/images/${props.image}`)} alt=''/>
    </div>
  )
}

export default ClientImage;
