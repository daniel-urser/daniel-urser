import React from 'react';
import Text from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ImageList from './components/AnimeList';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ImageList} />
        <Stack.Screen name="Page1" component={Page1} />
        
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="Page3" component={Page3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

