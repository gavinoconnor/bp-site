import React, { Component } from 'react';
import ClientName from '../components/ClientName';
import ClientImage from '../components/ClientImage';

import clientData from '../assets/clientData';

class ClientsContainer extends Component {

  render() {

    const clientInfo = {clientData}

    const clientNames = clientInfo.clientData.map(client => {
      return <ClientName client={client} key={client.name}/>
    })

    const clientImages = clientInfo.clientData.map(client => {
      return <ClientImage image={client.image} key={client.name}/>
    })

    return (
      <div className='client-container'>

        <div className='client-col-1'>
          <h4>Clients</h4>
          <ul className='client-list'>
            {clientNames}
          </ul>
        </div>

        <div className='image-container'>
          <h4>Images</h4>
          {clientImages}
        </div>

      </div>
    )
  }
};

export default ClientsContainer;
