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
      <OptionLabel title="Minha conta"/>
        <Option title="Meu PicPay" subTitle="@guivic"/>
        <Option title="Meu número" subTitle="(**) *****-7013"/>
        <Option title="Meu E-mail" subTitle="g****************o@gmail.com"/>
        <Option title="Dados pessoas" subTitle="Nome, CPF, e data de nascimento"/>
        <Option title="Conta Bancária"/>
        <Option title="Taxas e limites"/>
        <Option title="Meus endereços"/>
        <Option title="Meus favoritos"/>
        <Option title="Validar Indentidade" subTitle="Verificado"/>
        <Option title="Upgrade de conta" subTitle="Aprovado"/>
        <Option title="Atualizar cadastro"/>
      <OptionLabel title="Promoções"/>
        <Option title="Usar código promocional"/>
      <OptionLabel title="Minhas assinaturas"/>
        <Option title="Ver Minhas Assinaturas"/>
      <OptionLabel title="Para o meu negócio"/>
        <Option title="PicPay PRO"/>
        <Option title="Para estabelecimentos"/>
        <Option title="Venda por assinaturas"/>
      <OptionLabel title="Configurações"/>
        <Option title="Usar digital para pagar"/>
        <Option title="Alterar senha"/>
        <Option title="Privacidade"/>
        <Option title="Notificações"/>
        <Option title="Contas vinculadas"/>
      <OptionLabel title="Geral"/>
        <Option title="Precisa de ajuda?"/>
        <Option title="Sobre o PicPay"/>
        <Option title="Desativar minha conta"/>
      <OptionLabel/>
      <Option title="Sair"/>
      

    </Wrapper>
  );
}

export default Settings;