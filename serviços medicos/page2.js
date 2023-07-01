import React from 'react';
import{Image,Text,View,StyleSheet} from 'react-native'; 

const Page2=()=>{
  return(
<View style={styles.container}>
<Image source={require("../assets/jpeg(74) 1")}
style={styles.roundedImage}
/>
<Text>furi kuri é muito massa!</Text>

</View>
  )
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundedImage: {
    width: 380,
    height: 400,
    borderRadius: 100,
  },
  overlayText:{

position: 'relative',
    bottom: 30,
    color: 'white',
    fontSize: 18,

  }
});








export default Page2;
