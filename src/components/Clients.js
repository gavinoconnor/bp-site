import React from 'react';
import ClientsContainer from '../containers/ClientsContainer';

const Clients = (props) => {
  return (
    <div className='client-container'>
      <div className='client-col-1'>
        <h4>Clients</h4>
          <ClientsContainer/>
      </div>
      {/* <div className='image-container'>

      </div> */}
    </div>
  );
};

export default Clients;
