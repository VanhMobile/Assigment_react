/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  colors,
  fontFamily,
  fontSize,
  spacing,
  borderRadius,
  boderRadius,
} from '../assets/themes/themes';
import {Setting2} from 'iconsax-react-native';
import EditText from '../Components/EditText';
import Button from '../Components/Button';
import Singleton from '../designPattern/Singleton';
import {updateUser} from '../assets/api/user.api';

const ProfileScreen = ({navigation}) => {
  const handlePressSetting = () => {
    navigation.navigate('SettingScreen');
  };

  const [password, setPassword] = useState('');
  const [conFirmPassword, setConFirmPassword] = useState('');

  const onHandlePass = value => {
    setPassword(value);
  };

  const onHandleConfirmPass = value => {
    setConFirmPassword(value);
  };

  const singleton = Singleton.getInstance();

  const user = singleton.getUser();
  const onUpdatePass = async () => {
    if (password === '' || conFirmPassword === '') {
      ToastAndroid.show('Dữ liệu trống', ToastAndroid.SHORT);
      return;
    }

    if (password !== conFirmPassword) {
      ToastAndroid.show('Mật khẩu sai', ToastAndroid.SHORT);
      return;
    }

    if (password === user.password) {
      ToastAndroid.show('Trùng mật khẩu cũ', ToastAndroid.SHORT);
      return;
    }

    user.password = password;
    await updateUser(user.id, user);
    ToastAndroid.show('Cập nhập mật khẩu thành công', ToastAndroid.SHORT);
    setPassword('');
    setConFirmPassword('');
  };
  return (
    <View style={styles.profileContainer}>
      <View style={styles.proHeader}>
        <Text style={styles.profileTitle}>Informations</Text>
        <TouchableOpacity
          style={styles.btnSetting}
          onPress={handlePressSetting}>
          <Setting2
            size="24"
            color={colors.primaryLightGreyHex}
            variant="Bold"
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.containerAvt}>
          <Image
            source={require('../assets/imgs/avt.jpg')}
            style={styles.avt}
          />
        </View>
        <EditText
          hint={'Enter name'}
          placeholderTextColor={colors.secondaryLightGreyHex}
          styleEdt={styles.proEdt}
          value={user.fullName}
        />

        <EditText
          hint={'Enter Email'}
          placeholderTextColor={colors.secondaryLightGreyHex}
          styleEdt={styles.proEdt}
          value={user.emailAddress}
        />
        <EditText
          hint={'Enter password'}
          placeholderTextColor={colors.secondaryLightGreyHex}
          styleEdt={styles.proEdt}
          secureTextEntry={true}
          onHandleText={onHandlePass}
          value={password}
        />
        <EditText
          hint={'confirm password'}
          placeholderTextColor={colors.secondaryLightGreyHex}
          styleEdt={styles.proEdt}
          secureTextEntry={true}
          onHandleText={onHandleConfirmPass}
          value={conFirmPassword}
        />

        <Button
          title={'Save'}
          background={colors.primaryOrangeHex}
          opacity={0.3}
          onPress={onUpdatePass}
          colorTitle={colors.primaryWhiteHex}
          styleButton={styles.btnSignUp}
        />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: colors.primaryBlackHex,
    paddingBottom: 80,
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
    padding: spacing.space_4,
    borderRadius: 10,
  },
  containerAvt: {
    alignItems: 'center',
    marginTop: spacing.space_30 * 2,
  },
  avt: {
    width: 80,
    height: 80,
    marginBottom: spacing.space_30 * 2,
    borderRadius: 8,
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
  btnSignUp: {
    marginBottom: 80,
  },
});
