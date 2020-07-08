import React, { Component } from 'react';
import ClientName from '../components/ClientName';
import ClientImageArray from '../components/ClientImageArray';

import clientData from '../assets/clientData';

class ClientsContainer extends Component {

  state = {
    hoverID: '',
    clientImages: []
  }

  revealImage = (clientObject) => {
    const foundClient = clientData.find(client => {
      return client.id === clientObject.id
    })
    this.setState({
      hoverID: foundClient.id,
      clientImages: foundClient.images
    })
  }


  render() {

    const clientNames = clientData.map(client => {
      return <ClientName
        client={client}
        key={client.id}
        revealImage={this.revealImage}
        />
    })

    const clientImageArray = clientData.map(client => {
      if (client.id === this.state.hoverID) {
        return <ClientImageArray
          client={client}
          key={client.id}
          clientImages={this.state.clientImages}/>
      } return null
    })

    return (
      <div className='client-container'>

        <div className='client-column'>
          <h4>Clients</h4>
            <ul className='client-list'>
              {clientNames}
            </ul>
        </div>

        <div className='client-image-container'>
          {clientImageArray}
        </div>

      </div>
    )
  }
};

export default ClientsContainer;
