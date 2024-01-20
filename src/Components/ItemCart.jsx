/* eslint-disable prettier/prettier */
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors, fontFamily, fontSize, spacing} from '../assets/themes/themes';
import {Add, Minus} from 'iconsax-react-native';

const ItemCart = ({item}) => {
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
        <View style={styles.itemInforContainer}>
          <View style={styles.btnSize}>
            <Text style={styles.subTitle}>{data.size}</Text>
          </View>
          <View
            style={{width: 90, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.price}>
              $<Text style={styles.itemPrice}>{data.price}</Text>
            </Text>
          </View>
          <View style={styles.itemQuantity}>
            <TouchableOpacity>
              <View style={styles.btnQuantity}>
                <Add size="32" color={colors.primaryWhiteHex} />
              </View>
            </TouchableOpacity>
            <TextInput style={styles.edtQuantity} value="1" />
            <TouchableOpacity>
              <View style={styles.btnQuantity}>
                <Minus size="32" color={colors.primaryWhiteHex} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </LinearGradient>
  );
};

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
    width: 150,
    height: 150,
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
    fontSize: fontSize.size_18,
    fontFamily: fontFamily.poppins_medium,
  },
  btnSize: {
    backgroundColor: colors.primaryBlackHex,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    padding: spacing.space_8,
    borderRadius: 16,
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
