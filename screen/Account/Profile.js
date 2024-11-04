import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable
} from 'react-native'
import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { UserData } from '../../components/data/UserData'
import InputBox from '../../components/Form/InputBox'
import { TouchableOpacity } from 'react-native'

const Profile = ({ navigation }) => {
  const [email, setEmail] = useState(UserData.email)

  const [profilePicture, setProfilePicture] = useState(UserData.profilePicture)

  const [password, setPassword] = useState(UserData.password)
  const [name, setName] = useState(UserData.name)
  const [address, setAddress] = useState(UserData.address)
  const [city, setCity] = useState(UserData.city)
  const [contact, setContact] = useState(UserData.contact)

  const handleUpdate = () => {
    if (!email || !password || !name || !address || !city || !contact) {
      return alert('Please provide all fields !')
    }
    alert('Profile Update Successfully')
    navigation.navigate('account')
  }

  return (
    <Layout>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image 
              style={styles.image} 
              source={{ uri: profilePicture }} />
            <Pressable onPress={() => alert('Profile dailogbox')}>
              <Text style={{ color: 'red' }}>Update your profile picture</Text>
            </Pressable>
          </View>
          
          {/* Allow user update they profile */}
          <InputBox
            value={name}
            setValue={setName}
            placeholder={'Enter Your Name'}
            autoComplete={'name'}
          />
          <InputBox
            value={email}
            setValue={setEmail}
            placeholder={'Enter Your Email'}
            autoComplete={'email'}
          />
          
          <InputBox
            value={password}
            setValue={setPassword}
            placeholder={'Enter Your Password'}
            autoComplete={'password'}
            secureTextEntry={true}
          />
          <InputBox
            value={address}
            setValue={setAddress}
            placeholder={'Enter Your Address'}
            autoComplete={'address-line1'}
          />
          <InputBox
            value={city}
            setValue={setCity}
            placeholder={'Enter Your City'}
            autoComplete={'country'}
          />
          <InputBox
            value={contact}
            setValue={setContact}
            placeholder={'Enter Your Contact'}
            autoComplete={'tel'}
          />
          
          {/* Update Profile Button */}
          <TouchableOpacity
            style={styles.btnUpdate}
            onPress={handleUpdate}
          >
            <Text style={styles.btnUpdateText}>Update Profile</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  image: {
    height: 100,
    width: '100%',
    resizeMode: 'contain'
  },
  btnUpdate: {
    backgroundColor: '#000000',
    height: 40,
    borderRadius: 20,
    marginHorizontal: 30,
    justifyContent: 'center',
    marginTop: 10
  },
  btnUpdateText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center'
  }
})

export default Profile
