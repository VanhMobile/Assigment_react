/* eslint-disable prettier/prettier */

import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  colors,
  fontFamily,
} from '../assets/themes/themes';
import { Eye, EyeSlash } from 'iconsax-react-native';

const EditText = ({
  leftIcon,
  styleEdt,
  paddingIcon,
  hint,
  onHandleText,
  ...props
}) => {
  const [showPass, setShowPass] = useState(props.secureTextEntry);
  return (
    <View style={[styles.container, styleEdt]}>
      <View>{leftIcon}</View>
      <TextInput
        style={[styles.TextInput, {paddingHorizontal: paddingIcon}]}
        placeholder={hint}
        {...props}
        secureTextEntry={showPass}
        onChangeText={(text) => {
          onHandleText(text);
        }}
      />
      {
        props.secureTextEntry ? (
          <View>
            <TouchableOpacity
              style={{ width: 24 }}
              onPress={() => setShowPass(!showPass)}
            >
              {!showPass ? (
                <Eye size="18" color={colors.secondaryLightGreyHex} />
              ) : (
                <EyeSlash size="18" color={colors.secondaryLightGreyHex}/>
              )}
            </TouchableOpacity>
          </View>
        ) : (
          <></>
        )
      }
    </View>
  );
};

export default EditText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
  },

  TextInput: {
    fontSize: 18,
    color: colors.primaryWhiteHex,
    fontFamily: fontFamily.poppins_regular,
    flex: 1,
    paddingBottom: 0,
    paddingTop: 5,
  },
});
