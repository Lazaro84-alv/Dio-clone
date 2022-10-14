/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { MdEmail, MdLock } from 'react-icons/md';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

// eslint-disable-next-line object-curly-newline
import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from './styles';

// eslint-disable-next-line react/function-component-definition
const Login = () => (
  <>
    <Header />
    <Container>
      <Column>
        <Title>
          A plataforma para você aprender com experts, dominar as principais
          tecnologias e entrar mais rápido nas empresas mais desejadas.
        </Title>
      </Column>
      <Column>
        <Wrapper>
          <TitleLogin>Faça seu cadastro</TitleLogin>
          <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
          <form>
            <Input placeholder="Email" leftIcon={<MdEmail />} />
            <Input placeholder="Senha" type="password" leftIcon={<MdLock />} />
            <Button title="Entrar" variant="secondary" />
          </form>
          <Row>
            <EsqueciText>Esqueci minha senha</EsqueciText>
            <CriarText>Criar Conta</CriarText>
          </Row>
        </Wrapper>
      </Column>
    </Container>
  </>
);

// eslint-disable-next-line import/prefer-default-export
export { Login };
