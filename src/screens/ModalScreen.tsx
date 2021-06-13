import React, { useState } from 'react';
import {Button, Text, View} from 'react-native';
import CustomModal from '../components/elements/CustomModal';
import HeaderTitle from '../components/HeaderTitle';
import stylesApp from '../theme/appTheme';

const ModalScreen = () => {
  
  const [isVisible, setIsVisible] = useState(false)

  return (
    <View style={stylesApp.globalMargin}>
      <HeaderTitle title="Modal Screen" />

      <Button
        title="Abrir Modal"
        onPress={()=>setIsVisible(true)}
      />

      <CustomModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      >
        <Text>Cuerpito del body</Text>
      </CustomModal>
    </View>
  );
};

export default ModalScreen;