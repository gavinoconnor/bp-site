import React, { Component } from 'react';
import ClientName from '../components/ClientName';
import ClientImage from '../components/ClientImage';

import clientData from '../assets/clientData';

class ClientsContainer extends Component {

  state = {
    hovering: false
  }
  // separate functions to toggle hover
  handleHover = () => {
    this.setState({
      hovering: true
    })
  }
  leaveHover = () => {
    this.setState({
      hovering: false
    })
  }

  render() {
    // console.log("Client name", clientData)

    const clientNames = clientData.map(client => {
      return <ClientName
        client={client}
        key={client.name}
        handleHover={this.handleHover}
        leaveHover={this.leaveHover}/>
    })
    console.log("Client", clientNames)

    const clientImages = clientData.map(client => {
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

        {this.state.hovering ?
          <div className='image-container'>
            <h4>Images</h4>
              {clientImages}
          </div>
          :
          ""
        }
      </div>
    )
  }
};

export default ClientsContainer;
