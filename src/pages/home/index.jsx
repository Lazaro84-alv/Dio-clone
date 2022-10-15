/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import bannerImage from '../../assets/banner.png';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

// eslint-disable-next-line object-curly-newline
import { Container, TextContent, Title, TitleHighlight } from './styles';

export default function Home() {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/login');
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente
              <br />
            </TitleHighlight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadora do
            mundo e encare seu novo desafio profissional, evoluuindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button
            title="Começar agora"
            variant="secondary"
            onClick={handleClickSignIn}
          />
        </div>
        <div>
          <img src={bannerImage} alt="Image principal" />
        </div>
      </Container>
    </>
  );
}
