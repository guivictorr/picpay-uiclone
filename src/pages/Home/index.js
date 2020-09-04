import React from 'react';
import { StatusBar } from 'react-native'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import { 
  Wrapper, 
  Container, 
  Header, 
  BalanceContainer, 
  Balance, 
  BalanceTitle,
} from './styles'

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Banner from '../../components/Banner';
import Tips from '../../components/Tips';

const Home = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000"/>
      <Wrapper>
        <Container>
          <Header>
            <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e"/>

            <BalanceContainer>
              <BalanceTitle>Meu Saldo</BalanceTitle>
              <Balance>R$ 10.000,00</Balance>
            </BalanceContainer>
            <AntDesign name="gift" size={30} color="#10c86e"/>
          </Header>

          <Suggestions/>
          <Activities/>
          <Tips/>
          <Banner/>
        </Container>
      </Wrapper>
    </>
  );
}

export default Home;