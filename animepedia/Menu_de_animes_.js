import React from 'react';
import { View, Image, StyleSheet,Text,ScrollView,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Card from './Card';

const MyComponent = () => {
  return ( <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
    <TouchableOpacity>
      <Image
        source={require('./assets/Canti - FLCL.jpeg')}
        style={styles.roundedImage}

      />
       <Text style={styles.overlayText}>FLCL</Text>
  </TouchableOpacity>

  <TouchableOpacity>
<Image
        source={require('./assets/Makima & Denji (Chainsaw Man).jpeg')}
        style={styles.roundedImage}
      />
       <Text style={styles.overlayText}>Chainsaw Man</Text>
       </TouchableOpacity>
<TouchableOpacity onPress={Card}>


<Image
        source={require('./assets/Akira Toriyama - The World.jpeg')}
        style={styles.roundedImage}
       
      />
       <Text style={styles.overlayText}>Dragon ball</Text>
       
</TouchableOpacity>





  
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundedImage: {
    width: 380,
    height: 200,
    borderRadius: 100,
  },
  overlayText:{

position: 'relative',
    bottom: 30,
    color: 'white',
    fontSize: 18,

  }
});

export default MyComponent;

