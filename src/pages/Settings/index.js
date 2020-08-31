import React from 'react';

import Option from '../../components/Option'

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
  OptionsLabelContainer,
  OptionsLabel
} from './styles'


import avatar from '../../assets/images/avatar.png'

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
      <OptionsLabelContainer>
        <OptionsLabel>Minha Conta</OptionsLabel>
      </OptionsLabelContainer>
      <Option title="Meu PicPay" subTitle="@guivic"/>
      <Option title="Meu número" subTitle="(**) *****-7013"/>
      <Option title="Meu E-mail" subTitle="(**) *****-7013"/>
    </Wrapper>
  );
}

export default Settings;