import React from 'react';
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
  AddLabel
} from './styles'

import creditcard from '../../assets/images/credit-card.png'

const Wallet = () => {
  return (
    <Wrapper>
      <Header colors={['#52e78c','#1ab563']}>
        <HeaderContainer>
          <Title>Saldo PicPay</Title>
          <BalanceContainer>
            <Value>
              R$ <Bold>0,00</Bold>
            </Value>
            <EyeButton>
              <Feather name="eye" color="#fff" size={28}/>
            </EyeButton>
          </BalanceContainer>
          <Info>
            Seu saldo está rendendo 100% do CDI
          </Info>
          <Actions>
            <Action>
              <MaterialCommunityIcons color="#fff" size={20} name="cash"/>
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
        <Switch/>
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
    </Wrapper>
  );
}

export default Wallet;