import React from 'react';
import {View} from 'react-native';

const ItemSeparator = () => {
  return (
    <View>
      <View
        style={{
          borderBottomWidth: 2,
          opacity: 0.4,
          marginVertical: 8,
        }}
      />
    </View>
  );
};

export default ItemSeparator;
