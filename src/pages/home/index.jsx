/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import bannerImage from '../../assets/banner.png';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

// eslint-disable-next-line object-curly-newline
import { Container, TextContent, Title, TitleHighlight } from './styles';

// eslint-disable-next-line react/function-component-definition
const Home = () => (
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
          mundo e encare seu novo desafio profissional, evoluuindo em comunidade
          com os melhores experts.
        </TextContent>
        <Button
          title="Começar agora"
          variant="secondary"
          onClick={() => null}
        />
      </div>
      <div>
        <img src={bannerImage} alt="Image principal" />
      </div>
    </Container>
  </>
);

// eslint-disable-next-line import/prefer-default-export
export { Home };
