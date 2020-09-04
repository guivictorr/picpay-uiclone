import React from 'react';

import { OptionContainer,OptionText, OptionSubtitle, OptionTextContainer } from './styles';

const Option = ({ title, subTitle, color }) => {
  return (
    <OptionContainer>
      <OptionTextContainer>
        <OptionText title={title}>{title}</OptionText>
        {subTitle ? <OptionSubtitle textColor={color}>{subTitle}</OptionSubtitle> : null}
      </OptionTextContainer>
    </OptionContainer>
  );
}

export default Option;