import React from 'react';
import { SubHeading } from '../../components';
import images from "../../constants/images";
import './Footer.css';

const Footer = () => (
  <div className='app__footer app__bg'>

    <div className='app__footer-headsection'>
      <SubHeading title='Newsletter' />
      <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
      <p className='p__opensans' style={{ marginTop: '24px' }}> And never miss latest Updates!</p>
      <div className='app__footer-headsection__newsinput'>
        <input type="text" placeholder='email address' />
        <button className='custom__button'>Subscribe</button>
      </div>

    </div>
    <div className='app__footer-bottomsection'>
      <div className='app__footer-bottomsection_section1'>
        <p className='p__cormorant'>Contact Us</p>
        <p className='p__opensans padding__section'>9 W 53rd St, New York, NY 10019, USA</p>
        <p className='p__opensans'>+1 212-344-1230</p>
        <p className='p__opensans'>+1 212-555-1230</p>
      </div>
      <div className='app__footer-bottomsection_section-image'>
        <img src={images.gericht} alt="app-logo" />
        <p className='p__opensans  padding__section'>"The best way to find yourself is to lose yourself in the service of others.”</p>
      </div>
      <div className='app__footer-bottomsection_section2'>
        <p className='p__cormorant'>Working Hours</p>
        <p className='p__opensans padding__section' >
         Monday-Friday:
        </p>
        <p className='p__opensans'>08:00 am -12:00 am</p>
        <p className='p__opensans padding__section' >
        Saturday-Sunday:
        </p>
        <p className='p__opensans'>07:00am -11:00 pm</p>
      

      </div>
    </div>
  </div>
);

export default Footer;
