import React from 'react';

import { Container, Details, Img, Title, Description } from './styles';

import img from '../../assets/images/13.png'

const Banner = () => {
  return (
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>
        <Description>
          Matenha suas parcerias em dia, use o picpay para fazer suas combranças
        </Description>
      </Details>
      <Img source={img}/>
    </Container>
  );
}

export default Banner;