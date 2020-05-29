import React, { Component } from 'react';

class ClientCard extends Component {

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
    return (
      <div className='client-card'>
        <li
          onMouseEnter={this.handleHover}
          onMouseLeave={this.leaveHover}>
          {this.props.client.name}
        </li>

        {this.state.hovering ?
          <div>
            <img src={require(`../assets/images/${this.props.client.image}`)} alt=''/>
          </div>
          :
          ""
        }
      </div>
    );

  }
};

export default ClientCard;
