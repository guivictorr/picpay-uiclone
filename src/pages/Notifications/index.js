import React from 'react';

import { Wrapper, HeaderTitle, HeaderConfig, Container, Header, HeaderConfigText, ContentText, Content } from './styles';

const Notifications = () => {
  return (
    <Wrapper>
        <Header>
          <HeaderTitle>Notificações</HeaderTitle>
          <HeaderConfig>
            <HeaderConfigText>Configurar</HeaderConfigText>
          </HeaderConfig>
        </Header>
        <Content>
          <ContentText>
            Nenhuma notificação por hoje!
          </ContentText>
        </Content>
    </Wrapper>
  );
}

export default Notifications;