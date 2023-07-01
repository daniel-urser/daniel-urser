////////////////////////////
//parte 1 

///////////////////////
import React from 'react';
import Text from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ImageList from './components/AnimeList';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';
import Page7 from './components/Page7';
import Page8 from './components/Page8';
import Page9 from './components/Page9';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Serviços medicos" component={ImageList} />
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="Page3" component={Page3} />
        <Stack.Screen name="Page4" component={Page4} />
        <Stack.Screen name="Page5" component={Page5} />
        <Stack.Screen name="Page6" component={Page6} />
        <Stack.Screen name="Page7" component={Page7} />
        <Stack.Screen name="Page8" component={Page8} />
        <Stack.Screen name="Page9" component={Page9} />






      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
//////////////////////////////////
//parte 2- navegação
////////////////////// 
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


      case 3:
        navigation.navigate('Page4');
        break;
         case 5:
        navigation.navigate('Page6');
        break;
         case 7:
        navigation.navigate('Page8');
        break;
         case 8:
        navigation.navigate('Page9');
        break;
         







      default:






        break;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleImagePress(0)}>
        <Image
          source={require('../assets/respiracao.png')}
          style={{ borderRadius: 10,  width:120,height:100,borderRadius:100}}
        />
        <Text  style={styles.overlayText}>Pneumologista</Text>
      </TouchableOpacity>
       <TouchableOpacity onPress={() => handleImagePress(0)}>
     <Image
          source={require('../assets/respiracao.png')}
          style={{ borderRadius: 10,  width:120,height:100,borderRadius:100}}
        />
        <Text  style={styles.overlayText}>Pneumologista</Text>
        </TouchableOpacity>
               <TouchableOpacity onPress={() => handleImagePress(1)}>

        <Image
          source={require('../assets/cotonete.png')}
          style={{ borderRadius: 10, marginBottom: 10 ,width:120,height:100,borderRadius:100}}
        />
        <Text  style={styles.overlayText}>Pneumologista</Text>
                </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePress(2)}>
   <Image
          source={require('../assets/sistema-respiratorio.png')}
          style={{ borderRadius: 10, marginBottom: 10 ,width:120,height:100,borderRadius:100}}
        />
        <Text  style={styles.overlayText}>Pneumologista</Text>
        </TouchableOpacity>
         <TouchableOpacity onPress={() => handleImagePress(3)}>
   <Image
          source={require('../assets/sistema-respiratorio.png')}
          style={{ borderRadius: 10, marginBottom: 10 ,width:120,height:100,borderRadius:100}}
        />
        <Text  style={styles.overlayText}>Pneumologista</Text>
        </TouchableOpacity>
         <TouchableOpacity onPress={() => handleImagePress(4)}>
   <Image
          source={require('../assets/sistema-respiratorio.png')}
          style={{ borderRadius: 10, marginBottom: 10 ,width:120,height:100,borderRadius:100}}
        />
        <Text  style={styles.overlayText}>Pneumologista</Text>
        </TouchableOpacity>
         <TouchableOpacity onPress={() => handleImagePress(5)}>
   <Image
          source={require('../assets/doctor(1).png')}
          style={{ borderRadius: 10, marginBottom: 10 ,width:120,height:100,borderRadius:100}}
        />
        <Text  style={styles.overlayText}>Pneumologista</Text>
        </TouchableOpacity>
         <TouchableOpacity onPress={() => handleImagePress(6)}>
   <Image
          source={require('../assets/doctor.png')}
          style={{ borderRadius: 10, marginBottom: 10 ,width:120,height:100,borderRadius:100}}
        />
        <Text  style={styles.overlayText}>Pneumologista</Text>
        </TouchableOpacity>
         <TouchableOpacity onPress={() => handleImagePress(7)}>
   <Image
          source={require('../assets/doctor-visit.png')}
          style={{ borderRadius: 10, marginBottom: 10 ,width:120,height:100,borderRadius:100}}
        />
        <Text  style={styles.overlayText}>Pneumologista</Text>
        </TouchableOpacity>
    </View>
  );
}; 

const styles = StyleSheet.create({
container:{
flex:1,
flexDirection:"row",
flexWrap:"wrap"




},
 overlayText:{

position: 'relative',
    bottom: 30,
    color: 'white',
    fontSize: 18,

  }




})

export default ImageList;



/////////////////////////////
//pagina um
/////////////////////////////

import React from 'react';
import{Image,Text,View,StyleSheet,ScrollView,Button} from 'react-native'; 

const Page1=()=>{
  return(<ScrollView>
<View style={styles.container}>
<Image source={require("../assets/medico.jpg")}
style={styles.roundedImage}
/>
<Text style={styles.txt}>o Pneumologista É o medico responsável por diagnosticar as
patologias referentes ao pulmão bem como as principais causas das mesmas.

</Text>
<Text style={styles.txt}>
clique abaixo para agendar:

</Text>
<Button title={"agendar"}></Button>
</View>
</ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundedImage: {
    width: 280,
    height: 300,
    borderRadius: 100,
  },
  overlayText:{

position: 'relative',
    bottom: 30,
    color: 'black',
    fontSize: 18,

  },
  txt:{fontSize:20}
}




);


export default Page1; 



 ///pagina 2 
////


import React from 'react';
import{Image,Text,View,StyleSheet,ScrollView,Button} from 'react-native'; 

const Page2=()=>{
  return(<ScrollView>
<View style={styles.container}>
<Image source={require("../assets/medico.jpg")}
style={styles.roundedImage}
/>
<Text style={styles.txt}>o infectologista é o medico
responsável pelo diagnostico de infecçoes infecto-contagiosas 

</Text>
<Text style={styles.txt}>
clique abaixo para agendar:

</Text>
<Button title={"agendar"}></Button>
</View>
</ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundedImage: {
    width: 280,
    height: 300,
    borderRadius: 100,
  },
  overlayText:{

position: 'relative',
    bottom: 30,
    color: 'black',
    fontSize: 18,

  },
  txt:{fontSize:20}
}




);


export default Page2;

//pagina 3

import React from 'react';
import{Image,Text,View,StyleSheet} from 'react-native'; 

const Page3=()=>{
  return(
<View style={styles.container}>
<Image source={require("../assets/Makima - chainsaw man.jpeg")}
style={styles.roundedImage}

/>
<Text>é o  que estuda  </Text>

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
export default Page3;
