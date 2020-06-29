import React, { Component } from 'react';

class ClientName extends Component {

  render() {
    return (
      <div className='client-card'>
        <li
          onMouseEnter={() => this.props.revealImage(this.props.client)}
          >
          {this.props.client.name}
        </li>
      </div>
    );

  }
};

export default ClientName;
