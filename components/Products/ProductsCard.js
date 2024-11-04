import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ProductsCard = ({ p }) => {

  const navigation = useNavigation()

  //More details btn
  const handleMoreButton = (id) => {
    navigation.navigate('productDetails', { _id:id })
    console.log(id);
  }

  //ADD TO CART
  const handleAddToCart = () => {
    alert('added to cart')
  }

  return (
    <View>
      <View style={styles.cards}>
        <Image 
          style={styles.cardImages}
          source={{ uri: p?.imageUrl }}
        />
        <Text style={styles.cardTitle}>{p?.name}</Text>
        <Text style={styles.carDes}>{p?.description.substring(0, 30)} ...more</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity 
            style={styles.btn}
            onPress={() => handleMoreButton(p._id)}
          >
            <Text style={styles.btnText}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCart}>
            <Text 
              style={styles.btnText}
              onPress={handleAddToCart}
            >ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cards: {
    borderWidth: 1,
    borderColor: 'lightgray',
    marginVertical: 5,
    marginHorizontal: 8,
    width: '40%',
    padding: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  cardImages: {
    height: 150,
    width: '100%',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  carDes: {
    fontSize: 10,
    textAlign: 'center',
  },
  btnContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#000000',
    height: 24,
    width: 80,
    borderRadius: 5,
    justifyContent: 'center',
  },
  btnCart: {
    backgroundColor: 'orange',
    height: 24,
    width: 80,
    borderRadius: 5,
    justifyContent: 'center',
  },
  btnText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
  },
})

export default ProductsCard
