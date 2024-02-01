/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Add, Minus} from 'iconsax-react-native';
import {colors, fontFamily, fontSize, spacing} from '../assets/themes/themes';

const ItemQuantity = ({data}) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <View style={styles.itemInforContainer}>
      <View style={styles.btnSize}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles.subTitle, {width: 40, textAlign: 'center'}]}>
          {data.size}
        </Text>
      </View>
      <View style={{width: 90, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.price}>
          $<Text style={styles.itemPrice}>{data.price}</Text>
        </Text>
      </View>
      <View style={styles.itemQuantity}>
        <TouchableOpacity
          onPress={() => {
            setQuantity(quantity + 1);
          }}>
          <View style={styles.btnQuantity}>
            <Add size="24" color={colors.primaryWhiteHex} />
          </View>
        </TouchableOpacity>
        <TextInput style={styles.edtQuantity} value={'' + quantity} />
        <TouchableOpacity
          onPress={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          }}>
          <View style={styles.btnQuantity}>
            <Minus size="24" color={colors.primaryWhiteHex} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemQuantity;

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
