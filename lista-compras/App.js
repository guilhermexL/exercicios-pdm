import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppProvider } from './context/AppContext';

import DispensaScreen from './screens/DispensaScreen';
import ListaScreen from './screens/ListaScreen';
import CompraScreen from './screens/CompraScreen';
import CompradosScreen from './screens/CompradosScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Dispensa" component={DispensaScreen} />
          <Tab.Screen name="Lista" component={ListaScreen} />
          <Tab.Screen name="Compra" component={CompraScreen} />
          <Tab.Screen name="Comprados" component={CompradosScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
