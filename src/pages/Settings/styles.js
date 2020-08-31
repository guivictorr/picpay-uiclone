import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
  background-color: #000;
  flex: 1;
`;

export const Header = styled.View`
  height: 200px;
  background-color: #0f0f0f;
  align-items:center;
  flex-direction:column;
  padding: 12px;
`

export const HelpButton = styled.TouchableOpacity`
  align-self:flex-end;
`
export const  HelpText = styled.Text`
  color:#10c86e;
`

export const Img = styled.Image`
  width: 80px;
  height: 80px;
  margin: 15px;
`

export const UserName = styled.Text`
  color: #fff;
  font-size: 16px;
`

export const RealUserName = styled.Text`
  color: gray;
  font-size: 13px;
`

export const SeeProfile = styled.TouchableOpacity`
  
`

export const SeeProfileText = styled.Text`
  color:#10c86e;
  font-size: 12px;
`
