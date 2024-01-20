/* eslint-disable prettier/prettier */
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {colors, fontFamily, fontSize, spacing} from '../assets/themes/themes';
import LinearGradient from 'react-native-linear-gradient';
import {Category} from 'iconsax-react-native';
import ItemCart from '../Components/ItemCart';
import HeaderApp from '../Components/HeaderApp';

const CartScreen = () => {
  const coffees = [
    {
      id: 'C1',
      name: 'Americano',
      description: `The Americano is another popular type of coffee drink, and it's very easy to make! It's just espresso with hot water dripping over it. The name came about during World War II when European baristas added water to their espresso drinks for the American soldiers stationed there. The resulting drink had a smoother, less concentrated flavour than espresso and thus the Americano was born.`,
      roasted: 'Medium Roasted',
      imagelink_square: require('../assets/imgs/coffee_4.jpg'),
      imagelink_portrait: require('../assets/imgs/coffee_1.jpg'),
      ingredients: 'Milk',
      special_ingredient: 'With Steamed Milk',
      prices: [
        {size: 'S', price: '1.38', currency: '$'},
        {size: 'M', price: '3.15', currency: '$'},
        {size: 'L', price: '4.29', currency: '$'},
      ],
      average_rating: 4.2,
      ratings_count: '6,879',
      favourite: false,
      type: 'Coffee',
      index: 0,
    },
    {
      id: 'C2',
      name: 'Americano',
      description: `The Americano is another popular type of coffee drink, and it's very easy to make! It's just espresso with hot water dripping over it. The name came about during World War II when European baristas added water to their espresso drinks for the American soldiers stationed there. The resulting drink had a smoother, less concentrated flavour than espresso and thus the Americano was born.`,
      roasted: 'Medium Roasted',
      imagelink_square: require('../assets/imgs/coffee_4.jpg'),
      imagelink_portrait: require('../assets/imgs/coffee_5.jpg'),
      ingredients: 'Milk',
      special_ingredient: 'With Steamed Milk',
      prices: [{size: 'S', price: '1.38', currency: '$'}],
      average_rating: 4.4,
      ratings_count: '6,879',
      favourite: false,
      type: 'Coffee',
      index: 1,
    },
    {
      id: 'C3',
      name: 'Americano',
      description: `The Americano is another popular type of coffee drink, and it's very easy to make! It's just espresso with hot water dripping over it. The name came about during World War II when European baristas added water to their espresso drinks for the American soldiers stationed there. The resulting drink had a smoother, less concentrated flavour than espresso and thus the Americano was born.`,
      roasted: 'Medium Roasted',
      imagelink_square: require('../assets/imgs/coffee_4.jpg'),
      imagelink_portrait: require('../assets/imgs/coffee_2.jpg'),
      ingredients: 'Milk',
      special_ingredient: 'With Steamed Milk',
      prices: [
        {size: 'S', price: '1.38', currency: '$'},
        {size: 'M', price: '3.15', currency: '$'},
        {size: 'L', price: '4.29', currency: '$'},
      ],
      average_rating: 4.7,
      ratings_count: '6,879',
      favourite: false,
      type: 'Coffee',
      index: 2,
    },
    {
      id: 'C4',
      name: 'Black Coffee',
      description: `Black coffee is arguably the most common type of coffee drink out there. Its popularity can be mainly attributed to how easy it is to make this beverage, be it drip, pour-over, French press, or anything else. Black coffee is usually served with no add-ins.`,
      roasted: 'Medium Roasted',
      imagelink_square: require('../assets/imgs/coffee_4.jpg'),
      imagelink_portrait: require('../assets/imgs/coffee_1.jpg'),
      ingredients: 'Milk',
      special_ingredient: 'With Steamed Milk',
      prices: [{size: 'S', price: '1.38', currency: '$'}],
      average_rating: 4.3,
      ratings_count: '6,879',
      favourite: false,
      type: 'Coffee',
      index: 3,
    },
  ];

  const renderItem = ({item}) => <ItemCart item={item} />;

  return (
    <View style={styles.container}>
      <HeaderApp title={'Cart'} />
      <ScrollView>
        <View>
          <FlatList
            data={coffees}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.PriceFooter}>
          <View style={styles.PriceContainer}>
            <Text style={styles.PriceTitle}>Price</Text>
            <Text style={styles.PriceText}>
              $ <Text style={styles.Price}>10.7</Text>
            </Text>
          </View>
          <TouchableOpacity style={styles.PayButton} onPress={() => {}}>
            <Text style={styles.ButtonText}>Pay</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBlackHex,
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
  subTitle: {
    color: colors.secondaryLightGreyHex,
    fontSize: fontSize.size_14,
    fontFamily: fontFamily.poppins_regular,
  },
  // listCart: {
  //   paddingBottom: spacing.space_16,
  // },
  PriceFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.space_20,
    paddingVertical: spacing.space_20,
    paddingBottom: spacing.space_24 * 3.5,
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
    height: spacing.space_36 * 2,
    borderRadius: 20,
  },
  ButtonText: {
    fontFamily: fontFamily.poppins_semibold,
    fontSize: fontSize.size_18,
    color: colors.primaryWhiteHex,
  },
});
