import React from 'react';
import { MdEmail, MdLock, MdPermIdentity } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { api } from '../../services/api';

import { IRegister } from './types';

import {
  Container,
  Column,
  RegisterLogin,
  RegisterText,
  Row,
  Wrapper,
  Title,
  TitleLogin,
  SubtitleLogin,
} from './styles';

export default function Register() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    reValidateMode: 'onChange',
    mode: 'onChange',
  });

  const onSubmit = async (formData: IRegister) => {
    try {
      const { data } = await api.get(
        `/users?name=${formData.name}&${formData.email}&password=${formData.password}`,
      );

      if (data.length && data[0].id) {
        navigate('/feed');
        return;
      }
      alert('Usuário ou senha inválido');
    } catch (e) {
      // TODO: HOUVE UM ERRO
    }
  };

  console.log('errors', errors);

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias tecnologias e entrar mais rápido nas empresas mais
            desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="Nome Completo"
                leftIcon={<MdPermIdentity />}
                name="nome completo"
                control={control}
              />
              {errors.name && <span>Nome completo é obrigatório</span>}
              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                control={control}
              />
              {errors.email && <span>E-mail é obrigatório</span>}
              <Input
                type="password"
                placeholder="password"
                leftIcon={<MdLock />}
                name="password"
                control={control}
              />
              {errors.password && <span>Senha é obrigatório</span>}
              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>
            <RegisterText>
              Ao clicar em criar minha conta grátis, declaro que aceito as
              Políticas de Privacidade e os Termos de Uso da DIO.
            </RegisterText>
            <Row>
              <RegisterLogin>
                <span>já tenho conta. </span>
                Fazer login
              </RegisterLogin>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}
