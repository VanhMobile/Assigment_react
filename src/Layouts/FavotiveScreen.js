/* eslint-disable prettier/prettier */
import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, spacing} from '../assets/themes/themes';
import HeaderApp from '../Components/HeaderApp';
import {FlatList} from 'react-native-gesture-handler';
import HeaderItemDetail from '../Components/HeaderItemDetail';
import axios from 'axios';

const FavotiveScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://65623cdedcd355c08324aeda.mockapi.io/api/v1/products')
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await axios
      .get('https://65623cdedcd355c08324aeda.mockapi.io/api/v1/products')
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));

    setRefreshing(false);
  }, []);

  const favourite = data.filter(item => item.favourite);

  const renderItem = ({item}) => <HeaderItemDetail data={item} />;
  return (
    <View style={styles.container}>
      <HeaderApp title={'Favorites'} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <FlatList
          data={favourite}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  );
};

export default FavotiveScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBlackHex,
    paddingBottom: 80,
  },
});
