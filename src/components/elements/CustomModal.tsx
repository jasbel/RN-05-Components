import React, { Dispatch, SetStateAction } from 'react';
import { Button } from 'react-native';
import {StyleSheet, Text, View, Modal} from 'react-native';
import HeaderTitle from '../HeaderTitle';

interface Props {
  isVisible: boolean,
  children: any,
  setIsVisible: Dispatch<SetStateAction<boolean>>
}

const CustomModal = (props:Props) => {
  const {isVisible, children , setIsVisible} = props;

  return (
    <Modal 
      animationType="slide" visible={isVisible}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <View style={styles.modalHeader}>
            <HeaderTitle title="modal" style={{textAlign: 'center'}}/>
          </View>
          <View style={styles.modalBody}>
            {children}
          </View>
          <View style={styles.modalFooter}>
            <Button title="Cerrar" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0005',
    padding: 20,

  },
  modal: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    elevation: 10,
  },
  modalHeader: {
    backgroundColor: 'white',
  },
  modalBody: {
  },
  modalFooter: {
    backgroundColor: 'white',
  },
});
