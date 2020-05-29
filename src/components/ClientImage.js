import React from 'react';

const ClientImage = (props) => {
  console.log("Image", props)
  return (
    <div>
      {props.image}
    </div>
  )
}

export default ClientImage;
