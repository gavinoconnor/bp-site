import React from 'react';

const ClientCard = (props) => {
  return (
    <div className='client-card'>
      <li>{props.client.name}</li>
      {props.hovering ?
      <img src={require(`../assets/images/${props.client.image}`)} alt=''/> : null}
    </div>
  );
};

export default ClientCard;
