import React, { Component } from 'react';
import ClientName from '../components/ClientName';
import ClientImages from '../components/ClientImages';
import ClientNames from '../components/ClientNames';


import clientData from '../assets/clientData';

class ClientsContainer extends Component {

  state = {
    hoverID: '',
    clientImages: [],
    imageIndex: 0
  }

  hideImage = () => {
    console.log('clicked')
    this.setState({
      hoverID: null
    })
  }

  render() {

    const nonClientNames = clientData.map(client => {
      if (client.id > 25) {
        return <ClientName
        client={client}
        key={client.id}
        revealImage={this.revealImage}
        />
      }
    })


    return (
      <div className='client-container'>
      {/* render list of clients */}
        <ClientNames clientdata={clientData}/>

      {/* non-clients */}
        <div className='client-column non-client-column'>
          <h4>Non-Clients</h4>
            <ul className='client-list'>
              {nonClientNames}
            </ul>
        </div>s

      {/* image container */}

        {/* <div className='client-image-container' onClick={this.hideImage}>
          {clientImageArray}
        </div> */}

        <div className='client-image-container'>
          <ClientImages clientdata={clientData} />
        </div>

      </div>
    )
  }
};

export default ClientsContainer;
