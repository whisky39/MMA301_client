import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Layout from '../components/Layout/Layout'

const Checkout = ({ navigation }) => {
  const handleCOD = () => {
    alert('Your Order Has Been Placed Successfully !')
  }

  const handleOnline = () => {
    alert('Your Redirecting to payment gateway')
    navigation.navigate('payment')
  }

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.heading}>Payment Options</Text>
        <Text style={styles.price}>Total Amount: 101$</Text>
        <View style={styles.paymentCard}>
          <Text style={styles.paymentHeading}>Select You Payment Mode</Text>
          <TouchableOpacity style={styles.paymentBtn} onPress={handleCOD}>
            <Text style={styles.paymentBtnText}>Cash On Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentBtn} onPress={handleOnline}>
            <Text style={styles.paymentBtnText}>
              Online (CARD | DEBIT CARD)
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '90%'
  },
  heading: {
    fontSize: 30,
    fontWeight: '500',
    marginVertical: 10
  },
  price: {
    fontSize: 20,
    marginBottom: 10,
    color: 'gray'
  },
  paymentCard: {
    backgroundColor: '#ffffff',
    width: '90%',
    borderRadius: 10,
    padding: 30,
    marginVertical: 10
  },
  paymentHeading: {
    color: 'gray',
    marginBottom: 10
  },
  paymentBtn: {
    backgroundColor: '#000000',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: 10
  },
  paymentBtnText: {
    color: '#ffffff',
    textAlign: 'center'
  }
})

export default Checkout
