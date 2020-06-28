import React, { Component } from 'react';

class ClientName extends Component {

  // state = {
  //   hovering: false
  // }
  // // separate functions to toggle hover
  // handleHover = () => {
  //   this.setState({
  //     hovering: true
  //   })
  // }
  // leaveHover = () => {
  //   this.setState({
  //     hovering: false
  //   })
  // }

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
