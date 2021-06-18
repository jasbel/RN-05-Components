import React, { useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'

import CustomSwitch from '../components/CustomSwitch'
import HeaderTitle from '../components/HeaderTitle'
import useForm from '../hooks/useForm'
import stylesApp from '../theme/appTheme'
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext'

const TextInputScreen = () => {

    // const [dataForm, setDataForm] = useState({
    //     name: '',
    //     email: '',
    //     phone: '',
    //     isChecked: 'false'
    // })

    // const onChange = (value: string, field: keyof typeof dataForm) => {
    //     setDataForm({
    //         ...dataForm,
    //         [field]: value
    //     })
    // }

    const {theme: {colors}} = useContext(ThemeContext);
    const { form, onChange } = useForm({
        name: '',
        email: '',
        phone: '',
        isChecked: false
    })

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1, height: 700}}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={[stylesApp.globalMargin]}>
                        <TextInput
                            style={{...styles.input, color: colors.text, backgroundColor: colors.background, borderColor: colors.inverse}}
                            placeholder="Ingrese su nombre"
                            autoCorrect={false}
                            autoCapitalize="words"
                            onChangeText={(value) => onChange(value, 'name')}
                            placeholderTextColor= {colors.inverse}
                        />
                        <TextInput
                            style={{...styles.input, color: colors.text, backgroundColor: colors.background, borderColor: colors.inverse}}
                            placeholder="Ingrese su email"
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType="email-address"
                            placeholderTextColor= {colors.inverse}
                            // keyboardAppearance='dark'
                        />
                        <TextInput
                            style={{...styles.input, color: colors.text, backgroundColor: colors.background, borderColor: colors.inverse}}
                            placeholder="Ingrese su telefono"
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType='phone-pad'
                            placeholderTextColor= {colors.inverse}
                        />
                        <View style={styles.switchRow}>
                            <Text style={styles.switchText}> isHungry </Text>
                            <CustomSwitch isOn={form.isChecked} onChange={(value) => onChange(value, 'isChecked')}/>
                        </View>
                        <HeaderTitle title={JSON.stringify(form, null, 3)} />
                        <View style={{marginBottom: 200}} />

                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default TextInputScreen

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#0006',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginBottom: 5
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
    switchText: {
        fontSize: 25
    }
})
