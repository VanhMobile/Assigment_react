/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  colors,
  fontFamily,
  fontSize,
  boderRadius,
  spacing,
} from '../assets/themes/themes';

const Button = ({
  title,
  colorTitle,
  leftIcon,
  rightIcon,
  onPress,
  opacity,
  background,
  styleButton,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: background}, {styleButton}]}
      onPress={onPress}
      activeOpacity={opacity}>
      {leftIcon}
      <Text style={[styles.title, {color: colorTitle}]}>{title}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: spacing.space_16,
    paddingEnd: spacing.space_16,
    height: 50,
    marginTop: spacing.space_24,
    marginStart: spacing.space_24,
    marginEnd: spacing.space_24,
    borderRadius: boderRadius.radius_8,
    justifyContent: 'center',
    paddingBottom: 0,
  },
  title: {
    fontFamily: fontFamily.poppins_semibold,
    fontSize: fontSize.size_14,
    flex: 1,
    textAlign: 'center',
  },
});
