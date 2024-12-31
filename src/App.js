import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './navigations/Stack';

export default function App() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}
