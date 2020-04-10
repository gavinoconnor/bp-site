import React from 'react';

import image from '../assets/images/nikon-1.jpg';

const Clients = (props) => {
  console.log(props.clients[0])
  return (
    <div className='client-container'>
      <div className='client-col-1'>
        <h4>Clients</h4>
        <ul className='client-list' onMouseOver={props.handleHover} onMouseLeave={props.leaveHover}>
          <li>{props.clients[0].name}
          {props.hovering ?
          <img src={require(`../assets/images/${props.clients[0].image}`)} alt=''/> : null}
          </li>
          {/* <li>Diana Rilov</li>
          <li>Berlin Rosen</li>
          <li>Anne Mühlethaler</li>
          <li>Piermont Bank</li>
          <li>Nikon</li>{props.hovering ?
          <div><img src={props.image}/></div> : null}
          <li>eBay</li>
          <li>HBO</li>
          <li>Delta</li>
          <li>Start With Why</li>
          <li>goop</li>
          <li>Motif</li>
          <li>New York Life</li>
          <li>FEED</li>
          <li>Two Sigma</li>
          <li>Over the Eight</li>
          <li>LoveLive</li>
          <li>Third Rail Coffee</li>
          <li>UEG</li>
          <li>Origins School</li>
          <li>BCG</li>
          <li>White House Farm</li>
          <li>the Green Building</li>
          <li>CHA CHA's House</li>
          <li>Unilever</li>
          <li>Wise Guitar</li>
          <br/>
          <h4>Personal</h4>
          <li>Freedom of the Press</li>
          <li>Landfill Zine</li>
          <li>A Return to Mothers Love</li>
          <li>Nov York</li>
          <li>the Indypendent</li>
          <li>AIGA</li>
          <li>1968xoxox</li>
          <li>(I LOVE NY)</li>
          <li>B-Sides</li> */}
        </ul>
      </div>
      <div className='image-container'>
        {/* <img src={nikon} alt='nikon-1'/> */}
      </div>
    </div>
  );
};

export default Clients;
