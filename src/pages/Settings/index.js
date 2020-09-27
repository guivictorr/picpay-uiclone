import React from "react";
import { FlatList } from "react-native";

import OptionLabel from "../../components/OptionLabel";

import {
  Wrapper,
  Header,
  HelpText,
  HelpButton,
  SeeProfileText,
  Img,
  UserName,
  RealUserName,
  SeeProfile,
} from "./styles";

import avatar from "../../assets/images/avatar.png";

const categories = [
  {
    title: "Minha Conta",
    category: "myaccount",
  },
  {
    title: "Promoções",
    category: "promotions",
  },
  {
    title: "Minhas assinaturas",
    category: "mysignatures",
  },
  {
    title: "Para o meu negócio",
    category: "mybusiness",
  },
  {
    title: "Configurações",
    category: "config",
  },
  {
    title: "Geral",
    category: "general",
  },
  {
    category: "exit",
  },
];

const Settings = () => {
  function renderItem({ item }) {
    return (
      <OptionLabel
        title={item.title}
        category={item.category}
        key={item.category}
      />
    );
  }

  return (
    <Wrapper>
      <Header>
        <HelpButton>
          <HelpText>Ajuda</HelpText>
        </HelpButton>
        <Img source={avatar} />
        <UserName>@guivic</UserName>
        <RealUserName>Guilherme Victor</RealUserName>
        <SeeProfile>
          <SeeProfileText>Ver meu perfil</SeeProfileText>
        </SeeProfile>
      </Header>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.category}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Wrapper>
  );
};

export default Settings;
