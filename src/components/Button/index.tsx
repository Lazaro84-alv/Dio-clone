import React from 'react';

import { ButtonContainer } from './styles';
import { IButton } from './types';

// eslint-disable-next-line react/function-component-definition
// eslint-disable-next-line react/prop-types
export default function Button({
  title,
  variant = 'primary',
  onClick,
}: IButton) {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
}
