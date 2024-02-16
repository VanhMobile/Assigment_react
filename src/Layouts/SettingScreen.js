/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
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
            <ArrowLeft2
              size="32"
              color={colors.secondaryLightGreyHex}
              variant="Bold"
            />
          </View>
        </TouchableOpacity>
      </View>

      <ItemSetting
        leftIcon={
          <Backward5Seconds
            size="25"
            color={colors.primaryOrangeHex}
            variant="Bold"
          />
        }
        title={'Lịch sử'}
        rightIcon={
          <ArrowRight2
            size="32"
            color={colors.secondaryLightGreyHex}
            variant="Bold"
          />
        }
      />

      <ItemSetting
        leftIcon={
          <User size="25" color={colors.primaryOrangeHex} variant="Bold" />
        }
        title={'Thông tin tài khoản'}
        rightIcon={
          <ArrowRight2
            size="32"
            color={colors.secondaryLightGreyHex}
            variant="Bold"
          />
        }
      />

      <ItemSetting
        leftIcon={
          <Location size="25" color={colors.primaryOrangeHex} variant="Bold" />
        }
        title={'Địa chỉ'}
        rightIcon={
          <ArrowRight2
            size="32"
            color={colors.secondaryLightGreyHex}
            variant="Bold"
          />
        }
      />

      <ItemSetting
        leftIcon={<MoneyAdd size="25" color="#FF8A65" variant="Bold" />}
        title={'Phương thức Thanh toán'}
        handlePress={handlePressItem_Payment}
        rightIcon={
          <ArrowRight2
            size="32"
            color={colors.secondaryLightGreyHex}
            variant="Bold"
          />
        }
      />

      <ItemSetting
        leftIcon={
          <QuoteDownCircle
            size="25"
            color={colors.primaryOrangeHex}
            variant="Bold"
          />
        }
        handlePress={() => {
          navigation.navigate('InforApp');
        }}
        title={'Giới thiệu'}
        rightIcon={
          <ArrowRight2
            size="32"
            color={colors.secondaryLightGreyHex}
            variant="Bold"
          />
        }
      />

      <ItemSetting
        leftIcon={
          <MessageQuestion
            size="25"
            color={colors.primaryOrangeHex}
            variant="Bold"
          />
        }
        title={'Trợ giúp'}
        rightIcon={
          <ArrowRight2
            size="32"
            color={colors.secondaryLightGreyHex}
            variant="Bold"
          />
        }
      />

      <ItemSetting
        leftIcon={
          <LogoutCurve
            size={25}
            color={colors.primaryOrangeHex}
            variant="Bold"
          />
        }
        title={'Đăng xuất'}
        rightIcon={
          <ArrowRight2
            size="32"
            color={colors.secondaryLightGreyHex}
            variant="Bold"
          />
        }
        handlePress={openDialog}
      />

      <Dialog visible={dialogVisible} />
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
    padding: spacing.space_8,
    backgroundColor: colors.secondaryDarkGreyHex,
    borderRadius: 10,
    position: 'absolute',
    left: spacing.space_24,
  },
});
