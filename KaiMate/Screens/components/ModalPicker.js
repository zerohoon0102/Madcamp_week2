import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const options = ['한식', '중식', '일식', '양식', '야식/분식'];
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalPicker = props => {
  const onPressItem = option => {
    props.changeModalVisibility(false);
    props.setData(option);
  };

  const option = OPTIONS.map((option, index) => {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.option}
          key={index}
          onPress={() => onPressItem(item)}>
          <Text>{item}</Text>
          {/* <View style={{width: WIDTH - 20, height: HEIGHT / 2}}>
            <ScrollView>{options}</ScrollView>
          </View> */}
        </TouchableOpacity>
      </SafeAreaView>
    );
  });
};

const styles = StyleSheet.create({
  container: {},
  options: {
    alignItems: 'flex-start',
  },
});
