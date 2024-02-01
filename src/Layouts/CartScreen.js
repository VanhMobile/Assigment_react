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
import React, {useEffect, useState} from 'react';
import {colors, fontFamily, fontSize, spacing} from '../assets/themes/themes';
import LinearGradient from 'react-native-linear-gradient';
import {Category} from 'iconsax-react-native';
import ItemCart from '../Components/ItemCart';
import HeaderApp from '../Components/HeaderApp';
import axios from 'axios';

const CartScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://65ace9dfadbd5aa31bdfbec1.mockapi.io/VanhCoffee/Cart')
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const renderItem = ({item}) => <ItemCart item={item} quantity={'1'} />;

  return (
    <View style={styles.container}>
      <HeaderApp title={'Cart'} />
      <ScrollView>
        <View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
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
    height: 48,
    borderRadius: 20,
    marginRight: 24,
  },
  ButtonText: {
    fontFamily: fontFamily.poppins_semibold,
    fontSize: fontSize.size_18,
    color: colors.primaryWhiteHex,
  },
});
