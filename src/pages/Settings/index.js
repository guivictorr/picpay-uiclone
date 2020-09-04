import React from 'react';

import Option from '../../components/Option'
import OptionLabel from '../../components/OptionLabel'

import { 
  Wrapper, 
  Header, 
  HelpText, 
  HelpButton, 
  SeeProfileText ,
  Img,
  UserName,
  RealUserName,
  SeeProfile,
} from './styles'


import avatar from '../../assets/images/avatar.png'

const categories = [
  {
    title: 'Minha Conta',
    category: 'myaccount',
  },
  {
    title: 'Promoções',
    category: 'promotions',
  },
  {
    title: 'Minhas assinaturas',
    category: 'mysignatures',
  },
  {
    title: 'Para o meu negócio',
    category: 'mybusiness',
  },
  {
    title: 'Configurações',
    category: 'config',
  },
  {
    title: 'Geral',
    category: 'general',
  },
  {
    category: 'exit',
  },
  
]

const Settings = () => {
  return (
    <Wrapper>
      <Header>
        <HelpButton>
          <HelpText>Ajuda</HelpText>
        </HelpButton>
        <Img source={avatar}/>
        <UserName>@guivic</UserName>
        <RealUserName>Guilherme Victor</RealUserName>
        <SeeProfile>
          <SeeProfileText>Ver meu perfil</SeeProfileText>
        </SeeProfile>
      </Header>
      {categories.map(item => <OptionLabel title={item.title} category={item.category}/>)}
    </Wrapper>
  );
}

export default Settings;