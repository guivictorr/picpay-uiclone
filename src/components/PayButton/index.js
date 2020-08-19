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
          ? ['#fff', '#ccc']
          : ['#00fc6c', '#00ac4a']
        }
        start={[1, 0.2]}
        >
        <MaterialIcons 
          name="attach-money" 
          size={30} 
          color={focused ? '#000' : '#fff'}
        />
        <Label focused={focused}>Pagar</Label>
      </Button>
    </TouchableWithoutFeedback>
  );
}

export default PayButton;