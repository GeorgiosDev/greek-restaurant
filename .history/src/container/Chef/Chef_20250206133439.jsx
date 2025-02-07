import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        <p className="p__opensans"> Anyone who's a chef, who loves food, ultimately knows that all that matters is: 'Is it good? Does it give pleasure?' </p>
        <p>Anthon</p>
      </div>

      <div className="app__chef-sign">
        <p>John Doe</p>
        <p className="p__opensans">Chef & Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;