import  React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet,Text,View,Button} from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function TelaHome({navigation}){

  return(
 <View style={{flex:1,alignItens:"center",justifyContent:"center"}}>
  <Text>tela  home</Text>
  <Text>tela  home</Text>
  <Button title="ir para canal"
  onPress={()=>navigation.navigate('Canal')}
  />
 
  
  </View>);
}


function TelaCanal({navigation}){

  return(
 <View style={{flex:1,alignItens:"center",justifyContent:"center"}}>
  <Text>tela canal</Text>
  <Text>youtube.com</Text>
  <Button title="ir para home"
  onPress={()=>navigation.navigate('Home')}
  />
   <Button title="voltar"
  onPress={()=>navigation.goBack()}
  />
  </View>);
}


const Pilha=createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
   <Pilha.Navigator>

<Pilha.Screen 
name={'Home'} 
component={TelaHome}
options={{title:'tela  inicial'}}
/>

<Pilha.Screen 
name={'Canal'} 
component={TelaCanal}
options={{title:'canal'}}
/>



   </Pilha.Navigator>

    </NavigationContainer>
  );
};

export default App;
