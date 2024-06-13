import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/components/screens/Login';
import SignupScreen from './src/components/screens/Signup';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './src/components/screens/Home';

const Stack = createNativeStackNavigator();



const App = () => {
  const [userToken, setUserToken] = useState<string | null>(null);

  useEffect(() => {
    async function getUserToken() {
      const savedUser = await AsyncStorage.getItem('user')
      if (savedUser) {
        const { username: savedUserName, password: savedPassword } = JSON.parse(savedUser)
        setUserToken(savedUserName)
      }
    }
    getUserToken();
  }, [userToken]);

  const AuthStack = () => (
    <Stack.Navigator  initialRouteName="Login" screenOptions={{headerShown:false}} >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
  
  const HomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={Home} />
      </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      {userToken ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default App;