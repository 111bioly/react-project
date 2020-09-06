import React from 'react';
import styles from './FAQ.scss';
import {Link} from 'react-router-dom';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import {faqContents, infoContents, listData} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={faqContents.title} image={listData.image} />
    <h2>{infoContents.subtitle}</h2>
    <div className={styles.component}>
      <p><Link exact to='/' activeClassName='active'>{faqContents.question1}</Link></p>
      <p><Link exact to='/' activeClassName='active'>{faqContents.question2}</Link></p>
      <p><Link exact to='/' activeClassName='active'>{faqContents.question3}</Link></p>
    </div>
    
  </Container>
);
  
FAQ.PropTypes ={
  title: PropTypes.string,
  image: PropTypes.string,
};
  
export default FAQ;