import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import { CartData } from '../components/data/CartData'
import PriceTable from '../components/cart/PriceTable'
import Layout from '../components/Layout/Layout'
import CartItem from '../components/cart/CartItem'

const Cart = ({ navigation }) => {
  const [cartItems, setCartItems] = useState(CartData)

  return (
    <Layout>
      <Text style={styles.heading}>
        {cartItems?.length > 0
          ? `You Have ${cartItems?.length} Item Left In Your Cart`
          : 'OOPS Your Cart Is Empty !'}
      </Text>
      {cartItems?.length > 0 && (
        <>
          <ScrollView>
            {cartItems?.map(item => (
              <CartItem item={item} key={item._id} />
            ))}
          </ScrollView>

          <View>
            <PriceTable price={999} title={'Price'} />
            <PriceTable price={1} title={'Tax'} />
            <PriceTable price={1} title={'Shipping'} />
            <View style={styles.grandTotal}>
              <PriceTable title={'Grand Total'} price={1001} />
            </View>
            <TouchableOpacity
              style={styles.btnCheckout}
              onPress={() => navigation.navigate('checkout')}
            >
              <Text style={styles.btnCheckoutText}>CHECKOUT</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Layout> 
  )
}

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    color: 'green',
    marginTop: 10
  },
  grandTotal: {
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: '#ffffff',
    padding: 5,
    margin: 5,
    marginHorizontal: 20
  },
  btnCheckout: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#000000',
    width: '90%',
    marginHorizontal: 20,
    borderRadius: 20
  },
  btnCheckoutText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18
  }
})

export default Cart
