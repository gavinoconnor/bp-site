import React from 'react';

const About = () => {
  return(
    <div className='about-container'>
      <div className='about-col-1'>
        <h4>About</h4>

        <p>A collaborative and hands-on leader who likes to influence the entire creative process beginning with team-building and brief-writing, and seeing it through to final execution and deployment. Skilled at driving teams toward uncovering the visual language that will bring the clients’ objectives to life in unexpected and effective ways.  Facing any task big or small with enthusiasm, passion and a deep well of creative problem-solving.
        </p>

        <p>Brian’s work has been recognized by numerous design organizations and publications including the AIGA, The Type Directors Club, Print Magazine, Communication Arts, the Hong Kong Heritage Center, and the Center for Political Graphics (CSPG), among others.
        </p>

        <p>Brian received his Bachelor’s of Fine Art in Graphic Design from the School of Visual Arts, studying under Paul Sahre. Upon graduating he worked for mentor and designer James Victore, and other boutique studios including the Pushpin Group and the Valentine Group.
        </p>

        <p>He currently lives with his wife Ferris, son Wesley, and lil’ rescue-pup Lil, in Brooklyn. He is an art contributor to the Indypendent, a center fielder for the Brooklyn Rat Cannons baseball club, and a musician in several projects.
        </p>
      </div>

      <div className='about-col-2'>
        <div className='about-contact'>
          <h4>Contact</h4>
          <p>bp@brianponto.com</p>
        </div>
        <div className='about-connect'>
          <h4>Connect</h4>
          <ul className='connect-list'>
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className='about-connect'>
          <h4>Thought Leadership</h4>
          <p>Medium</p>
        </div>
      </div>

    </div>
  );
}

export default About;
