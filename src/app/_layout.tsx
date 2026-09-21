import {Stack, SplashScreen} from "expo-router";
import "../../global.css";
import {useFonts} from "expo-font";
import {useEffect} from "react";

export default function RootLayout() {

    const [fontsLoaded] = useFonts({
        'roboto-regular': require('../../assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('../../assets/fonts/Roboto-Bold.ttf'),
        'roboto-medium': require('../../assets/fonts/Roboto-Medium.ttf'),
        'roboto-light': require('../../assets/fonts/Roboto-Light.ttf')
    });

    useEffect(() => {
        if(fontsLoaded)
            SplashScreen.hideAsync()
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;

    return <Stack screenOptions={{headerShown: false}}/>;
}
