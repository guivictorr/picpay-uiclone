import styled from 'styled-components/native';

export const OptionContainer = styled.TouchableOpacity`
  background-color: #000;
  border-color: #0f0f0f;
  border-bottom-width: 0.5px;
  border-top-width: 0.5px;
  height: 60px;
`;

export const OptionTextContainer = styled.View`
  margin: 10px 15px;
  flex-direction:column;
  flex:1;
  align-items:flex-start;
  justify-content:center;
`

export const OptionText = styled.Text`
  font-weight:bold;
  color: ${({title}) => title === 'Sair' ? '#ff3322' : '#fff'};
`

export const OptionSubtitle = styled.Text`
  font-size: 13px;
  color: ${({textColor}) => textColor ? textColor : 'gray'};
`
