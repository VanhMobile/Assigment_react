/* eslint-disable prettier/prettier */

import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {
  colors,
  fontFamily,
  fontSize,
  spacing,
  boderRadius,
} from '../assets/themes/themes';

const EditText = ({
  leftIcon,
  styleEdt,
  rightIcon,
  paddingIcon,
  hint,
  ...props
}) => {
  return (
    <View style={[styles.container, styleEdt]}>
      <View>{leftIcon}</View>
      <TextInput
        style={[styles.TextInput, {paddingHorizontal: paddingIcon}]}
        placeholder={hint}
        {...props}
      />
      <View>{rightIcon}</View>
    </View>
  );
};

export default EditText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
  },

  TextInput: {
    fontSize: 18,
    color: colors.primaryWhiteHex,
    fontFamily: fontFamily.poppins_regular,
    flex: 1,
    paddingBottom: 0,
    paddingTop: 5,
  },
});
