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
          onMouseEnter={this.props.handleHover}
          onMouseLeave={this.props.leaveHover}>
          {this.props.client.name}
        </li>

        {/* {this.state.hovering ?
          <div className='client-image'>
            <img src={require(`../assets/images/${this.props.client.image}`)} alt=''/>
          </div>
          :
          ""
        } */}
      </div>
    );

  }
};

export default ClientName;
