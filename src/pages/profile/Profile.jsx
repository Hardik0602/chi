import React, { useState } from 'react';
import { View, Text, Dimensions, Image, ScrollView, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity, StatusBar } from 'react-native';
import user from '../../../images/user.png'
import deleteAccount from '../../../images/deleteAccount.png'
import logout from '../../../images/logout.png'
import InputField from '../../componants/InputField';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const Picture = ({ picture }) => {
    return (
        <View className=' h-[120px] w-[120px] bg-[#E2E1F3] rounded-full items-center justify-center'>
            <Image
                source={picture}
                className='h-full w-full'
                resizeMode='contain' />
        </View>
    )
}
const Profile = () => {
    const insets = useSafeAreaInsets();
    const screenHeight = Dimensions.get('window').height;
    const topMarginPhoto = screenHeight * 0.3;
    const topMarginRest = screenHeight * 0.3 + 70;
    const heightRest = screenHeight - topMarginRest;
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    return (
        <KeyboardAvoidingView className='flex-1 bg-black'>
            <StatusBar barStyle={'light-content'} />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps='handled'
                    showsVerticalScrollIndicator={false}>
                    <View className='flex-1 bg-white items-center'>
                        <View className='h-[30%] w-full items-center mb-[65px]'>
                            <View className='items-center justify-center bg-[#A531E9] w-[110%] h-full rounded-b-full'>
                                <Text className='text-white text-[35px] font-bold absolute'>My Profile</Text>
                                <View className='w-full items-center mb-[-50%]'>
                                    <Picture picture={user} />
                                </View>
                            </View>
                        </View>
                        {/* <View className='absolute w-full items-center' style={{ marginTop: topMarginPhoto }}>
                            <Picture picture={user} />
                        </View> */}
                        <View className='w-[90%]' style={{ height: heightRest, justifyContent: 'space-evenly' }}>

                            <View>
                                <InputField
                                    label={'Name'}
                                    value={name}
                                    onChangeText={setName} />
                                <InputField
                                    label={'Email'}
                                    value={email}
                                    onChangeText={setEmail} />
                                <InputField
                                    label={'Password'}
                                    value={pass}
                                    onChangeText={setPass} />
                            </View>
                            <View>
                                <View className='mb-[5%]'>
                                    <TouchableOpacity className='flex-row items-center w-[25%]'>
                                        <Image
                                            source={logout}
                                            resizeMode='contain'
                                            className='h-[25px] w-[25px]' />
                                        <Text className='text-[#FF0000] text-[14px] ml-[10px]'>Log Out</Text>
                                    </TouchableOpacity>
                                </View>
                                <View className='mb-[5%]'>
                                    <TouchableOpacity className='flex-row items-center w-[35%]'>
                                        <Image
                                            source={deleteAccount}
                                            resizeMode='contain'
                                            className='h-[25px] w-[25px]' />
                                        <Text className='text-[#FF0000] text-[14px] ml-[10px]'>Delete Profile</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View className='items-center'>
                                <Text>Version: 13.46.0.52</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};
export default Profile;