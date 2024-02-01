/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableNativeFeedback,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {colors, fontFamily, fontSize, spacing} from '../assets/themes/themes';
import {
  ArrowLeft2,
  Heart,
  Blur,
  LocationMinus,
  Star1,
} from 'iconsax-react-native';
import {addFavourite, deleteFavourite} from '../assets/api/favourite.api';
import {updateProduct} from '../assets/api/product.api';
import {addCart} from '../assets/api/cart.api';

const WIDTH_SCREEN = Dimensions.get('window').width;
const HEIGHT_SCREEN = Dimensions.get('window').height;

const dataSize = [
  {
    size: 'S',
    price: 3.7,
  },
  {
    size: 'L',
    price: 5.7,
  },
  {
    size: 'M',
    price: 10.7,
  },
];

const DetailScreen = ({navigation, route}) => {
  const {data} = route.params;
  const [selectID, setSelectId] = useState(data.prices[0].size);
  const [price, setPrice] = useState(data.prices[0].price);
  const [favourite, setFavourite] = useState(data.favourite);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <ImageBackground
            source={{uri: data.imagelink_portrait}}
            style={styles.imgProduct}>
            <View style={styles.header}>
              <TouchableNativeFeedback
                onPress={() => {
                  navigation.goBack();
                }}>
                <View style={styles.btnBack}>
                  <ArrowLeft2
                    size="32"
                    color={colors.primaryLightGreyHex}
                    variant="Bold"
                  />
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                onPress={async () => {
                  await setFavourite(!favourite);
                  data.favourite = true;
                  updateProduct(data.id, data);
                }}>
                <View style={styles.btnHeart}>
                  <Heart
                    size="32"
                    color={
                      favourite
                        ? colors.primaryRedHex
                        : colors.primaryLightGreyHex
                    }
                    variant="Bold"
                  />
                </View>
              </TouchableNativeFeedback>
            </View>
            <View style={styles.inforContainer}>
              <View style={styles.inforName}>
                <View style={{}}>
                  <Text
                    style={{
                      color: colors.primaryWhiteHex,
                      fontSize: fontSize.size_18,
                      fontFamily: fontFamily.poppins_extrabold,
                    }}>
                    {data.name}
                  </Text>
                  <Text
                    style={{
                      color: colors.primaryWhiteHex,
                      fontSize: fontSize.size_14,
                      fontFamily: fontFamily.poppins_regular,
                    }}>
                    {data.special_ingredient}
                  </Text>
                </View>

                <View style={styles.infcontainerStar}>
                  <View style={styles.btnCate}>
                    <Blur
                      size="32"
                      color={colors.primaryOrangeHex}
                      variant="Bold"
                    />
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={{color: colors.primaryWhiteHex, width: 32}}>
                      {data.type}
                    </Text>
                  </View>
                  <View style={styles.btnCate}>
                    <LocationMinus
                      size="32"
                      color={colors.primaryOrangeHex}
                      variant="Bold"
                    />
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      Text
                      style={{
                        color: colors.primaryWhiteHex,
                        width: 40,
                        textAlign: 'center',
                      }}>
                      {data.ingredients}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.star}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Star1
                    size="32"
                    color={colors.primaryOrangeHex}
                    variant="Bold"
                  />
                  <Text
                    style={{
                      color: colors.primaryWhiteHex,
                      fontSize: fontSize.size_18,
                      marginLeft: spacing.space_8,
                      fontFamily: fontFamily.poppins_regular,
                      fontWeight: 700,
                    }}>
                    {data.average_rating}
                  </Text>
                </View>

                <View
                  style={{
                    height: 55,
                    width: 55 * 2 + spacing.space_20,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.secondaryGreyHex,
                  }}>
                  <Text
                    style={{
                      color: colors.primaryWhiteHex,
                      fontSize: fontSize.size_12,
                      fontFamily: fontFamily.poppins_regular,
                    }}>
                    {data.roasted}
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={{paddingHorizontal: 24}}>
          <Text
            style={{
              color: colors.primaryWhiteHex,
              fontSize: fontSize.size_20,
              fontFamily: fontFamily.poppins_regular,
              fontWeight: 600,
              marginTop: 16,
            }}>
            Description
          </Text>
          <Text
            style={{
              color: colors.primaryWhiteHex,
              fontSize: fontSize.size_16,
              fontFamily: fontFamily.poppins_regular,
              fontWeight: 600,
            }}>
            {data.description}
          </Text>
          <Text
            style={{
              color: colors.primaryWhiteHex,
              fontSize: fontSize.size_20,
              fontFamily: fontFamily.poppins_regular,
              fontWeight: 600,
              marginTop: 16,
            }}>
            Size
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: spacing.space_20,
            }}>
            {data.prices.map(item => (
              <TouchableOpacity
                key={item.size}
                onPress={() => {
                  setSelectId(item.size);
                  setPrice(item.price);
                }}
                style={[
                  styles.SizeBox,
                  {
                    borderColor: colors.secondaryLightGreyHex,
                  },

                  item.size === selectID
                    ? {borderColor: colors.primaryOrangeHex}
                    : {},
                ]}>
                <Text
                  style={[
                    styles.SizeText,
                    {
                      color: colors.secondaryLightGreyHex,
                    },
                    item.size === selectID
                      ? {color: colors.primaryOrangeHex}
                      : {},
                  ]}>
                  {item.size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.PriceFooter}>
            <View style={styles.PriceContainer}>
              <Text style={styles.PriceTitle}>Price</Text>
              <Text style={styles.PriceText}>
                $ <Text style={styles.Price}>{price}</Text>
              </Text>
            </View>
            <TouchableOpacity
              style={styles.PayButton}
              onPress={async () => {
                await addCart(data);
              }}>
              <Text style={styles.ButtonText}>ADD TO CART</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBlackHex,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.space_16,
    paddingHorizontal: spacing.space_24,
  },
  btnBack: {
    padding: 8,
    backgroundColor: colors.secondaryDarkGreyHex,
    borderRadius: 10,
  },
  btnHeart: {
    padding: 8,
    backgroundColor: colors.secondaryDarkGreyHex,
    borderRadius: 10,
  },
  inforContainer: {
    paddingVertical: spacing.space_30,
    backgroundColor: colors.primaryBlackRGBA,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  inforName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginHorizontal: 24,
  },
  infcontainerStar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.space_20,
  },
  btnCate: {
    height: 55,
    width: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondaryDarkGreyHex,
  },
  star: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    paddingHorizontal: spacing.space_24,
  },
  SizeBox: {
    flex: 1,
    backgroundColor: colors.primaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    height: spacing.space_24 * 2,
    borderRadius: 10,
    borderWidth: 2,
  },
  SizeText: {
    fontFamily: fontFamily.poppins_medium,
  },

  PriceFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.space_20,
    paddingVertical: spacing.space_20,
  },
  PriceContainer: {
    alignItems: 'center',
    width: 100,
  },
  PriceTitle: {
    fontFamily: fontFamily.poppins_medium,
    fontSize: fontSize.size_14,
    color: colors.secondaryLightGreyHex,
  },
  PriceText: {
    fontFamily: fontFamily.poppins_semibold,
    fontSize: fontSize.size_24,
    color: colors.primaryOrangeHex,
  },
  Price: {
    color: colors.primaryWhiteHex,
  },
  PayButton: {
    backgroundColor: colors.primaryOrangeHex,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderRadius: 20,
  },
  ButtonText: {
    fontFamily: fontFamily.poppins_semibold,
    fontSize: fontSize.size_18,
    color: colors.primaryWhiteHex,
  },
  imgProduct: {
    width: '100%',
    aspectRatio: 20 / 25,
    justifyContent: 'space-between',
  },
  acitive: {},
});
