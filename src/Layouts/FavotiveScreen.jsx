/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, spacing} from '../assets/themes/themes';
import HeaderApp from '../Components/HeaderApp';
import {FlatList} from 'react-native-gesture-handler';
import HeaderItemDetail from '../Components/HeaderItemDetail';

const FavotiveScreen = () => {
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
      prices: [
        {size: 'S', price: '1.38', currency: '$'},
        {size: 'M', price: '3.15', currency: '$'},
        {size: 'L', price: '4.29', currency: '$'},
      ],
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
      prices: [
        {size: 'S', price: '1.38', currency: '$'},
        {size: 'M', price: '3.15', currency: '$'},
        {size: 'L', price: '4.29', currency: '$'},
      ],
      average_rating: 4.3,
      ratings_count: '6,879',
      favourite: false,
      type: 'Coffee',
      index: 3,
    },
  ];

  const renderItem = ({item}) => <HeaderItemDetail />;
  return (
    <View style={styles.container}>
      <HeaderApp title={'Favorites'} />
      <FlatList
        data={coffees}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default FavotiveScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBlackHex,
  },
});
