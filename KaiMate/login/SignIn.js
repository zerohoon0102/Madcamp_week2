import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function SignIn({navigation}) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>KaiMate</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="ID..."
          placeholderTextColor="#003f5c"
          onChangeText={text => setId(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          onChangeText={text => setPassword(text)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.signInUp}>
        <TouchableOpacity
          id="loginBtn"
          style={styles.loginBtn}
          onPress={() => {
            fetch('http://192.249.18.122:80/signIn', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                user_id: id,
                user_password: password,
              }),
            })
              .then(res => {
                if (res.status === 400) {
                  console.log('not correct');
                } else {
                  console.log(res);
                }
              })
              .catch(error => console.log('error', error));
          }}>
          <Text style={styles.loginText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          id="signUpBtn"
          style={styles.loginBtn}
          onPress={() => navigation.navigate('회원가입')}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
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

export default SignIn;
