import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient'
export const Wrapper = styled.View`
  background-color: #000;
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height: 250px;
`

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items:center;
  justify-content:center;
`

export const Title = styled.Text`
 color:#fff;
 font-size: 16px;
 font-weight:bold;
`

export const BalanceContainer = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items:center;
`
export const Bold = styled.Text`
  font-weight: bold;
`
export const Value = styled.Text`
  color: #fff;
  font-size: 38px;
  font-weight: 200;
`
export const EyeButton = styled.TouchableOpacity`
  margin: 0 10px;
`

export const Info = styled.Text`
  color:#fff;
  font-size: 14px;
`

export const Actions = styled.View`
  flex-direction: row;
  align-items:center;
  margin-top: 40px;
`

export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items:center;
  justify-content:center;
  border: 1px solid rgba(255,255,255, 0.6);
  border-radius: 50px;
  padding:6px;
  width:150px;
  height: 40px;
  margin: 0 10px;
`
export const ActionLabel = styled.Text`
  color:#fff;
  margin-left: 5px;
`

export const UseBalance = styled.View`
  background-color: #1c1c1e;
  flex-direction: row;
  align-items: center;
  height: 60px;
  justify-content:space-between;
  padding: 0 16px;
`

export const UseBalanceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`

export const PaymentMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`

export const PaymentMethodsTitle = styled.Text`
  color: #868693;
  text-transform: uppercase;
`
export const Card = styled.View`
  background-color: #1e232a;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
`

export const CardBody = styled.View`
  flex-direction:row;
`

export const CardDetails = styled.View`
  flex: 1;
  margin-right: 20px;
`

export const CardTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`

export const CardInfo = styled.Text`
  color: rgba(255,255,255, 0.8);
  margin-top: 15px;
  font-size: 14px;
`

export const Img = styled.Image`
  width: 60px;
`
export const AddContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`
export const AddLabel = styled.Text`
  color: #0db060;
  font-size: 18px;
  font-weight:bold;
  margin-left: 15px;
`

export const UseTicket = styled.TouchableOpacity`
  flex-direction: row;
  justify-content:center;
  align-items:center;
  margin-top: 25px;
`

export const UseTicketLabel = styled.Text`
  color: #0db060;
  text-decoration:underline;
  margin-left: 5px;
`