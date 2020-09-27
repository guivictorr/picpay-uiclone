import React from "react";
import { FlatList } from "react-native";

import { OptionsLabelContainer, OptionsLabel } from "./styles";

import Option from "../Option";

const options = [
  {
    category: "myaccount",
    title: "Meu PicPay",
    subTitle: "@guivic",
  },
  {
    category: "myaccount",
    title: "Meu número",
    subTitle: "(**)*****-7013",
  },
  {
    category: "myaccount",
    title: "Meu E-mail",
    subTitle: "g****************o@gmail.com",
  },
  {
    category: "myaccount",
    title: "Dados pessoais",
    subTitle: "Nome, CPF, e data de nascimento",
  },
  {
    category: "myaccount",
    title: "Conta Bancária",
  },
  {
    category: "myaccount",
    title: "Taxas e limites",
  },
  {
    category: "myaccount",
    title: "Meus endereços",
  },
  {
    category: "myaccount",
    title: "Meus favoritos",
  },
  {
    category: "myaccount",
    title: "Validar Indentidade",
    subTitle: "Verificado",
    color: "#10c86e",
  },
  {
    category: "myaccount",
    title: "Upgrade de conta",
    subTitle: "Aprovado",
    color: "#10c86e",
  },
  {
    category: "myaccount",
    title: "Atualizar cadastro",
  },
  {
    category: "promotions",
    title: "Usar código promocional",
  },
  {
    category: "mysignatures",
    title: "Ver minhas assinaturas",
  },
  {
    category: "mybusiness",
    title: "PicPay PRO",
  },
  {
    category: "mybusiness",
    title: "Para estabelecimentos",
  },
  {
    category: "mybusiness",
    title: "Venda por assinaturas",
  },
  {
    category: "config",
    title: "Usar digital para pagar",
  },
  {
    category: "config",
    title: "Alterar senha",
  },
  {
    category: "config",
    title: "Privacidade",
  },
  {
    category: "config",
    title: "Notificações",
  },
  {
    category: "config",
    title: "Contas vinculadas",
  },
  {
    category: "general",
    title: "Precisa de ajuda?",
  },
  {
    category: "general",
    title: "Sobre o PicPay",
  },
  {
    category: "general",
    title: "Desativar minha conta",
  },
  {
    category: "exit",
    title: "Sair",
  },
];

const OptionLabel = ({ title, category }) => {
  function renderOption({ item }) {
    if (item.category === category) {
      return (
        <Option
          title={item.title}
          subTitle={item.subTitle}
          color={item.color}
          key={item.title}
        />
      );
    }
  }

  return (
    <OptionsLabelContainer>
      <OptionsLabel>{title}</OptionsLabel>
      <FlatList
        data={options}
        keyExtractor={(item) => item.title}
        renderItem={renderOption}
        showsVerticalScrollIndicator={false}
      />
    </OptionsLabelContainer>
  );
};

export default OptionLabel;
