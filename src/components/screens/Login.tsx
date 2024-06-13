import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';

type Props = {
  navigation: any;
};
const Login = ({navigation}: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async () => {
    const savedUser = await AsyncStorage.getItem('user')
    if (savedUser) {
      const { username: savedUserName, password: savedPassword } = JSON.parse(savedUser)
      if (username === savedUserName && password === savedPassword) {
      }
      else {
        Alert.alert('Error! Please enter valid username and password')
      }
    }
    else {
      Alert.alert('Error', 'User not found');
    }
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonStyle}>
          <Button  title="Login" onPress={handleLogin}  />
        </View>
        <View style={styles.buttonStyle}>
        <Button title="Signup" onPress={handleSignup} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#323030',
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent:'center',
  },
  buttonStyle: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default Login;
