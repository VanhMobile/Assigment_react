/* eslint-disable prettier/prettier */
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors, fontFamily, fontSize, spacing} from '../assets/themes/themes';
import {Add, Minus} from 'iconsax-react-native';

const ItemHistory = ({item}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[colors.primaryGreyHex, colors.primaryBlackHex]}
      style={styles.CardLinearGradient}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Image source={item.imagelink_portrait} style={styles.imgItem} />
          </View>
          <View style={{marginLeft: spacing.space_16, flex: 1}}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.subTitle}>{item.special_ingredient}</Text>
          </View>
          <Text style={[styles.price, {fontSize: fontSize.size_30}]}>
            $
            <Text style={[styles.itemPrice, {fontSize: fontSize.size_30}]}>
              100
            </Text>
          </Text>
        </View>
      </View>
      {item.prices.map((data, index) => (
        <View style={styles.itemInforContainer}>
          <View style={styles.btnSize}>
            <Text style={styles.subTitle}>{data.size}</Text>
          </View>
          <View style={styles.btnPrice}>
            <Text style={styles.price}>
              $<Text style={styles.itemPrice}>{data.price}</Text>
            </Text>
          </View>
          <View style={styles.itemQuantity}>
            <Text style={[styles.price, {fontSize: fontSize.size_20}]}>
              X
              <Text style={[styles.itemPrice, {fontSize: fontSize.size_20}]}>
                3
              </Text>
            </Text>
            <Text style={[styles.itemPrice, {fontSize: fontSize.size_20}]}>
              9.00
            </Text>
          </View>
        </View>
      ))}
    </LinearGradient>
  );
};

export default ItemHistory;

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
    width: 80,
    height: 80,
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
    padding: spacing.space_16,
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
    alignItems: 'center',
    flex: 1,
    gap: spacing.space_30,
  },
  price: {
    color: colors.primaryOrangeHex,
    fontSize: fontSize.size_18,
    fontFamily: fontFamily.poppins_medium,
  },
  itemPrice: {
    color: colors.primaryWhiteHex,
    fontSize: fontSize.size_18,
    fontFamily: fontFamily.poppins_medium,
  },
  btnSize: {
    backgroundColor: colors.primaryBlackHex,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    padding: spacing.space_8,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  btnPrice: {
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryBlackHex,
    marginLeft: 3,
    paddingVertical: spacing.space_4,
    paddingRight: spacing.space_8,
    marginRight: spacing.space_16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  btnQuantity: {
    width: 40,
    height: 40,
    backgroundColor: colors.primaryOrangeHex,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  edtQuantity: {
    color: colors.primaryWhiteHex,
    fontSize: fontSize.size_18,
    flex: 1,
    backgroundColor: colors.primaryBlackHex,
    borderWidth: 2,
    borderColor: colors.primaryOrangeHex,
    borderRadius: 16,
    height: 40,
    textAlign: 'center',
    padding: 0,
  },
});
