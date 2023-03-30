import React, {useState} from 'react';
import {View, Switch, StyleSheet,Button,Text,Image} from 'react-native';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
    <Text style={styles.txt1}>atendimento a deficientes</Text>
    <Image source={require('./assets/Sem título.png')}style={styles.images} />
    
    
    
    <Text>ativar panic button</Text>
      <Switch
        trackColor={{false: '#767577', true: 'red'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Button title="chamar serviço"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'lightblue'
  },
  images:{border:"black", height:230, width:180},
  txt1:{color:"blue",fontSize:34 }
});

export default App;
