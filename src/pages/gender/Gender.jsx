import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Keyboard, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, StatusBar } from 'react-native';
import male from '../../../images/male_copy.png'
import female from '../../../images/female_copy.png'
import AuthProgressBar from '../../componants/AuthProgressBar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const Gender = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    return (
        <KeyboardAvoidingView className='flex-1 bg-black'>
            <StatusBar translucent backgroundColor='transparent' barStyle={'dark-content'} />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className='flex-1 bg-[#F6F6F6]' style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
                    <View className='h-[15%] justify-end items-center'>
                        <AuthProgressBar
                            progress={'w-3/5'} />
                    </View>
                    <View className='h-[85%] items-center p-[5%]'>
                        <ScrollView
                            contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-evenly' }}
                            keyboardShouldPersistTaps="handled"
                            showsVerticalScrollIndicator={false}>
                            <View className='items-center'>
                                <Text className='text-[#A531E9] font-bold text-[25px]'>Which one are You?</Text>
                            </View>
                            <View className='items-center h-[40%] w-full'>
                                <View className='flex-row w-full justify-center'>
                                    <View className='w-[40%]'>
                                        <TouchableOpacity
                                            className='bg-[#C470F5] p-[10%] items-center justify-center rounded-3xl'
                                            onPress={() => { navigation.navigate('Location') }}>
                                            <Image
                                                source={male}
                                                resizeMode='contain'
                                                className='w-full' />
                                            <Text className='text-white font-bold text-[20px] mt-[10%]'>Male</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View className='w-[15%]' />
                                    <View className='w-[40%]'>
                                        <TouchableOpacity
                                            className='bg-[#DB9DFFDB] p-[10%] items-center justify-center rounded-3xl'
                                            onPress={() => { navigation.navigate('Location') }}>
                                            <Image
                                                source={female}
                                                resizeMode='contain'
                                                className='w-full' />
                                            <Text className='text-white font-bold text-[20px] mt-[10%]'>Female</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Text className='text-[#979797] mt-[5%]'>Step 3/5</Text>
                            </View>
                            <View>
                                <Text className='text-[30px] text-[#6B6969] font-bold text-center'>We believe in tailored care. Let's begin with your gender</Text>
                            </View>
                            <View className='items-center h-[20%]'>
                                <TouchableOpacity
                                    className='bg-[#AB33ED] rounded-xl justify-center items-center w-[90%] h-[50%]'
                                    onPress={() => { navigation.navigate('Location') }}>
                                    <Text className='text-white font-bold text-[25px]'>Prefer not to say</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
export default Gender;