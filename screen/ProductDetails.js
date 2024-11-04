import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { ProductsData } from '../components/data/ProductsData'
import { TouchableOpacity } from 'react-native'
import Layout from '../components/Layout/Layout'
import * as productServices from "../src/services/productServices";

const ProductDetails = ({ route }) => {
  const [pDetails, setPDetails] = useState({})
  const [qty, setQty] = useState(1)

  const fetchProductFromServer = useCallback(async () => {
    try {
      const fetchData = await productServices.getDetailsProduct(params?._id);
      setPDetails(fetchData.product);
      console.log(fetchData.product);
    } catch (err) {
      console.error(err);
      setError("Có lỗi xảy ra khi lấy sản phẩma.");
    }
  }, []);

  //get product details
  useEffect(() => {
    //find product details
    fetchProductFromServer();
  }, [params?._id])

  //Handle function for + 
  const handleAddQty = () => {
    if (qty === 10) return alert("You can't add more than 10 quantities")
    setQty((prev) => prev + 1)
  }

  //Handle function for - 
  const handleRemoveQty = () => {
    if (qty <= 1) return
    setQty((prev) => prev - 1)
  }

  const { params } = route
  return (
    <Layout>
      <Image
        source={{ uri: pDetails?.images?.[0]?.url || 'a' }}
        style={styles.image}
      />

      <View style={styles.container}>
        <Text style={styles.title}>{pDetails?.name}</Text>
        <Text style={styles.title}>Price: {pDetails?.price} $</Text>
        <Text style={styles.desc}>Price: {pDetails?.description}</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btnCart}
            onPress={() => alert(`${qty} items added to cart`)}
            disabled={pDetails?.quantity <= 0}
          >
            <Text style={styles.btnCartText}>
              {
                pDetails?.quantity > 0 ? "ADD TO CART" : "OUT OF STOCK"
              }
            </Text>
          </TouchableOpacity>

          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btnQty}
              onPress={handleRemoveQty}
            >
              <Text style={styles.btnQtyText}>-</Text>
            </TouchableOpacity>
            <Text>{qty}</Text>
            <TouchableOpacity
              style={styles.btnQty}
              onPress={handleAddQty}
            >
              <Text style={styles.btnQtyText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 450,
    width: '100%'
  },
  container: {
    marginVertical: 15,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold', // New Add 
    textAlign: 'left',
  },
  desc: {
    fontSize: 12,
    textTransform: 'capitalize',
    textAlign: 'justify',
    marginVertical: 12,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  btnCart: {
    width: 180,
    backgroundColor: '#000000',
    // marginVertical: 10,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
  },
  btnCartText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  btnQty: {
    backgroundColor: 'lightgray',
    width: 40,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  btnQtyText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default ProductDetails
