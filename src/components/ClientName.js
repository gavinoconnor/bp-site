import React, { Component } from 'react';

// import ClientImage from './ClientImage';

class ClientName extends Component {

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
    console.log("ClientName props", this.props.client.id)
    return (
      <div className='client-card'>
        <li
          onClick={() => this.props.revealImage(this.props.client)}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.leaveHover}>
          {this.props.client.name}
        </li>

        {this.state.hovering ?
          <div className='client-image'>
            {/* <ClientImage /> */}
            <img src={require(`../assets/images/${this.props.client.image}`)} alt=''/>
          </div>
          :
          ""
        }
      </div>
    );

  }
};

export default ClientName;
