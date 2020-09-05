import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #000;
  flex: 1;
`;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items:center;
  justify-content:space-between;
`

export const Input = styled.TextInput`
  background-color: #000;
  border: 2px solid gray;
  border-radius: 50px;
  width: 320px;
  padding: 2px 16px;
  color: white;
`

export const ServicesContainer = styled.View`
  margin: 0 15px;
`

export const ServicesHeader = styled.View`
  height: 30px;
  justify-content:flex-end;
`

export const Title = styled.Text`
  color: white;
  font-size: 15px;
`
