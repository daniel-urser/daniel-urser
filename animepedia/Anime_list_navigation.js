import React from 'react';
import { View, Image, TouchableOpacity,Text,StyleSheet } from 'react-native';

const ImageList = ({ navigation }) => {
  const handleImagePress = (imageIndex) => {
    // Navegar para a página correspondente ao índice da imagem clicada
    switch (imageIndex) {
      case 0:
        navigation.navigate('Page1');
        break;
      case 1:
        navigation.navigate('Page2');
        break;
      case 2:
        navigation.navigate('Page3');
        break;
      default:
        break;
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={() => handleImagePress(0)}>
        <Image
          source={require('../assets/Akira Toriyama - The World.jpeg')}
          style={{ borderRadius: 10, marginBottom: 10 ,width:320,height:90}}
        />
        <Text  style={styles.overlayText}>Dragon ball</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleImagePress(1)}>
        <Image
          source={require('../assets/jpeg(74) 1')}
          style={{ borderRadius: 10, marginBottom: 10,width:320,height:90 }}
        />
        <Text style={styles.overlayText}>furi kuri</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleImagePress(2)}>
        <Image
          source={require('../assets/Makima - chainsaw man.jpeg')}
          style={{ borderRadius: 10, marginBottom: 10,width:320,height:90 }}
        />
        <Text style={styles.overlayText}>chainsaw</Text>
      </TouchableOpacity>
    </View>
  );
}; 

const styles = StyleSheet.create({

 overlayText:{

position: 'relative',
    bottom: 30,
    color: 'white',
    fontSize: 18,

  }




})

export default ImageList;

