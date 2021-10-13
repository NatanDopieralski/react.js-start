import React from 'react';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import Hero from '../Hero/Hero';
import { InfoData } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={InfoData.title} image={InfoData.img} />
    {InfoData.pageContent}
  </Container>
);

Info.propTypes = {
  titleText: PropTypes.node,
  image: PropTypes.string,
  pageContent: PropTypes.string,
};

export default Info;