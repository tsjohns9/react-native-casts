import React, { useState, useContext } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up For Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setEmail}
        value={email}
      />
      <Input
        label="Password"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setPassword}
        value={password}
      />
      {!!state.errorMessage && (
        <Spacer>
          <Text style={styles.error}>{state.errorMessage}</Text>
        </Spacer>
      )}
      <Spacer>
        <Button
          title="Sign Up"
          onPress={() => {
            signup(email, password);
            // props.navigation.navigate('SigninScreen');
          }}
        />
        <TouchableOpacity
          title="Sign Up"
          onPress={() => {
            props.navigation.navigate('SigninScreen');
          }}
        >
          <Spacer>
            <Text style={styles.signin}>Already have an account? Sign in instead</Text>
          </Spacer>
        </TouchableOpacity>
      </Spacer>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

export default SignupScreen;

const styles = StyleSheet.create({
  signin: {
    color: 'blue',
    textAlign: 'center',
  },
  error: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});
