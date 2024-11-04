import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Layout from '../../components/Layout/Layout'
import { UserData } from '../../components/data/UserData'
import { TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useRoute, useNavigation } from '@react-navigation/native'

const Account = ({ navigation }) => {
  return (
    <Layout>
      <View style={styles.container}>
        <Image source={{ uri: UserData.profilePicture }} style={styles.image} />
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.name}>
            Hi <Text style={{ color: 'green' }}>{UserData.name} ✌️</Text>
          </Text>
          <Text>Email: {UserData.email}</Text>
          <Text>Contact: {UserData.contact}</Text>
        </View>
        <View style={styles.btnContainer}>
          <Text style={styles.heading}>Account Settings</Text>
          
          <TouchableOpacity
            onPress={() => navigation.navigate('profile', { id: UserData._id })}
            style={styles.btn}
          >
            <AntDesign style={styles.btnText} name='edit' />
            <Text style={styles.btnText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('myOrders', { id: UserData._id })}
            style={styles.btn}
          >
            <AntDesign style={styles.btnText} name='bars' />
            <Text style={styles.btnText}>My Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('notifications')}
            style={styles.btn}
          >
            <AntDesign style={styles.btnText} name='bells' />
            <Text style={styles.btnText}>Notification</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => navigation.navigate('adminPanel', { id: UserData._id })}
            style={styles.btn}
          >
            <AntDesign style={styles.btnText} name='windows' />
            <Text style={styles.btnText}>Admin Panel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain'
  },
  name: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 20
  },
  btnContainer: {
    padding: 10,
    paddingBottom: 30,
    backgroundColor: '#ffffff',
    margin: 10,
    marginVertical: 20,
    elevation: 5,
    borderRadius: 10
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgray'
  },
  btn: {
    alignItems: 'center',
    marginVertical: 10,
    padding: 5,
    flexDirection: 'row'
  },
  btnText: {
    fontSize: 15,
    marginRight: 10
  }
})

export default Account
