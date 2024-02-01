/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fontSize, spacing} from '../assets/themes/themes';

const ItemSetting = ({leftIcon, title, handlePress, rightIcon, ...props}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.itemContainer}>
        <View style={styles.leftIconContainer}>{leftIcon}</View>
        <Text style={styles.itemTitle}>{title}</Text>
        <View>{rightIcon}</View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemSetting;

const styles = StyleSheet.create({
  itemTitle: {
    color: colors.primaryWhiteHex,
    flex: 1,
    fontSize: fontSize.size_18,
    marginLeft: spacing.space_16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.space_24,
    marginTop: 30,
  },
  leftIconContainer: {
    padding: spacing.space_8,
    backgroundColor: 'rgba(209, 120, 66, 0.2)',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
});
