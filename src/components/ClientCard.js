import React, { Component } from 'react';

class ClientCard extends Component {

  state = {
    hovering: false
  }

  toggleHover = () => {
    this.setState({
      hovering: !this.state.hovering
    })
  }

  render() {
    return (
      <div className='client-card'>
        <li
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}>
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
