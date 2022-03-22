import React from 'react';

const About = () => {
  return(
    <div className='about-container'>
      <div className='about-col-1'>
        <h4>About</h4>

        <p>A collaborative and hands-on leader who likes to influence the entire creative process beginning with team-building and brief-writing, and seeing it through to final execution and deployment. Skilled at driving teams toward uncovering the visual language that will bring the clients’ objectives to life in unexpected and effective ways.  Facing any task big or small with enthusiasm, passion, and a deep well of creative problem-solving.
        </p>

        <p>Brian’s work has been recognized by numerous design organizations and publications including the AIGA, The Type Directors Club, Print Magazine, Communication Arts, the Hong Kong Heritage Center, and the Center for Political Graphics (CSPG), among others.
        </p>

        <p>Brian received his Bachelor’s of Fine Art in Graphic Design from the <a href='https://sva.edu' target='_blank' rel='noopener noreferrer'>School of Visual Arts</a>, studying under <a href='http://paulsahre.com/' target='_blank' rel='noopener noreferrer'>Paul Sahre</a>. Upon graduating he worked for mentor and designer <a href='https://www.jamesvictore.com/' target='_blank' rel='noopener noreferrer'>James Victore</a>, and other boutique studios including <a href='http://www.pushpininc.com/' target='_blank' rel='noopener noreferrer'>the Pushpin Group</a> and the Valentine Group.
        </p>

        <p>He lives with his wife Ferris, son Wesley, and lil’ <a href='https://www.longroadhomerescue.com/' target='_blank' rel='noopener noreferrer'>rescue-pup</a> Lil, in Brooklyn. He is an art contributor for <a href='https://indypendent.org/' target='_blank' rel='noopener noreferrer'>the Indypendent</a>, and a baseball contributor for the <a href='https://www.instagram.com/explore/tags/ratcannons/' target='_blank' rel='noopener noreferrer'>Brooklyn Rat Cannons</a>.
        </p>
      </div>

      <div className='about-col-2'>
        <div className='about-contact'>
          <h4>Contact</h4>
          <p><a href='mailto:bp@brianponto.com?subject=Hello from your website'>bp@brianponto.com</a></p>
        </div>
        <div className='about-connect'>
          <h4>Connect</h4>
          <ul className='connect-list'>
            <li><a href='https://www.linkedin.com/in/brianponto/' target='_blank' rel='noopener noreferrer'>LinkedIn</a></li>
            <li><a href='https://www.instagram.com/brianponto/' target='_blank' rel='noopener noreferrer'>Instagram</a></li>
            <li><a href='https://twitter.com/brianponto' target='_blank' rel='noopener noreferrer'>Twitter</a></li>
          </ul>
        </div>
        <div className='about-connect'>
          <h4>Thought Leadership</h4>
          <p><a href='https://medium.com/@bp_90182' target='_blank' rel='noopener noreferrer'>Medium</a></p>
        </div>
      </div>

    </div>
  );
}

export default About;
