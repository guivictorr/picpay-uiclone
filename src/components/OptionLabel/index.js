import React from 'react';

import { OptionsLabelContainer, OptionsLabel } from './styles';

const OptionLabel = ({title}) => {
  return (
    <OptionsLabelContainer>
      <OptionsLabel>{title}</OptionsLabel>
    </OptionsLabelContainer>
  );
}

export default OptionLabel;