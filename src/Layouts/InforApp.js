/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontFamily} from '../assets/themes/themes';

const InforApp = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.avt} source={require('../assets/imgs/avt.jpg')} />
      <Text style={styles.text}>Tên : Nguyễn Việt Anh</Text>
      <Text style={styles.text}>Mã sv: PH35035</Text>
    </View>
  );
};

export default InforApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBlackHex,
    alignItems: 'center',
  },
  avt: {
    width: 100,
    height: 100,
    borderRadius: 24,
    marginTop: 100,
  },
  text: {
    color: colors.primaryWhiteHex,
    fontSize: 20,
    fontFamily: fontFamily.poppins_extralight,
    marginTop: 16,
  },
});
