import React from 'react';

const ClientImage = (props) => {
  console.log("Image", props)

  // let foundImages;
  //
  //   if (props.client.images) {
  //     foundImages = props.client.images.map(image => {
  //       console.log("Map check", image)
  //   })}
  //   else {
  //       return "Loading"
  //   }

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
