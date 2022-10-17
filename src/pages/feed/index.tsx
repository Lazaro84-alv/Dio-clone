/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import Header from '../../components/Header';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

// eslint-disable-next-line object-curly-newline
import { Container, Column, Title, TitleHighlight } from './styles';

// eslint-disable-next-line react/function-component-definition
const Feed = () => (
  <>
    <Header autenticado />
    <Container>
      <Column flex={3}>
        <Title>Feed</Title>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Column>
      <Column flex={1}>
        <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
        <UserInfo
          percentual={45}
          nome="Lázaro Alves"
          image="https://avatars.githubusercontent.com/u/75143575?v=4"
        />
        <UserInfo
          percentual={87}
          nome="Lázaro Alves"
          image="https://avatars.githubusercontent.com/u/75143575?v=4"
        />
        <UserInfo
          percentual={27}
          nome="Lázaro Alves"
          image="https://avatars.githubusercontent.com/u/75143575?v=4"
        />
        <UserInfo
          percentual={56}
          nome="Lázaro Alves"
          image="https://avatars.githubusercontent.com/u/75143575?v=4"
        />
        <UserInfo
          percentual={13}
          nome="Lázaro Alves"
          image="https://avatars.githubusercontent.com/u/75143575?v=4"
        />
      </Column>
    </Container>
  </>
);

// eslint-disable-next-line import/prefer-default-export
export { Feed };
