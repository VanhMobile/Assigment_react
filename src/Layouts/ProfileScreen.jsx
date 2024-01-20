/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  colors,
  fontFamily,
  fontSize,
  spacing,
  borderRadius,
  boderRadius,
} from '../assets/themes/themes';
import {Setting2, Eye} from 'iconsax-react-native';
import EditText from '../Components/EditText';
import Button from '../Components/Button';

const ProfileScreen = ({navigation}) => {
  const handlePressSetting = () => {
    navigation.navigate('SettingScreen');
  };
  return (
    <View style={styles.profileContainer}>
      <View style={styles.proHeader}>
        <Text style={styles.profileTitle}>Informations</Text>
        <TouchableOpacity
          style={styles.btnSetting}
          onPress={handlePressSetting}>
          <Setting2
            size="32"
            color={colors.primaryLightGreyHex}
            variant="Bold"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerAvt}>
        <Image
          source={require('../assets/imgs/avatar.jpg')}
          style={styles.avt}
        />
      </View>
      <EditText
        hint={'Enter name'}
        placeholderTextColor={colors.secondaryLightGreyHex}
        styleEdt={styles.proEdt}
        value={'Nguyễn Việt Anh'}
      />

      <EditText
        hint={'Enter Email'}
        placeholderTextColor={colors.secondaryLightGreyHex}
        styleEdt={styles.proEdt}
        value={'anhnvph35035@fpt.edu.vn'}
      />
      <EditText
        hint={'Enter password'}
        placeholderTextColor={colors.secondaryLightGreyHex}
        styleEdt={styles.proEdt}
        rightIcon={
          <Eye size="32" color={colors.secondaryLightGreyHex} variant="Bold" />
        }
      />
      <EditText
        hint={'confirm password'}
        placeholderTextColor={colors.secondaryLightGreyHex}
        styleEdt={styles.proEdt}
        rightIcon={
          <Eye size="32" color={colors.secondaryLightGreyHex} variant="Bold" />
        }
      />

      <Button
        title={'Save'}
        background={colors.primaryOrangeHex}
        opacity={0.3}
        onPress={() => {}}
        colorTitle={colors.primaryWhiteHex}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: colors.primaryBlackHex,
  },
  profileTitle: {
    color: colors.primaryWhiteHex,
    fontSize: fontSize.size_24,
    fontFamily: fontFamily.poppins_medium,
  },
  proHeader: {
    marginTop: spacing.space_24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSetting: {
    position: 'absolute',
    right: spacing.space_24,
    backgroundColor: colors.secondaryDarkGreyHex,
    padding: spacing.space_8,
    borderRadius: 10,
  },
  containerAvt: {
    alignItems: 'center',
    marginTop: spacing.space_30 * 2,
  },
  avt: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: spacing.space_30 * 2,
  },
  proEdt: {
    borderColor: colors.secondaryGreyHex,
    borderWidth: 1,
    marginLeft: spacing.space_24,
    marginRight: spacing.space_24,
    marginTop: spacing.space_16,
    paddingHorizontal: spacing.space_16,
    borderRadius: boderRadius.radius_10,
    alignItems: 'center',
  },
});
