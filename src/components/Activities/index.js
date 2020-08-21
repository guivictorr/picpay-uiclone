import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import { 
  Container, 
  Header, 
  Title,
  Card,
  CardHeader,
  Description,
  Bold,
  Avatar,
  CardBody,
  Username,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Options,
  OptionLabel,
} from './styles';

import avatar from '../../assets/images/avatar.png'

const Activities = () => {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar}/>
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@guilhermevictor</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <Username>
            Guilherme Victor
          </Username>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 100,00</Value>
            <Divider/>

            <Feather name="lock" color="#fff" size={14}/>
            <Date>há 2 anos</Date>
          </Details>

          <Actions>
            <Options>
              <MaterialCommunityIcons name="comment-outline" size={14} color="#fff"/>
              <OptionLabel>0</OptionLabel>
            </Options>
            <Options>
              <AntDesign name="hearto" size={14} color="#fff"/>
              <OptionLabel>0</OptionLabel>
            </Options>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}

export default Activities;