import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import BottomTab from './BottomTab';

const Routes = () => {
  return (
    <NavigationContainer>
      <BottomTab/>
    </NavigationContainer>
  );
}

export default Routes;