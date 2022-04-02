import React from 'react';
import useHover from './useHover';
import ClientName from '../components/ClientName';
// import ClientImages from './ClientImages';


const ClientNames = (props) => {
  const [hoverRef, hovering] = useHover();
  return (
    <div className='client-column'>
    {hovering && console.log(hoverRef.current)}
    <h4>Clients</h4>
      <ul className='client-list' ref={hoverRef} {...props}>
        {props.clientdata.map((client, idx) => (
          <ClientName client={client} key={idx} />
        ))}
      </ul>
  </div>
  )
}

export default ClientNames;