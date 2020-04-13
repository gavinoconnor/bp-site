import React from 'react';
import ClientCard from '../components/ClientCard';

import clientData from '../assets/clientData';

const ClientsContainer = (props) => {
  return (
    <div className='client-map'>
      {
        clientData.map(client => {
          return <ClientCard
            key={client.name} 
            client={client}
            hovering={props.hovering} />
        })
      }
    </div>
  );
}




export default ClientsContainer;
