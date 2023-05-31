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
      <Card>
        <AssetExample />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  flexDirection:'row-reverse',
  
  },
  paragraph: {
    margin: 14,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img:{

height:30,
width:30

  }
});

