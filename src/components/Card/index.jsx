import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from './styles';

// eslint-disable-next-line react/function-component-definition
const Card = () => (
  <CardContainer>
    <ImageBackground />
    <Content>
      <UserInfo>
        <UserPicture />
        <div>
          <h4>Lázaro Alves</h4>
          <p>Há 15 minutos</p>
        </div>
      </UserInfo>
      <PostInfo>
        <h4>Projeto para curso de HTML e CSS</h4>
        <p>
          Projeto feito o curso de html e css no bootcamp dio do Global
          avanade...
          <strong>Saiba Mais</strong>
        </p>
      </PostInfo>
      <HasInfo>
        <h4>#HTML #CSS #JavaScript</h4>
        <p>
          <FiThumbsUp />
          13
        </p>
      </HasInfo>
    </Content>
  </CardContainer>
);

// eslint-disable-next-line import/prefer-default-export
export { Card };
