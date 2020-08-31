import React from 'react';

import { OptionContainer,OptionText, OptionSubtitle, OptionTextContainer } from './styles';

const Option = ({ title, subTitle }) => {
  return (
    <OptionContainer>
      <OptionTextContainer>
        <OptionText>{title}</OptionText>
        <OptionSubtitle>{subTitle}</OptionSubtitle>
      </OptionTextContainer>
    </OptionContainer>
  );
}

export default Option;