/* eslint-disable prettier/prettier */
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import React, {memo, useCallback, useMemo, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors, fontFamily, fontSize, spacing} from '../assets/themes/themes';
import {Add, Minus} from 'iconsax-react-native';
import ItemQuantity from './ItemQuantity';

const {width, height} = Dimensions.get('window');
const ItemCart = memo(({item}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[colors.primaryGreyHex, colors.primaryBlackHex]}
      style={styles.CardLinearGradient}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Image
              source={{uri: item.imagelink_square}}
              style={styles.imgItem}
            />
          </View>
          <View style={{marginLeft: spacing.space_16}}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.subTitle}>{item.special_ingredient}</Text>
            <View style={styles.btnRoasted}>
              <Text style={styles.subTitle}>{item.roasted}</Text>
            </View>
          </View>
        </View>
      </View>
      {item.prices.map((data, index) => (
        <ItemQuantity data={data} />
      ))}
    </LinearGradient>
  );
});

export default ItemCart;

const styles = StyleSheet.create({
  CardLinearGradient: {
    marginTop: spacing.space_16,
    marginHorizontal: spacing.space_24,
    borderRadius: 16,
    paddingBottom: spacing.space_16,
  },
  container: {
    padding: spacing.space_16,
  },
  header: {
    flexDirection: 'row',
    flex: 1,
  },
  itemTitle: {
    color: colors.primaryWhiteHex,
    fontSize: fontSize.size_20,
    fontFamily: fontFamily.poppins_medium,
  },
  imgItem: {
    width: width * 0.3,
    height: width * 0.3,
    resizeMode: 'contain',
    borderRadius: 20,
  },
  subTitle: {
    color: colors.secondaryLightGreyHex,
    fontSize: fontSize.size_14,
    fontFamily: fontFamily.poppins_regular,
  },
  btnRoasted: {
    backgroundColor: colors.primaryGreyHex,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.space_16,
    paddingHorizontal: spacing.space_10,
    borderRadius: 16,
    marginTop: spacing.space_8,
  },
  itemInforContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: spacing.space_16,
    marginTop: spacing.space_8,
  },
  itemQuantity: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    gap: spacing.space_10,
  },
  price: {
    color: colors.primaryOrangeHex,
    fontSize: fontSize.size_18,
    fontFamily: fontFamily.poppins_medium,
  },
  itemPrice: {
    color: colors.primaryWhiteHex,
    fontSize: fontSize.size_16,
    fontFamily: fontFamily.poppins_medium,
  },
  btnSize: {
    backgroundColor: colors.primaryBlackHex,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    paddingHorizontal: spacing.space_16,
    paddingVertical: spacing.space_8,
    borderRadius: 16,
  },
  btnQuantity: {
    width: 30,
    height: 30,
    backgroundColor: colors.primaryOrangeHex,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  edtQuantity: {
    color: colors.primaryWhiteHex,
    fontSize: fontSize.size_16,
    flex: 1,
    backgroundColor: colors.primaryBlackHex,
    borderWidth: 2,
    borderColor: colors.primaryOrangeHex,
    borderRadius: 16,
    height: 35,
    textAlign: 'center',
    padding: 0,
  },
});
