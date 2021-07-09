import React from 'react';

import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class App extends React.Component {
  state = {
    id: '',
    password: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>KaiMate</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="ID..."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({id: text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password: text})}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.signInUp}>
          <TouchableOpacity id="loginBtn" style={styles.loginBtn}>
            <Text style={styles.loginText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity id="signUpBtn" style={styles.loginBtn}>
            <Text style={styles.loginText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC300',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  forgot: {
    color: 'black',
    fontSize: 11,
  },
  loginBtn: {
    width: '20%',
    backgroundColor: '#fb5b5a',
    borderRadius: 15,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 10,
  },
  loginText: {
    color: 'black',
  },
  signInUp: {
    flexDirection: 'row',
  },
});
