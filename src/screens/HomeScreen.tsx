import React from 'react';
import { FlatList, Text, View } from 'react-native';
import FlatLisMenuItem from '../components/FlatLisMenuItem';
import { menuItems } from '../data/menuItems';
import stylesApp from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';

const HomeScreen = () => {

   return (
      <View style={{...stylesApp.container, ...stylesApp.globalMargin}}>

         <FlatList
            data={menuItems}
            renderItem={({item, index}) =><FlatLisMenuItem menuItem={item}/>}
            keyExtractor={(item) => item.name}
            ListHeaderComponent={() => <HeaderTitle title='Opciones de Menu' />}
            ItemSeparatorComponent={() => <ItemSeparator />}
         />

      </View>
   )
}

export default HomeScreen;