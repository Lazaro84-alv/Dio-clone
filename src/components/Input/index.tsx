/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
import React from 'react';
import { Controller } from 'react-hook-form';

import { IInput } from './types';

import { IconContainer, InputContainer, InputText, ErrorText } from './styles';

export default function Input({
  leftIcon,
  name,
  control,
  errorMessage,
  ...rest
}: IInput) {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          // eslint-disable-next-line react/jsx-props-no-spreading
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
}
