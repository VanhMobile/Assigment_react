/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Add, MedalStar, Star1} from 'iconsax-react-native';
import {colors, fontFamily, fontSize, spacing} from '../assets/themes/themes';

const CARD_WIDTH = Dimensions.get('window').width * 0.32;

const ItemCoffeeFlatlistt = ({item, handleItemPress}) => {
  const url = item.imagelink_square;
  console.log(url)
  return (
    <LinearGradient
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.CardLinearGradientContainer}
      colors={[colors.primaryGreyHex, colors.primaryBlackHex]}>
      <View>
        <ImageBackground
          source={{uri: url}}
          resizeMode="contain"
          style={styles.ImageBackground}>
          <View style={styles.headerItem}>
            <Star1 size="18" color={colors.primaryOrangeHex} variant="Bold" />
            <Text style={styles.CardRatingText}>{item.average_rating}</Text>
          </View>
        </ImageBackground>
        <Text style={{color: 'white', fontSize: 18}}>{item.name}</Text>
        <Text style={{color: 'white', fontSize: 12}}>
          {item.special_ingredient}
        </Text>
        <View style={styles.footerImg}>
          <View>
            <Text
              style={{
                color: colors.primaryOrangeHex,
                fontSize: 18,
                fontFamily: fontFamily.poppins_regular,
                fontWeight: 700,
              }}>
              $
              <Text
                style={{
                  fontSize: 16,
                  color: colors.primaryWhiteHex,
                }}>
                {item.prices[0].price}
              </Text>
            </Text>
          </View>
          <TouchableOpacity onPress={()=>handleItemPress(item)}>
            <Add size="40" color={colors.primaryOrangeHex} variant="Bold" />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default ItemCoffeeFlatlistt;

const styles = StyleSheet.create({
  CardLinearGradientContainer: {
    padding: spacing.space_15,
    borderRadius: 25,
    marginRight: spacing.space_16,
  },

  CardRatingText: {
    fontFamily: fontFamily.poppins_medium,
    color: colors.primaryWhiteHex,
    lineHeight: 22,
    fontSize: fontSize.size_14,
  },

  ImageBackground: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: 20,
    marginBottom: 15,
    overflow: 'hidden',
  },
  headerItem: {
    flexDirection: 'row',
    backgroundColor: colors.primaryBlackRGBA,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.space_10,
    paddingHorizontal: spacing.space_15,
    position: 'absolute',
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    top: 0,
    right: 0,
  },
  footerImg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
});
