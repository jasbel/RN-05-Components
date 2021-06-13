import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Navigator } from './src/navigator/Navigator';


const App = () => {
    return (
        <NavigationContainer>{/* Rest of your app code */}
            <Navigator />
        </NavigationContainer>
    )
}

export default App;