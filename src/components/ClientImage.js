import React from 'react';

const ClientImage = (props) => {
  console.log("Image", props)

  const imageArray = props.client.images.map(image => {
    return <img src={require(`../assets/images/${props.client.folder}/${image}`)} alt=''/>
  })

  return (
    <div className='client-image'>
      {props.client.images.length >= 1 ? imageArray : "Loading"}
    </div>
  )
}

export default ClientImage;
