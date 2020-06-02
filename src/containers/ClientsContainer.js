import React, { Component } from 'react';
import ClientName from '../components/ClientName';
import ClientImage from '../components/ClientImage';

import clientData from '../assets/clientData';

class ClientsContainer extends Component {

  render() {

    const clientNames = clientData.map(client => {
      return <ClientName
        client={client}
        key={client.name}
        />
    })
    console.log("Client list", clientNames)

    const clientImages = clientData.map(client => {
      // const foundClient = clientNames.find(clientImage => {
      //   clientImage.props.client.image === client.image
      // })
      // find target client object and render image
      return <ClientImage image={client.image} key={client.name}/>
    })
    console.log("Image", clientImages )

    return (
      <div className='client-container'>

        <div className='client-col-1'>
          <h4>Clients</h4>
          <ul className='client-list'>
            {clientNames}
          </ul>
        </div>

      </div>
    )
  }
};

export default ClientsContainer;
