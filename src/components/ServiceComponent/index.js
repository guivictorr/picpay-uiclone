import React from 'react';

import { ServiceContainer, Img, ServiceTextContainer, ServiceTitle, ServiceDescription } from './styles';

import img1 from '../../assets/images/avatar.png'
import img2 from '../../assets/images/01.png'
import img3 from '../../assets/images/06.png'
import img4 from '../../assets/images/07.png'

const services = [
  {
    img: img1,
    title: 'Pagar pessoas',
    description: 'Pague todos os seus amigos que também estão no PicPay',
  },
  {
    img: img2,
    title: 'Recarga de Celular',
    description: 'Vivo, Claro, Tim, Oi, Nextel, Algar, Sercomtel, Correios',
  },
  {
    img: img3,
    title: 'Pagar Conta',
    description: 'Pague sua conta de luz, água boletos bancários etc.',
  },
  {
    img: img4,
    title: 'Cobrar',
    description: 'Cobre um amigo',
  },
]

const ServiceComponent = () => {
  return (
    <>
      {services.map(item => (
        <ServiceContainer key={item.title}>
          <Img source={item.img}/>
          <ServiceTextContainer>
            <ServiceTitle>{item.title}</ServiceTitle>
            <ServiceDescription>{item.description}</ServiceDescription>
          </ServiceTextContainer>
        </ServiceContainer>
      ))}
    </>
  );
}

export default ServiceComponent;