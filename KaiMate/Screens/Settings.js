import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function Settings({route, navigation}) {
  const {userId, userPassword, userNickname} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={{width: '90%', height: '90%', borderRadius: 20}}
          source={require('../image/userImage.png')}
        />
      </View>
      <View style={styles.settingContainer}>
        <Text>Nickname : {userNickname}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 3,
    marginVertical: 5,
    marginHorizontal: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  settingContainer: {
    flex: 4,
  },
});
