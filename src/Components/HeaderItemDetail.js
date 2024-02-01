/* eslint-disable prettier/prettier */
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  ArrowLeft2,
  Blur,
  Heart,
  LocationMinus,
  Star1,
} from 'iconsax-react-native';
import {colors, fontFamily, fontSize, spacing} from '../assets/themes/themes';
import LinearGradient from 'react-native-linear-gradient';
import {updateProduct} from '../assets/api/product.api';
const {width, height} = Dimensions.get('window');
const HeaderItemDetail = ({data}) => {
  const [favourite, setFavourite] = useState(data.favourite);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: data.imagelink_portrait}}
        style={styles.imgProduct}>
        <View style={styles.header}>
          <TouchableNativeFeedback
            onPress={async () => {
              setFavourite(!favourite);
              data.favourite = favourite;
              updateProduct(data.id, data);
            }}>
            <View style={styles.btnHeart}>
              <Heart
                size="32"
                color={
                  favourite ? colors.primaryRedHex : colors.primaryLightGreyHex
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
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  width: width * 0.34,
                  color: colors.primaryWhiteHex,
                  fontSize: fontSize.size_18,
                  fontFamily: fontFamily.poppins_extrabold,
                  marginRight: 8,
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
                  style={{
                    color: colors.primaryWhiteHex,
                    width: 40,
                    textAlign: 'center',
                  }}>
                  {' '}
                  {data.type}{' '}
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
              <Star1 size="32" color={colors.primaryOrangeHex} variant="Bold" />
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
      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.CardLinearGradientContainer}
        colors={[colors.primaryGreyHex, colors.primaryBlackHex]}>
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
              color: colors.primaryLightGreyHex,
              fontSize: fontSize.size_14,
              fontFamily: fontFamily.poppins_regular,
              fontWeight: 600,
              paddingBottom: spacing.space_8,
            }}>
            {data.description}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default HeaderItemDetail;

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.space_16,
    // borderWidth: 2,
    // borderColor: colors.primaryWhiteHex,
    borderRadius: 30,
    marginHorizontal: spacing.space_24,
    overflow: 'hidden',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
  imgProduct: {
    width: '100%',
    aspectRatio: 20 / 25,
    justifyContent: 'space-between',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});
