import React from 'react';

import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import {faqContents, infoContents, listData} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={faqContents.title} image={listData.image} />
    <h2>{infoContents.subtitle}</h2>
    
    <p>{faqContents.question1}</p>
    <p>{faqContents.question2}</p>
    <p>{faqContents.question3}</p>
  </Container>
);
  
FAQ.PropTypes ={
  title: PropTypes.string,
  image: PropTypes.string,
};
  
export default FAQ;