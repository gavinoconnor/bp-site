import React from 'react';

export default function ClientName(props) {
  return (
    <div className='client-card'>
      <li>{props.client.name}</li>
    </div>
  )
}

