import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    
    <View style={styles.container}>
    <Text style={styles.texto}>selecione o serviço:</Text>
    
<Image style={styles.img}source={require('./medico.png')} />

      <Text style={styles.paragraph}>
        otorrino
      </Text>
      <Text style={styles.paragraph}>
        pediatra
      </Text>
      <Text style={styles.paragraph}>
        psicologo
      </Text>

       <Text style={styles.paragraph}>
        pneumologista
      </Text>
       <Text style={styles.paragraph}>
        fonoaudiologo
      </Text>
      <Text style={styles.paragraph}>
        dentista
      </Text>
       <Text style={styles.paragraph}>
        nutricionista
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  flexDirection:'column',
  
  },
  paragraph: {
    margin: 14,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img:{

height:30,
width:30,
marginLeft:150
  },

texto:{marginBottom:20,
fontWeight: 'bold',}


});

