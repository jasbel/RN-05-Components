import React from 'react'
import { useContext } from 'react'
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native'
import { color } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ThemeContext } from '../context/themeContext/ThemeContext'
import stylesApp from '../theme/appTheme'

interface Props {
    title: string;
    style?: StyleProp<TextStyle>;
}


const HeaderTitle = ({title, style}: Props) => {

    const {theme: {colors}} = useContext(ThemeContext);

    const {top} = useSafeAreaInsets()

    return (
        <View style={{marginTop: top + 20, marginBottom: 20}}>
            <Text style={[stylesApp.title, style, {color: colors.text}]}>{title}</Text>
         </View>
    )
}

export default HeaderTitle

const styles = StyleSheet.create({})
