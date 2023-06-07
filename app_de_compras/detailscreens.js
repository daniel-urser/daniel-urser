import React from 'react';
import { View, Text, Button,Image,StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
       <View style={styles.container}>
      

<Image source={require('../Captura de tela de 2023-06-07 08-24-14.png')}

style={styles.img}

 />



      
      <Button
        title=" confira nossas promoçoes"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};  

const styles = StyleSheet.create({
 
img:{width:370,height:300}
    
  
});

export default HomeScreen;

