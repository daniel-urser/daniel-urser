import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10,backgroundColor:"blue"}}>
    <h1> cadastro:</h1>
      <Text> nome: 
      <TextInput
        style={{height: 40,color:"white", backgroundColor:"blue"}}
        placeholder="   digite seu nome"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      /></Text>
       <Text> endereço: 
      <TextInput
         style={{height: 40,color:"white"}}
        placeholder="   digite seu nome"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      /></Text>
       <Text> e mail: 
      <TextInput
        style={{height: 40,color:"white"}}
        placeholder="   digite seu nome"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      /></Text>
      <Text style={{padding: 10, fontSize: 42,}}>
        {text
          .split(' ')
        
          .join(' ')}
      </Text>
    </View>
  );
};

export default PizzaTranslator;
