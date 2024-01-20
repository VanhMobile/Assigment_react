/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fontFamily, fontSize, spacing} from '../assets/themes/themes';
import LinearGradient from 'react-native-linear-gradient';

const ItemPayment = ({leftIcon, MethorTitle, priceTitle}) => {
  return (
    <TouchableOpacity>
      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.CardLinearGradientContainer}
        colors={[colors.primaryGreyHex, colors.primaryBlackHex]}>
        <View style={styles.itemContainer}>
          <View style={styles.leftItem}>
            {leftIcon}
            <Text style={styles.methorTitle}>{MethorTitle}</Text>
          </View>
          <Text style={styles.priceTitle}>{priceTitle}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ItemPayment;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: spacing.space_8,
    alignItems: 'center',
  },
  leftItem: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  methorTitle: {
    color: colors.primaryWhiteHex,
    fontFamily: fontFamily.poppins_medium,
    fontSize: fontSize.size_16,
    marginLeft: spacing.space_16,
  },
  priceTitle: {
    color: colors.secondaryLightGreyHex,
    fontFamily: fontFamily.poppins_regular,
    fontSize: fontSize.size_16,
  },
  CardLinearGradientContainer: {
    padding: spacing.space_4,
    borderRadius: 25,
    marginHorizontal: spacing.space_24,
    marginTop: spacing.space_16,
  },
});
