import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function SignUp({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Sign Up</Text>
      <View style={styles.signInputView}>
        <Text style={styles.signInputText}>Nickname : </Text>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Enter Password"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password: text})}
          />
        </View>
      </View>
      <View style={styles.signInputView}>
        <Text style={styles.signInputText}>ID : </Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter ID"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({id: text})}
          />
        </View>
      </View>
      <View style={styles.signInputView}>
        <Text style={styles.signInputText}>PW : </Text>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Enter Password"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password: text})}
          />
        </View>
      </View>
      <View style={styles.signInputView}>
        <Text style={styles.signInputText}>Name : </Text>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Enter Name"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password: text})}
          />
        </View>
      </View>
      <View style={styles.signInputView}>
        <Text style={styles.signInputText}>Phone : </Text>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Enter Phone Number"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password: text})}
          />
        </View>
      </View>
      <View style={styles.signInUp}>
        <TouchableOpacity
          id="signUpBtn"
          style={styles.signUpBtn}
          onPress={() => navigation.goBack()}>
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
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
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
    marginRight: 100,
  },
  signInputText: {
    fontSize: 14,
    alignSelf: 'center',
  },
});

export default SignUp;
