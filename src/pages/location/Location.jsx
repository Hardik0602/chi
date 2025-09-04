import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert, Platform, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, StatusBar } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { check, request, PERMISSIONS, RESULTS, openSettings } from 'react-native-permissions';
import location from '../../../images/location.png';
import AuthProgressBar from '../../componants/AuthProgressBar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const Location = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const handleLocationAccess = async () => {
        try {
            // const permission = Platform.OS === 'android' ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
            const permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
            let result = await check(permission);
            if (result === RESULTS.DENIED || result === RESULTS.BLOCKED) {
                result = await request(permission);
            }
            if (result === RESULTS.GRANTED) {
                Geolocation.getCurrentPosition(
                    (position) => {
                        console.log('Location:', position);
                        navigation.navigate('Age');
                    },
                    (error) => {
                        console.warn(error.code, error.message);
                        // if (error.code === 2) {
                        //     Alert.alert(
                        //         'Location Disabled',
                        //         'Please turn on location services.',
                        //         [
                        //             { text: 'Cancel', style: 'cancel' },
                        //             { text: 'Open Settings', onPress: () => openSettings() },
                        //         ],
                        //         { cancelable: false }
                        //     );
                        // }
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 15000,
                        maximumAge: 10000,
                        forceRequestLocation: true,
                        showLocationDialog: true,
                    }
                );
            } else {
                Alert.alert(
                    'Permission Denied',
                    'Location permission is required to continue.',
                    [
                        { text: 'Cancel', style: 'cancel' },
                        { text: 'Open Settings', onPress: () => openSettings() },
                    ]
                );
            }
        } catch (error) {
            console.error('Location error:', error);
        }
    };
    return (
        <KeyboardAvoidingView className='flex-1 bg-black'>
            <StatusBar translucent backgroundColor='transparent' barStyle={'dark-content'} />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className='flex-1 bg-[#F6F6F6]' style={{ paddingBottom: insets.bottom, paddingTop: insets.top }}>
                    <View className='h-[15%] justify-end items-center'>
                        <AuthProgressBar
                            progress={'w-4/5'} />
                    </View>
                    <View className='h-[85%] items-center p-[5%]'>
                        <ScrollView
                            contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-evenly' }}
                            keyboardShouldPersistTaps="handled"
                            showsVerticalScrollIndicator={false}>
                            <View className='items-center h-[50%]'>
                                <Image
                                    source={location}
                                    resizeMode='contain'
                                    className='h-[80%] w-[60%]' />
                                <Text className='text-[#979797] mt-[5%]'>Step 4/5</Text>
                            </View>
                            <View>
                                <Text className='text-[#6B6969] text-[27px] text-center'>Allow location to help us set your address easily and send timely reminders wherever you go.</Text>
                            </View>
                            <View className='items-center h-[10%]'>
                                <TouchableOpacity
                                    className="bg-[#AB33ED] rounded-xl w-[90%] h-full justify-center"
                                    onPress={handleLocationAccess}>
                                    <Text className="text-white font-bold text-center text-[20px]">Grant Access</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};
export default Location;