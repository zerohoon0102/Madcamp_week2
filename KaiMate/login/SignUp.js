import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';

function SignUp({navigation}) {
  const [id, setId] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Sign Up</Text>
      <View style={styles.signInputView}>
        <Text style={styles.signInputText}>Nickname : </Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter Nickname"
            placeholderTextColor="#003F5C"
            onChangeText={text => setNickname(text)}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Icon style={styles.buttonText} name="arrow-forward-outline" />
        </TouchableOpacity>
      </View>
      <View style={styles.signInputView}>
        <Text style={styles.signInputText}>ID : </Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter ID"
            placeholderTextColor="#003F5C"
            onChangeText={text => setId(text)}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Icon style={styles.buttonText} name="arrow-forward-outline" />
        </TouchableOpacity>
      </View>
      <View style={styles.signInputView}>
        <Text style={styles.signInputText}>PW : </Text>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Enter Password"
            placeholderTextColor="#003F5C"
            onChangeText={text => setPassword(text)}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Icon style={styles.buttonText} name="arrow-forward-outline" />
        </TouchableOpacity>
      </View>
      <View style={styles.signInUp}>
        <TouchableOpacity
          id="signUpBtn"
          style={styles.signUpBtn}
          onPress={() => {
            fetch('http://192.249.18.122:80/signUp', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                user_id: id,
                user_nickname: nickname,
                user_password: password,
              }),
            })
              .then(res => console.log(res))
              .catch(error => console.log('error', error));
            navigation.goBack();
          }}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          id="signUpBtn"
          style={styles.signUpBtn}
          onPress={() => navigation.goBack()}>
          <Text style={styles.loginText}>Cancel</Text>
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
    color: '#0C579F',
    marginBottom: 40,
  },
  inputView: {
    width: '60%',
    backgroundColor: 'white',
    borderColor: '#0C579F',
    borderRadius: 25,
    height: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 20,
  },
  inputText: {
    height: 40,
    color: 'black',
    fontSize: 12,
  },
  forgot: {
    color: 'black',
    fontSize: 11,
  },
  signUpBtn: {
    width: '20%',
    backgroundColor: 'white',
    borderRadius: 15,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 10,
  },
  loginText: {
    color: '#0D69C1',
    fontWeight: '700',
  },
  signInUp: {
    flexDirection: 'row',
  },
  signInputView: {
    flexDirection: 'row',
    marginBottom: 15,
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  signInputText: {
    fontSize: 14,
    alignSelf: 'center',
  },
  button: {
    marginLeft: 10,
    backgroundColor: 'white',
    borderRadius: 25,
    width: 40,
    height: 40,
  },
  buttonText: {
    marginTop: 8,
    fontSize: 20,
    textAlign: 'center',
    color: '#0C579F',
    marginBottom: 10,
  },
});
export default SignUp;
