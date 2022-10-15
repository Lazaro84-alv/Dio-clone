/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';

// eslint-disable-next-line prettier/prettier
import {
  Container,
  NameText,
  Progress,
  UserPicture,
} from './styles';

// eslint-disable-next-line react/function-component-definition
const UserInfo = ({ nome, image, percentual }) => {
  return (
    <Container>
      <UserPicture src={image} />
      <div>
        <NameText>{nome}</NameText>
        <Progress percentual={percentual} />
      </div>
    </Container>
  );
};

// eslint-disable-next-line import/prefer-default-export
export { UserInfo };
