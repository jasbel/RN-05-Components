import React from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle';
import stylesApp from '../theme/appTheme';

const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert(
            "Titulo",
            "Este es el mensaje de la alerta",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "destructive"
                },
                {
                    text: 'OK',
                    onPress:  () => console.log("OK Pressed"),
                }
            ],
            {
                // cancelable: true, //Para salir haciendo click fuera de la alert
                // onDismiss: () => console.log("onDismiss"), //si se presiona afuera
            }
        )
    }
    
    const showPrompt = () => {
        Alert.prompt(
            "Titulo",
            "Este es el mensaje del prompt",
            (valor: string)=> console.log('info', valor),
            'secure-text',
            'default',
            'number-pad'
        )
    }
    

    return (
        <View style={stylesApp.globalMargin}>
            <HeaderTitle title='Alerts'/>

            <Button 
                title="mostrar Alerta"
                onPress={showAlert}
            />
            <Button 
                title="mostrar Promt"
                onPress={showPrompt}
            />
        </View>
    )
}

export default AlertScreen

const styles = StyleSheet.create({})
