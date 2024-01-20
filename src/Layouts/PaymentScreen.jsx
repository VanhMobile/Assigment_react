/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fontFamily, fontSize, spacing} from '../assets/themes/themes';
import {ArrowLeft2, Card} from 'iconsax-react-native';
import ItemPayment from '../Components/ItemPayment';

const PaymentScreen = ({navigation}) => {
  const handleback = () => {
    navigation.navigate('MainScreen');
  };
  return (
    <View style={styles.container}>
      <View style={styles.paymentHeader}>
        <TouchableOpacity onPress={handleback} style={styles.btnBack}>
          <View style={styles.btnBackContainer}>
            <ArrowLeft2
              size="25"
              color={colors.secondaryLightGreyHex}
              variant="Bold"
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.title}>Payment</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Credit card</Text>
        <Image
          style={styles.cardImg}
          source={require('../assets/imgs/payment.png')}
        />
      </View>
      <ItemPayment
        leftIcon={<Card size="32" color="#FF8A65" variant="Bold" />}
        MethorTitle={'Wallet'}
        priceTitle={'$ 100.000'}
      />

      <ItemPayment
        leftIcon={
          <Image
            style={{width: 32, height: 32}}
            resizeMode="contain"
            source={require('../assets/imgs/facebook_icon.png')}
          />
        }
        MethorTitle={'Facebook Pay'}
      />

      <ItemPayment
        leftIcon={
          <Image
            style={{width: 32, height: 32}}
            resizeMode="contain"
            source={require('../assets/imgs/IconGoogle.png')}
          />
        }
        MethorTitle={'Google Pay'}
      />
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBlackHex,
  },

  paymentHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.space_24,
    paddingHorizontal: spacing.space_24,
  },

  btnBack: {
    position: 'absolute',
    left: spacing.space_24,
  },

  btnBackContainer: {
    width: 40,
    height: 40,
    backgroundColor: colors.secondaryDarkGreyHex,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  title: {
    fontSize: fontSize.size_24,
    fontFamily: fontFamily.poppins_medium,
    color: colors.primaryWhiteHex,
  },
  card: {
    borderRadius: 30,
    borderWidth: spacing.space_2,
    borderColor: colors.primaryOrangeHex,
    marginHorizontal: spacing.space_24,
    padding: spacing.space_16,
    marginTop: spacing.space_24,
  },
  cardTitle: {
    fontSize: fontSize.size_14,
    color: colors.primaryWhiteHex,
    marginBottom: spacing.space_8,
    fontFamily: fontFamily.poppins_medium,
  },
  cardImg: {
    width: '100%',
    resizeMode: 'contain',
  },
});
