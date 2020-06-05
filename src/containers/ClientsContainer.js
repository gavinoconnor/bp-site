import React, { Component } from 'react';
import ClientName from '../components/ClientName';
import ClientImage from '../components/ClientImage';

import clientData from '../assets/clientData';

class ClientsContainer extends Component {

  state = {
    hoverID: ''
  }

  revealImage = (clientObject) => {
    const foundClient = clientData.find(client => {
      return client.id === clientObject.id
    })
    this.setState({
      hoverID: foundClient.id
    })
  }

  render() {
    console.log(this.state.hoverID)

    const clientNames = clientData.map(client => {
      return <ClientName
        client={client}
        key={client.id}
        revealImage={this.revealImage}
        />
    })

    const clientImage = clientData.map(client => {
      if (client.id === this.state.hoverID) {
        return <ClientImage client={client} key={client.id} />
      } return null
    })

    console.log("Image", clientImage)

    return (
      <div className='client-container'>

        <div className='client-column'>
          <h4>Clients</h4>
            <ul className='client-list'>
              {clientNames}
            </ul>
        </div>

        <div className='client-image-container'>
          {clientImage}
        </div>

      </div>
    )
  }
};

export default ClientsContainer;
