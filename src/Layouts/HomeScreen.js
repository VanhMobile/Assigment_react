/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {
  colors,
  spacing,
  boderRadius,
  fontFamily,
  fontSize,
} from '../assets/themes/themes';
import {Category, SearchNormal1} from 'iconsax-react-native';
import LinearGradient from 'react-native-linear-gradient';
import EditText from '../Components/EditText';
import {ScrollView} from 'react-native-gesture-handler';
import ItemCoffeeFlatlistt from '../Components/ItemCoffeeFlatlistt';
import HeaderApp from '../Components/HeaderApp';

const coffeeBeans = [
  {
    id: 'B1',
    name: 'Robusta Beans',
    description: `Robusta beans are larger and more rounded than the other bean varieties. These plants typically grow much larger than Arabica plants, measuring between 15 and 20 feet. Robusta beans are typically considered to be hardier because they can grow at lower altitudes and resist diseases. But recent research suggests that they don’t handle heat as well as was previously thought.`,
    roasted: 'Medium Roasted',
    imagelink_square: require('../assets/imgs/coffee_3.jpg'),
    imagelink_portrait: require('../assets/imgs/coffee_6.jpg'),
    ingredients: 'Africa',
    special_ingredient: 'From Africa',
    prices: [
      {size: '250gm', price: '5.50', currency: '$'},
      {size: '500gm', price: '10.50', currency: '$'},
      {size: '1Kg', price: '18.50', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Bean',
    index: 0,
  },
  {
    id: 'B2',
    name: 'Arabica Beans',
    description: `Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed! The name Arabica likely comes from the beans’ popularity in 7th-century Arabia (present-day Yemen).`,
    roasted: 'Medium Roasted',
    imagelink_square: require('../assets/imgs/coffee_3.jpg'),
    imagelink_portrait: require('../assets/imgs/coffee_6.jpg'),
    ingredients: 'Africa',
    special_ingredient: 'From Africa',
    prices: [
      {size: '250gm', price: '5.50', currency: '$'},
      {size: '500gm', price: '10.50', currency: '$'},
      {size: '1Kg', price: '18.50', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Bean',
    index: 1,
  },
  {
    id: 'B3',
    name: 'Liberica Beans',
    description: `Native to central and western Africa – specifically Liberia, hence its name – Coffea liberica is prized for its piquant floral aroma and bold, smoky flavor profile. Growing from a much larger plant than Arabica or Robusta, most Liberica cherries tend to be irregular in shape and closer to Robusta in size and general appearance. It’s also tolerant of hot, humid climates and does well at low altitude. `,
    roasted: 'Medium Roasted',
    imagelink_square: require('../assets/imgs/coffee_3.jpg'),
    imagelink_portrait: require('../assets/imgs/coffee_6.jpg'),
    ingredients: 'Malaysia',
    special_ingredient: 'From Malaysia',
    prices: [
      {size: '250gm', price: '5.50', currency: '$'},
      {size: '500gm', price: '10.50', currency: '$'},
      {size: '1Kg', price: '18.50', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Bean',
    index: 2,
  },
  {
    id: 'B4',
    name: 'Excelsa Beans',
    description: `Excelsa beans grow almost entirely in Southeast Asia, and they’re shaped somewhat like Liberica beans — elongated ovals. These beans grow on large 20 to 30-foot coffee plants at medium altitudes. In terms of flavor, Excelsa beans are pretty unique. They combine light roast traits like tart notes and fruity flavors with flavors that are more reminiscent of dark roasts.`,
    roasted: 'Medium Roasted',
    imagelink_square: require('../assets/imgs/coffee_3.jpg'),
    imagelink_portrait: require('../assets/imgs/coffee_6.jpg'),
    ingredients: 'Malaysia',
    special_ingredient: 'From Malaysia',
    prices: [
      {size: '250gm', price: '5.50', currency: '$'},
      {size: '500gm', price: '10.50', currency: '$'},
      {size: '1Kg', price: '18.50', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Bean',
    index: 3,
  },
];

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

const categories = [
  {
    id: 1,
    name: 'Tất cả',
  },
  {
    id: 2,
    name: 'Cà phê đen',
  },
  {
    id: 3,
    name: 'Hạt cà phê',
  },
  {
    id: 4,
    name: 'Cà phê sữa',
  },
  {
    id: 5,
    name: 'Cà phê',
  },
  {
    id: 6,
    name: 'Cà phê Máy',
  },
];
// const [width, height] = Dimensions.get('window');
const HomeScreen = ({navigation}) => {
  const [selectedItemId, setSelectedItemId] = useState(1);

  const handleItemPress = itemId => {
    setSelectedItemId(itemId);
  };

  const handleItemFlatlist = () => {
    navigation.navigate('DetailScreen');
  };

  const renderItem = ({item}) => (
    <ItemCoffeeFlatlistt item={item} handleItemPress={handleItemFlatlist} />
  );

  return (
    <View style={styles.container}>
      <HeaderApp />
      <ScrollView>
        <Text style={styles.findText}>Find the best{'\n'}coffee for you</Text>

        <EditText
          hint={'Find your coffee'}
          leftIcon={
            <SearchNormal1
              size="25"
              color={colors.primaryLightGreyHex}
              variant="Bold"
            />
          }
          placeholderTextColor={colors.primaryLightGreyHex}
          styleEdt={styles.edtSeach}
          paddingIcon={16}
        />

        <View style={styles.listCate}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollCate}>
            {categories.map(item => (
              <TouchableOpacity
                style={{marginRight: spacing.space_16, alignItems: 'center'}}
                key={item.id}
                onPress={() => {
                  handleItemPress(item.id);
                }}>
                <Text
                  style={[
                    styles.itemTitleCate,
                    selectedItemId == item.id
                      ? {color: colors.primaryOrangeHex}
                      : {},
                  ]}>
                  {item.name}
                </Text>
                {selectedItemId == item.id ? (
                  <View style={styles.acitive}></View>
                ) : (
                  <></>
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={{marginTop: 16, marginLeft: 24}}>
          <FlatList
            data={coffees}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Text
          style={{
            marginTop: 16,
            color: colors.primaryWhiteHex,
            fontFamily: fontFamily.poppins_regular,
            fontSize: fontSize.size_20,
            marginLeft: 24,
            fontWeight: 700,
          }}>
          Coffee Beans
        </Text>
        <View style={{marginTop: 16, marginLeft: 24, marginBottom: 80}}>
          <FlatList
            data={coffeeBeans}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  itemTitleCate: {
    fontFamily: fontFamily.poppins_regular,
    fontSize: fontSize.size_18,
    fontWeight: 700,
    color: colors.primaryLightGreyHex,
  },
  container: {
    backgroundColor: colors.primaryBlackHex,
    flex: 1,
  },
  header: {
    width: '100%',
    marginTop: 24,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnCategories: {
    borderWidth: 2,
    borderColor: colors.primaryLightGreyHex,
    borderRadius: 17,
  },
  btnCategoriesBg: {
    padding: spacing.space_8,
    borderRadius: 14,
  },
  avt: {width: 50, height: 50},
  findText: {
    fontFamily: fontFamily.poppins_medium,
    color: colors.primaryWhiteHex,
    fontSize: fontSize.size_30,
    marginLeft: spacing.space_24,
    marginTop: spacing.space_24,
  },
  edtSeach: {
    height: 50,
    backgroundColor: colors.primaryDarkGreyHex,
    marginHorizontal: 24,
    marginTop: 24,
    borderRadius: boderRadius.radius_15,
    paddingHorizontal: spacing.space_16,
    alignItems: 'center',
  },
  listCate: {
    height: 60,
    marginTop: 16,
    marginLeft: 24,
  },
  scrollCate: {
    flexDirection: 'row',
    padding: 10,
  },
  acitive: {
    width: 10,
    height: 10,
    backgroundColor: colors.primaryOrangeHex,
    marginTop: 10,
    borderRadius: 10,
  },
});
