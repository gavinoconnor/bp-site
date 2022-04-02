import React from 'react';

// const ClientImage = (props) => {
//   console.log("ClientImage props:", props)
//   const singleImage = <img src={require(`../assets/images/${props.client.folder}/${props.client.images[0]}`)} alt={props.client.name}/>

//   return (
//     <div className='client-image'>
//       {singleImage}
//     </div>
//   )
// }

const ClientImage = (props) => {

  return (
    <div className='client-image'>
      <img src={props.src} alt={props.src} />
    </div>
  )}

export default ClientImage;
