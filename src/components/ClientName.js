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
    console.log("ClientName props", this.props.client.id)
    return (
      <div className='client-card'>
        <li
          onMouseEnter={() => this.props.revealImage(this.props.client)}
          // onMouseEnter={this.handleHover}
          // onMouseLeave={this.leaveHover}
          >
          {this.props.client.name}
        </li>
      </div>
    );

  }
};

export default ClientName;
