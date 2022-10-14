/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';

import { IconContainer, InputContainer, InputText } from './styles';

// eslint-disable-next-line react/function-component-definition
const Input = ({ leftIcon, name, ...rest }) => {
  return (
    <InputContainer>
      {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
      <InputText {...rest} />
    </InputContainer>
  );
};

// eslint-disable-next-line import/prefer-default-export
export { Input };
