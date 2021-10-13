import React from 'react';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import Hero from '../Hero/Hero';
import { FaqData } from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero titleText={FaqData.title} image={FaqData.img} />
    {FaqData.pageContent}
  </Container>
);

Faq.propTypes = {
  titleText: PropTypes.node,
  image: PropTypes.string,
  pageContent: PropTypes.string,
};

export default Faq;