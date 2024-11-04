import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

//Điều hướng giữa các màn hình trong App
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import store from './redux/store'

import Home from './screen/Home'
import About from './screen/About'
import ProductDetails from './screen/ProductDetails'
import Cart from './screen/Cart'
import Checkout from './screen/Checkout'
import Payment from './screen/Payment'
import Login from './screen/auth/Login'
import Register from './screen/auth/Register'
import Account from './screen/Account/Account'
import Notification from './screen/Account/Notification'
import Profile from './screen/Account/Profile'
import MyOrders from './screen/Account/MyOrders'
import Dashboard from './screen/Admin/Dashboard'

const Stack = createNativeStackNavigator()

export default function App () {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='login'>
          <Stack.Screen
            name='home'
            component={Home}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen name='productDetails' component={ProductDetails} />
          <Stack.Screen name='checkout' component={Checkout} />
          <Stack.Screen name='myOrders' component={MyOrders} />
          <Stack.Screen name='profile' component={Profile} />
          <Stack.Screen name='notification' component={Notification} />
          <Stack.Screen name='adminPanel' component={Dashboard} />

          <Stack.Screen
            name='login'
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='register'
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='payment' component={Payment} />
          <Stack.Screen name='account' component={Account} />
          <Stack.Screen name='cart' component={Cart} />
          <Stack.Screen name='mobile' component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })
