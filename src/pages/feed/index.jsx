/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

// eslint-disable-next-line object-curly-newline
import { Container } from './styles';

// eslint-disable-next-line react/function-component-definition
const Feed = () => (
  <>
    <Header />
    <Container>
      <Card />
    </Container>
  </>
);

// eslint-disable-next-line import/prefer-default-export
export { Feed };
