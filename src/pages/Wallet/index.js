import React from 'react';
import { Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'

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
} from './styles'

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
    </Wrapper>
  );
}

export default Wallet;