import React from 'react';

import { OptionContainer,OptionText, OptionSubtitle, OptionTextContainer } from './styles';

const Option = ({ title, subTitle }) => {
  return (
    <OptionContainer>
      <OptionTextContainer>
        <OptionText>{title}</OptionText>
        {subTitle ? <OptionSubtitle>{subTitle}</OptionSubtitle> : null}
      </OptionTextContainer>
    </OptionContainer>
  );
}

export default Option;