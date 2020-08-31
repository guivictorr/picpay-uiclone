import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons'

import { Button, Label } from './styles';

const PayButton = ({focused}) => {
  return (
    <TouchableWithoutFeedback>
      <Button
        colors={
          focused 
          ? ['#005b27', '#00913e']
          : ['#00fc6c', '#00ac4a']
        }
        start={[0, 0.1]}
        >
        <MaterialIcons 
          name="attach-money" 
          size={30} 
          color='#fff'
        />
        <Label focused={focused}>Pagar</Label>
      </Button>
    </TouchableWithoutFeedback>
  );
}

export default PayButton;