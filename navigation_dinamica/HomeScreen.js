import React from 'react';
import { View, Text, Button,Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Bem-vindo ao amparo app
      </Text>
      <Image source={require("../assets/Captura de tela de 2023-06-26 14-21-03.png")}/>
      <Button
        title="Ir para os serviços"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;
