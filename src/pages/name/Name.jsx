import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Keyboard, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, StatusBar } from 'react-native';
import name_img from '../../../images/name.png'
import InputField from '../../componants/InputField';
import AuthProgressBar from '../../componants/AuthProgressBar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const Name = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const [name, setName] = useState('');
    const [disable, setDisable] = useState(true);
    useEffect(() => {
        if (name.trim() !== '') {
            setDisable(false);
        } else {
            setDisable(true);
        }
    }, [name]);
    return (
        <KeyboardAvoidingView className='flex-1 bg-black'>
            <StatusBar translucent backgroundColor='transparent' barStyle={'dark-content'} />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className='flex-1 bg-[#F6F6F6]' style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
                    <View className='h-[15%] justify-end items-center'>
                        <AuthProgressBar
                            progress={'w-1/5'} />
                    </View>
                    <View className='h-[85%] items-center p-[5%]'>
                        <ScrollView
                            contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-evenly' }}
                            keyboardShouldPersistTaps="handled"
                            showsVerticalScrollIndicator={false}>
                            <View className='items-center h-[50%]'>
                                <Image
                                    source={name_img}
                                    resizeMode='contain'
                                    className='h-[80%] w-[60%]' />
                                <Text className='text-[#979797] mt-[5%]'>Step 1/5</Text>
                            </View>
                            <View>
                                <Text className='text-[#797979] text-[27px] text-center'>Every journey begins with a name. What's yours?</Text>
                            </View>
                            <View>
                                <InputField
                                    label={'Name'}
                                    value={name}
                                    onChangeText={setName} />
                            </View>
                            <View className='h-[10%]'>
                                <TouchableOpacity
                                    className={`${disable ? 'bg-gray-500' : 'bg-[#AB33ED]'} rounded-xl items-center justify-center w-full h-full`}
                                    disabled={disable}
                                    onPress={() => navigation.navigate('Email')}>
                                    <Text className='text-white font-bold text-[20px]'>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
export default Name;