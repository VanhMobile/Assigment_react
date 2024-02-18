/* eslint-disable prettier/prettier */
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fontFamily} from '../assets/themes/themes';

const Dialog = ({title, mess, onClose, visible, onOKe}) => {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      transparent={true}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text>{title}</Text>
          <Text style={styles.text}>{mess}</Text>
          <View style={styles.containerButton}>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  paddingHorizontal: 24,
                  borderRadius: 16,
                },
              ]}
              onPress={onClose}>
              <View>
                <Text style={styles.text}>No</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onOKe}
              style={[
                styles.button,
                {
                  backgroundColor: colors.primaryOrangeHex,
                  paddingHorizontal: 24,
                  borderRadius: 16,
                },
              ]}>
              <View>
                <Text style={styles.text}>Oke</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Dialog;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Transparent background
  },
  modalView: {
    backgroundColor: colors.primaryDarkGreyHex,
    borderRadius: 10,
    padding: 20,
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  button: {
    padding: 8,
  },
  text: {
    color: colors.primaryWhiteHex,
    fontFamily: fontFamily.poppins_medium,
  },
});
