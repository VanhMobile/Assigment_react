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
import React, {useEffect, useState} from 'react';
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
import Singleton from '../designPattern/Singleton';
import axios from 'axios';

const categories = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'Coffee',
  },
  {
    id: 3,
    name: 'Bean',
  },
  {
    id: 4,
    name: 'Coffee and milk',
  },
  {
    id: 5,
    name: 'Coffee black',
  },
];
// const [width, height] = Dimensions.get('window');
const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [allCate, setAllCate] = useState([]);
  useEffect(() => {
    axios
      .get('https://65623cdedcd355c08324aeda.mockapi.io/api/v1/products')
      .then(res => {
        setData(res.data);
        setAllCate(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  const beans = data.filter(pro => pro.type === 'bean');
  const [selectedItemId, setSelectedItemId] = useState(1);
  const singleton = Singleton.getInstance();
  console.log(singleton.getUser());
  const handleItemPress = item => {
    setSelectedItemId(item.id);
    setAllCate(data);
    if (item.name !== 'All') {
      const newData = data.filter(pro => pro.type === item.name.toLowerCase());
      setAllCate(newData);
    } else {
      setAllCate(data);
    }
  };

  const handleItemFlatlist = item => {
    navigation.navigate('DetailScreen', {data: item});
  };

  const renderItem = ({item}) => (
    <ItemCoffeeFlatlistt
      item={item}
      imagelink_portrait={item.imagelink_portrait}
      handleItemPress={handleItemFlatlist}
    />
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
                  handleItemPress(item);
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
            data={allCate}
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
            data={beans}
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
