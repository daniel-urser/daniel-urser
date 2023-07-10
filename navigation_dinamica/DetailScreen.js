import React from 'react';
import { View, Text, Button } from 'react-native';

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Bem-vindo à tela de detalhes
      </Text>
      <Button
        title="Ir para a próxima tela"
        onPress={() => navigation.navigate('Contatos')}
      />
    </View>
  );
};

export default DetailsScreen;

