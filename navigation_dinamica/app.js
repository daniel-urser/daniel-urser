import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailScreen';
import ContatosScreen from './screens/ContatosScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
         <Stack.Screen name="Contatos" component={ContatosScreen}       />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

