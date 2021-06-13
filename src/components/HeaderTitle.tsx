import React from 'react'
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import stylesApp from '../theme/appTheme'

interface Props {
    title: string;
    style?: StyleProp<TextStyle>;
}


const HeaderTitle = ({title, style}: Props) => {

    const {top} = useSafeAreaInsets()

    return (
        <View style={{marginTop: top + 20, marginBottom: 20}}>
            <Text style={[stylesApp.title, style]}>{title}</Text>
         </View>
    )
}

export default HeaderTitle

const styles = StyleSheet.create({})
