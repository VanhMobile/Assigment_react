/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors, fontFamily, fontSize, spacing} from '../assets/themes/themes';
import {
  ArrowLeft2,
  Backward5Seconds,
  ArrowRight2,
  User,
  Location,
  MoneyAdd,
  QuoteDownCircle,
  MessageQuestion,
  LogoutCurve,
} from 'iconsax-react-native';
import ItemSetting from '../Components/ItemSetting';
import Dialog from '../Components/Dialog';

const SettingScreen = ({navigation}) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

  const [dialogVisible, setDialogVisible] = useState(false);

  const openDialog = () => {
    setDialogVisible(true);
  };

  const closeDialog = () => {
    setDialogVisible(false);
  };

  const handlePressItem_Payment = () => {
    navigation.navigate('PaymentScreen');
  };
  return (
    <View style={styles.settingContainer}>
      <View style={styles.settingHeader}>
        <Text style={styles.settingTitle}>Setting</Text>
        <TouchableOpacity style={styles.btnBack} onPress={handleGoBack}>
          <View>
            <ArrowLeft2 size="24" color={colors.secondaryLightGreyHex} />
          </View>
        </TouchableOpacity>
      </View>

      <ItemSetting
        leftIcon={
          <Backward5Seconds
            size="16"
            color={colors.primaryOrangeHex}
            variant="Bold"
          />
        }
        title={'Lịch sử'}
        rightIcon={<ArrowRight2 size="24" color={colors.primaryOrangeHex} />}
      />

      <ItemSetting
        leftIcon={
          <User size="16" color={colors.primaryOrangeHex} variant="Bold" />
        }
        title={'Thông tin tài khoản'}
        rightIcon={<ArrowRight2 size="24" color={colors.primaryOrangeHex} />}
      />

      <ItemSetting
        leftIcon={
          <Location size="16" color={colors.primaryOrangeHex} variant="Bold" />
        }
        title={'Địa chỉ'}
        rightIcon={<ArrowRight2 size="24" color={colors.primaryOrangeHex} />}
      />

      <ItemSetting
        leftIcon={<MoneyAdd size="16" color="#FF8A65" variant="Bold" />}
        title={'Phương thức Thanh toán'}
        handlePress={handlePressItem_Payment}
        rightIcon={<ArrowRight2 size="24" color={colors.primaryOrangeHex} />}
      />

      <ItemSetting
        leftIcon={
          <QuoteDownCircle
            size="16"
            color={colors.primaryOrangeHex}
            variant="Bold"
          />
        }
        handlePress={() => {
          navigation.navigate('InforApp');
        }}
        title={'Giới thiệu'}
        rightIcon={<ArrowRight2 size="24" color={colors.primaryOrangeHex} />}
      />

      <ItemSetting
        leftIcon={
          <MessageQuestion
            size="16"
            color={colors.primaryOrangeHex}
            variant="Bold"
          />
        }
        title={'Trợ giúp'}
        rightIcon={<ArrowRight2 size="24" color={colors.primaryOrangeHex} />}
      />

      <ItemSetting
        leftIcon={
          <LogoutCurve
            size={16}
            color={colors.primaryOrangeHex}
            variant="Bold"
          />
        }
        title={'Đăng xuất'}
        rightIcon={<ArrowRight2 size="24" color={colors.primaryOrangeHex} />}
        handlePress={openDialog}
      />

      <Dialog
        visible={dialogVisible}
        onClose={closeDialog}
        mess={'Bạn muốn đăng xuất ?'}
        onOKe={() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'LoginScreen'}],
          });
        }}
      />
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  settingContainer: {
    flex: 1,
    backgroundColor: colors.primaryBlackHex,
  },
  settingHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.space_24,
  },
  settingTitle: {
    color: colors.primaryWhiteHex,
    fontSize: fontSize.size_30,
    fontFamily: fontFamily.poppins_medium,
  },
  btnBack: {
    position: 'absolute',
    left: spacing.space_24,
  },
});
