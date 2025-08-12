import React, { useEffect } from "react";
import { View, Image, StatusBar } from 'react-native';
import logo from '../../../images/logo.png';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const Startup = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Welcome');
        }, 3000); // 3 second
        return () => clearTimeout(timer);
    }, []);
    return (
        <View className='flex-1 items-center justify-center'>
            <StatusBar barStyle={'dark-content'} />
            <Image
                source={logo}
                resizeMode='contain'
                className='h-[30%] aspect-square' />
        </View>
    );
};
export default Startup;