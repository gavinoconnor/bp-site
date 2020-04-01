import React from 'react';

const Contact = () => {
  return(
    <div className='contact-container'>
      <div className='contact-col'>
        <p>Contact</p>
        <p><u>bp@brianponto.com</u></p>
      </div>
      <div className='contact-col'>
        <p>Connect</p>
        <p>Linked In</p>
        <p>Instagram</p>
        <p>Twitter</p>
      </div>
      <div className='contact-col'>
        <p>Comrades</p>
        <ul className='comrades'>
          <li>Gavin O'Connor</li>
          <li>Lindsay Ballant</li>
          <li>Matthew McGuinness</li>
          <li>Victor Lau</li>
          <li>Room for</li>
          <li>A few more</li>
          <li>Names</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
