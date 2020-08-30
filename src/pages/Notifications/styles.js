import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background-color: #000;
  flex:1;
`

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items:center;
  justify-content:space-between;
`

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 20px;
`

export const HeaderConfig = styled.TouchableOpacity`
`

export const HeaderConfigText = styled.Text`
  color: #10c86e;
  font-size: 13px;
`
export const Content = styled.View`
  flex:1;
  justify-content:center;
  align-items:center;
`

export const ContentText = styled.Text`
  color: gray;
  align-self:center;
  font-size: 18px;
`
