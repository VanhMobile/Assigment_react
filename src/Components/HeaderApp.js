/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fontFamily, fontSize, spacing} from '../assets/themes/themes';
import {Category} from 'iconsax-react-native';
import LinearGradient from 'react-native-linear-gradient';

const HeaderApp = ({title}) => {
  return (
    <View style={styles.header}>
      <View style={styles.btnCategories}>
        <LinearGradient
          colors={['#1C1C1C', '#4F4F4F']} // Màu sắc 1 và màu sắc 2
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.btnCategoriesBg}>
          <Category size="16" color="#828282" variant="Bold" />
        </LinearGradient>
      </View>

      <View>
        <Text style={styles.titleHeader}>{title}</Text>
      </View>

      <View
        style={
          {
            // position: 'absolute', right: 24, top: 16
          }
        }>
        <Image style={styles.avt} source={require('../assets/imgs/avt.jpg')} />
      </View>
    </View>
  );
};

export default HeaderApp;

const styles = StyleSheet.create({
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
    borderRadius: 8,
  },
  btnCategoriesBg: {
    padding: spacing.space_4,
    borderRadius: 6,
  },
  titleHeader: {
    fontSize: fontSize.size_24,
    fontFamily: fontFamily.poppins_medium,
    color: colors.primaryWhiteHex,
  },
  avt: {width: 30, height: 30, borderRadius: 8},
});
