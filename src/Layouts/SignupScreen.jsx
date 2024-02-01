/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import EditText from '../Components/EditText';
import {
  colors,
  fontFamily,
  fontSize,
  spacing,
  boderRadius,
} from '../assets/themes/themes';
import {Eye, Google} from 'iconsax-react-native';
import Button from '../Components/Button';
import {addUser, getData} from '../assets/api/user.api';
import axios from 'axios';

const {width, height} = Dimensions.get('window');

const SignupScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://65623cdedcd355c08324aeda.mockapi.io/api/v1/User')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);
  const onHandleTextName = value => {
    setName(value);
  };
  const onHandleTextEmail = value => {
    setEmail(value);
  };
  const onHandleTextPass = value => {
    setPassword(value);
  };
  const onHandleTextConfirmPass = value => {
    setConfirmPass(value);
  };

  const onPressSignUp = async () => {
    if (email === '' || name === '' || password === '' || confirmPass === '') {
      ToastAndroid.show('Dữ liệu trống', ToastAndroid.SHORT);
      return;
    }
    const user = data.find(item => item.email === email);
    if (user) {
      ToastAndroid.show('Tài khoản đã tồn tại', ToastAndroid.SHORT);
      return;
    }

    if (password !== confirmPass) {
      ToastAndroid.show('Mật khẩu không đúng', ToastAndroid.SHORT);
      return;
    }

    const newData = {
      fullName: name,
      emailAddress: email,
      password: password,
    };

    await addUser(newData);
    ToastAndroid.show('Tạo tài khoản thành công', ToastAndroid.SHORT);
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.divLogo}>
            <Image
              source={require('../assets/imgs/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.title}>Wellcome to VanhCoffee</Text>
            <Text style={styles.subTitle}>Register to continue</Text>
          </View>
          <EditText
            hint={'Name'}
            placeholderTextColor={colors.secondaryLightGreyHex}
            styleEdt={styles.edt}
            onHandleText={onHandleTextName}
          />
          <EditText
            hint={'Email Address'}
            placeholderTextColor={colors.secondaryLightGreyHex}
            styleEdt={styles.edt}
            onHandleText={onHandleTextEmail}
          />
          <EditText
            hint={'Password'}
            placeholderTextColor={colors.secondaryLightGreyHex}
            secureTextEntry={true}
            styleEdt={styles.edt}
            onHandleText={onHandleTextPass}
          />
          <EditText
            hint={'Confirm password'}
            placeholderTextColor={colors.secondaryLightGreyHex}
            secureTextEntry={true}
            styleEdt={styles.edt}
            onHandleText={onHandleTextConfirmPass}
          />
          <Button
            title={'Register'}
            background={colors.primaryOrangeHex}
            opacity={0.3}
            colorTitle={colors.primaryWhiteHex}
            onPress={onPressSignUp}
          />
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.goBack();
            }}>
            <View style={styles.textLogin}>
              <Text
                style={{
                  color: colors.primaryWhiteHex,
                  fontFamily: fontFamily.poppins_regular,
                }}>
                You have an account?
              </Text>
              <Text
                style={{
                  color: colors.primaryOrangeHex,
                  marginLeft: spacing.space_4,
                  fontFamily: fontFamily.poppins_regular,
                }}>
                Login
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBlackHex,
  },
  logo: {
    width: 100,
    height: 100,
  },
  divLogo: {
    marginTop: height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.primaryWhiteHex,
    fontFamily: fontFamily.poppins_bold,
    fontSize: fontSize.size_16,
    marginTop: spacing.space_10,
  },
  subTitle: {
    color: colors.primaryWhiteHex,
    fontFamily: fontFamily.poppins_regular,
    fontSize: fontSize.size_12,
  },
  edt: {
    borderColor: colors.secondaryLightGreyHex,
    borderWidth: 1,
    marginStart: spacing.space_16,
    marginEnd: spacing.space_16,
    marginTop: 30,
    alignItems: 'center',
    borderRadius: boderRadius.radius_8,
    paddingStart: spacing.space_8,
    paddingEnd: spacing.space_8,
  },
  textLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.space_36,
    marginEnd: spacing.space_24,
    marginStart: spacing.space_24,
    marginBottom: spacing.space_16,
  },
});
