import React, { Component } from 'react';
import ClientImage from './ClientImage';

class ClientImageArray extends Component {
  state = {
    imageIndex: 0
  }

   clientImages = this.props.client.images.map(image => {
    return <ClientImage
      client={this.props.client}
      image={image}
      key={image}/>
  })

  imgTimer = () => setInterval(() => {
    if (this.imageIndex < this.clientImages.length) 
    this.setState({
      imageIndex: 1
    }) 
    // else { clearInterval(imgTimer) 
    //   console.log("Clearing timer") }
    console.log("Current index: ", this.state.imageIndex, "Length:",  this.clientImages.length)
  }, 1000)

  componentDidMount() {
    this.imgTimer();
  }
  
  render() {
    return (
      <div>

  <div className='client-image-array'>
    {this.props.client.images.length >= 1 ? this.clientImages[this.state.imageIndex] : "Loading"}
  </div>
      </div>

    )
  }


}

export default ClientImageArray;
