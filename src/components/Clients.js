import React from 'react';
import ClientsContainer from '../containers/ClientsContainer';

// import image from '../assets/images/nikon-1.jpg';

const Clients = (props) => {
  console.log(props)
  return (
    <div className='client-container'>
      <div className='client-col-1'>
        <h4>Clients</h4>
        <ul className='client-list' onMouseOver={props.handleHover} onMouseLeave={props.leaveHover}>

          <ClientsContainer hovering={props.hovering} />
          
        </ul>
      </div>
      <div className='image-container'>
        {/* <img src={nikon} alt='nikon-1'/> */}
      </div>
    </div>
  );
};

export default Clients;
