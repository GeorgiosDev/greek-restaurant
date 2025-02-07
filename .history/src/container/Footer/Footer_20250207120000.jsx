import React from 'react';

import { FooterOverlay } from '../../components';
import  data  from '../../constants/data';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer" id="login">
    <FooterOverlay />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">{data.footerData.contact.address}</p>
        <p className="p__opensans">{data.footerData.contact.phone1}</p>
        <p className="p__opensans">{data.footerData.contact.phone2}</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={data.footerData.logo.image} alt="footer_logo" />
        <p className="p__opensans">{data.footerData.logo.text}</p>
        <img src={data.footerData.logo.spoonImage} className="spoon__img" alt="spoon" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          {data.footerData.socialMedia.map(({ icon, link }, index) => (
            <a key={index} href={link} target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
          ))}
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">{data.footerData.workingHours.weekdays.days}:</p>
        <p className="p__opensans">{data.footerData.workingHours.weekdays.time}</p>
        <p className="p__opensans">{data.footerData.workingHours.weekdays.days}:</p>
        <p className="p__opensans">{data.footerData.workingHours.weekdays.time}</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2021 Gericht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
