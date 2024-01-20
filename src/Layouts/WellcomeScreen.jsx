/* eslint-disable prettier/prettier */
import {Image, StyleSheet, View, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../assets/themes/themes';

const {width} = Dimensions.get('window');

const WellcomeScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('LoginScreen'); // Sử dụng replace thay vì navigate để ngăn ngừa quay lại màn hình trước đó
    }, 3000);

    return () => clearTimeout(timer); // Hủy bỏ hẹn giờ khi component bị hủy
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../assets/imgs/logo.png')}
        resizeMode="contain"
      />
    </View>
  );
};

export default WellcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryBlackHex,
  },
  img: {
    width: width * 0.3,
    height: width * 0.3,
  },
});
