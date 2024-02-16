/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, fontFamily, fontSize, spacing} from '../assets/themes/themes';
import HeaderApp from '../Components/HeaderApp';
import ItemCart from '../Components/ItemCart';
import ItemHistory from '../Components/ItemHistory';
import axios from 'axios';

const HistoryScreen = () => {
  const renderItem = ({item}) => <ItemHistory item={item} />;

  const [coffees, setCofees] = useState([]);

  useEffect(() => {
    axios
      .get('https://65623cdedcd355c08324aeda.mockapi.io/api/v1/products')
      .then(res => {
        setCofees(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <HeaderApp title={'History oder'} />
      <ScrollView>
        <FlatList
          data={coffees}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ScrollView>
      <TouchableOpacity>
        <View style={styles.btnDownload}>
          <Text style={styles.textBtn}>Download</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBlackHex,
  },
  btnDownload: {
    height: 60,
    marginBottom: 80,
    backgroundColor: colors.primaryOrangeHex,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.space_16,
    marginRight: spacing.space_24,
    marginLeft: spacing.space_24,
  },
  textBtn: {
    color: colors.primaryWhiteHex,
    fontFamily: fontFamily.poppins_medium,
    fontSize: fontSize.size_18,
  },
});
