import React, { useState } from 'react';
import { View, Text, Button, StyleSheet,Image } from 'react-native';

const ProductPriceScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerProduct = 10; // Preço inicial do produto
  const totalPrice = pricePerProduct * quantity;

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
 
  return (
    <View style={styles.container}>

    <Image source={require('./assets/roupa.png')} />
      <Text style={styles.text}>Preço por produto: R${pricePerProduct}</Text>
      <Text style={styles.text}>Quantidade: {quantity}</Text>
      <Text style={styles.text}>Preço total: R${totalPrice}</Text>

      <View style={styles.buttonContainer}>
        <Button title="+" onPress={incrementQuantity} />
        <Button title="-" onPress={decrementQuantity} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    

    
  },
});

export default ProductPriceScreen;

