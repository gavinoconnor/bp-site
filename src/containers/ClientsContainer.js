import React from 'react';
import ClientCard from '../components/ClientCard';

import clientData from '../assets/clientData';

const ClientsContainer = (props) => {
  return (
    <ul className='client-list'>
      {
        clientData.map(client => {
          return <ClientCard
            key={client.name}
            client={client}/>
        })
      }
    </ul>
  )
}

export default ClientsContainer;
