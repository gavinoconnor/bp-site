import React, { Component } from 'react';
import ClientName from '../components/ClientName';
// import ClientImage from '../components/ClientImage';

import clientData from '../assets/clientData';

class ClientsContainer extends Component {

  state = {
    hoverID: ''
  }

  revealImage = (clientObject) => {
    const foundClient = clientData.find(client => {
      return client.id === clientObject.id
    })
    console.log("Found", foundClient)
    this.setState({
      hoverID: foundClient.id
    })
  }

  render() {
    console.log(this.state.hoverID)
    // set state of hover id to client id
    // if image id === hover id, show image


    const clientNames = clientData.map(client => {
      return <ClientName
        client={client}
        key={client.id}
        hoverID={this.state.hoverID}
        revealImage={this.revealImage}
        />
    })
    console.log("Client list", clientNames)

    // const clientImage = clientData.find(client => {
    //   if (client.id === this.state.hoverID) {
    //     return <ClientImage image={client.image}/>
    //   }
    // })
    // console.log("Image", clientImage)

    return (
      <div className='client-container'>

        <div className='client-col-1'>
          <h4>Clients</h4>
          <ul className='client-list'>
            {clientNames}
          </ul>
        </div>
        <div className='client-image-container'>
          <h4>Images</h4>
          {/* {clientImage} */}
        </div>
      </div>
    )
  }
};

export default ClientsContainer;
