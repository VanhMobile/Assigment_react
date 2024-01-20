/* eslint-disable prettier/prettier */
/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import React from 'react';
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

const {width, height} = Dimensions.get('window');

const LoginScreen = ({navigation}) => {
  const handleButtonPress = () => {
    navigation.navigate('MainScreen');
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
            <Text style={styles.subTitle}>Login to continue</Text>
          </View>
          <EditText
            hint={'Email Address'}
            placeholderTextColor={colors.secondaryLightGreyHex}
            styleEdt={styles.edt}
          />
          <EditText
            hint={'Password'}
            placeholderTextColor={colors.secondaryLightGreyHex}
            rightIcon={<Eye size="25" color={colors.secondaryLightGreyHex} />}
            secureTextEntry={true}
            styleEdt={styles.edt}
          />
          <Button
            title={'Login'}
            background={colors.primaryOrangeHex}
            opacity={0.3}
            onPress={handleButtonPress}
            colorTitle={colors.primaryWhiteHex}
          />

          <Button
            title={'Login with Google'}
            background={colors.primaryWhiteHex}
            opacity={0.1}
            colorTitle={colors.primaryBlackHex}
            leftIcon={
              <Image
                style={{width: 32, height: 32}}
                resizeMode="contain"
                source={require('../assets/imgs/IconGoogle.png')}
              />
            }
          />
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('SignupScreen');
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: spacing.space_36,
                marginEnd: spacing.space_24,
                marginStart: spacing.space_24,
              }}>
              <Text
                style={{
                  color: colors.primaryWhiteHex,
                  fontFamily: fontFamily.poppins_regular,
                }}>
                Don't have account?
              </Text>
              <Text
                style={{
                  color: colors.primaryOrangeHex,
                  marginLeft: spacing.space_4,
                  fontFamily: fontFamily.poppins_regular,
                }}>
                Register
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => {}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: spacing.space_16,
                marginEnd: spacing.space_24,
                marginStart: spacing.space_24,
                marginBottom: spacing.space_30,
              }}>
              <Text
                style={{
                  color: colors.primaryWhiteHex,
                  fontFamily: fontFamily.poppins_regular,
                }}>
                Forget password?
              </Text>
              <Text
                style={{
                  color: colors.primaryOrangeHex,
                  marginLeft: spacing.space_4,
                  fontFamily: fontFamily.poppins_regular,
                }}>
                click reset
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

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
});
