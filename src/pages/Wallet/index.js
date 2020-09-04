import React, {useState} from 'react';
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons'
import {Switch} from 'react-native'

import { 
  Wrapper, 
  Header, 
  HeaderContainer, 
  Title, 
  BalanceContainer, 
  Value, 
  Bold, 
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  CardBody,
  AddContainer,
  AddLabel,
  UseTicket,
  UseTicketLabel
} from './styles'

import creditcard from '../../assets/images/credit-card.png'

const Wallet = () => {
  const [hideInfo, setHideInfo] = useState(true)
  const [useBalance, setUseBalance] = useState(true)

  function handleToggleVisibility(){
    setHideInfo(!hideInfo)
  }

  function handleUseBalance(){
    setUseBalance(!useBalance)
  }

  return (
    <Wrapper>
      <Header colors={
        useBalance 
        ? ['#52e78c','#1ab563'] 
        : ['#D3D3D3', '#868686']
      }>
        <HeaderContainer>
          <Title>Saldo PicPay</Title>
          <BalanceContainer>
            <Value>
              R$ <Bold>{hideInfo ? '-----' : '10.000,00'}</Bold>
            </Value>
            <EyeButton onPress={handleToggleVisibility}>
              <Feather name={hideInfo ? "eye-off" : "eye"} color="#fff" size={28}/>
            </EyeButton>
          </BalanceContainer>
          <Info>
            Seu saldo está rendendo 100% do CDI
          </Info>
          <Actions>
            <Action>
              <MaterialCommunityIcons color="#fff" size={28} name="cash"/>
              <ActionLabel>Adicionar</ActionLabel>
            </Action>
            <Action>
              <FontAwesome color="#fff" size={20} name="bank"/>
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>
      <UseBalance>
        <UseBalanceTitle>
          Usar saldo ao pagar
        </UseBalanceTitle>
        <Switch 
          value={useBalance} 
          onValueChange={handleUseBalance}
          trackColor={
            {
              true: '#52e78c', 
              false: '#d3d3d3'
            }
          }
          thumbColor={'#fff'}
        />
      </UseBalance>
      <PaymentMethods>
        <PaymentMethodsTitle>
          Formas de pagamentos
        </PaymentMethodsTitle>
        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>
                Cadastre seu cartão de crédito
              </CardTitle>
              <CardInfo>
                Cadastre seu cartão de crédito para fazer pagamento mesmo quando não tiver saldo no seu PicPay
              </CardInfo>
            </CardDetails>
            <Img resizeMode="contain" source={creditcard}/> 
          </CardBody>
          <AddContainer>
            <AntDesign name="pluscircleo" size={30} color="#0db060"/>
            <AddLabel>Adicionar cartão de crédito</AddLabel>
          </AddContainer>
        </Card>
      </PaymentMethods>
      <UseTicket>
        <MaterialCommunityIcons name="ticket-outline" size={20} color="#1ab563"/>
        <UseTicketLabel>Usar código promocional</UseTicketLabel>
      </UseTicket>
    </Wrapper>
  );
}

export default Wallet;