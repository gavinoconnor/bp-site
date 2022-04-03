import React, { Component } from "react";
import ClientImage from "./ClientImage";

class ClientImageArray extends Component {
  state = { imageIndex: 0, intervalId: 0 };

  clientImages = this.props.client.images.map(image => {
    return <ClientImage client={this.props.client} image={image} key={image} />;
  });

  componentDidMount() {
    const newIntervalId = setInterval(() => {
      if (this.state.imageIndex < this.clientImages.length - 1)
        this.setState(prevState => {
          return {
            imageIndex: prevState.imageIndex + 1
          };
        });
      else {
        clearInterval(newIntervalId);
      }
      // console.log(
      //   "Current index: ",
      //   this.state.imageIndex,
      //   "Length:",
      //   this.clientImages.length
      // );
    }, 1000);

    this.setState(prevState => {
      return {
        ...prevState,
        intervalId: newIntervalId
      };
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
    // this.setState({
    //   imageIndex: 0,
    //   intervalId: 0
    // });
  }

  render() {
    return (
      <div>
        <div className="client-image-array">
          {this.props.client.images.length >= 1
            ? this.clientImages[this.state.imageIndex]
            : "Loading"}
        </div>
      </div>
    );
  }
}

export default ClientImageArray;