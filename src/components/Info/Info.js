import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { infoContents, listData } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={infoContents.title} image={listData.image} />
    <h2>{infoContents.subtitle}</h2>
    <p>{infoContents.text}</p>
  </Container>
);

Info.PropTypes ={
  title: PropTypes.string,
  image: PropTypes.string,
};

export default Info;