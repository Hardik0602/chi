import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Keyboard, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, StatusBar } from 'react-native';
import age from '../../../images/age.png';
import AuthProgressBar from '../../componants/AuthProgressBar';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const Age = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const [disable, setDisable] = useState(true);
    // const [date, setDate] = useState(new Date());
    const [date, setDate] = useState(null);
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
        if (selectedDate) {
            setDate(selectedDate);
            setDisable(false);
        }
        setShow(false);
    };
    const formatDate = (date) => {
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
    };
    return (
        <KeyboardAvoidingView className='flex-1 bg-black'>
            <StatusBar translucent backgroundColor='transparent' barStyle={'dark-content'} />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className='flex-1 bg-[#F6F6F6]' style={{ paddingBottom: insets.bottom, paddingTop: insets.top }}>
                    <View className='h-[15%] justify-end items-center'>
                        <AuthProgressBar
                            progress={'w-5/5'} />
                    </View>
                    <View className='h-[85%] items-center p-[5%]'>
                        <ScrollView
                            contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-evenly' }}
                            keyboardShouldPersistTaps="handled"
                            showsVerticalScrollIndicator={false}>
                            <View className='items-center h-[30%]'>
                                <Image
                                    source={age}
                                    resizeMode='contain'
                                    className='h-[80%] w-[90%]' />
                                <Text className='text-[#979797] mt-[5%]'>Step 5/5</Text>
                            </View>
                            <View>
                                <Text className='text-[#797979] text-[27px] text-center'>Your age helps us tailor reminders just right. When’s your birthday?</Text>
                            </View>
                            <View className='flex-row h-[7%]' style={{ justifyContent: 'space-evenly' }}>
                                <View className='w-[35%]'>
                                    <TouchableOpacity
                                        className='bg-[#AB33ED] w-full h-full items-center justify-center rounded-xl'
                                        onPress={() => { setShow(true) }}>
                                        <Text className='font-bold text-white text-[15px]'>Select DOB</Text>
                                    </TouchableOpacity>
                                    {show && (
                                        <DateTimePicker
                                            value={date || new Date()}
                                            mode="date"
                                            display='calendar'
                                            onChange={onChange}
                                            maximumDate={new Date()} />
                                    )}
                                </View>
                                {/* <Text style={{marginLeft:10 ,fontSize: 16 }}>
                                    Selected Date: <Text style={{ fontWeight: 'bold' }}>{formatDate(date)}</Text>
                                </Text> */}
                                {/* <View className='w-[55%] items-center bg-[#AB33ED] rounded-xl justify-center'>
                                    {date && (
                                        // <Text className='text-white text-[15px] font-bold'>Selected Date: <Text className='text-[#7034A4]'>{formatDate(date)}</Text></Text>
                                        <Text className='text-white font-bold text-[20px]'>{formatDate(date)}</Text>
                                    )}
                                </View> */}
                                <View className={`w-[55%] items-center ${disable ? 'bg-violet-100' : 'bg-violet-400'} rounded-xl justify-center`}>
                                    {date && (
                                        // <Text className='text-white text-[15px] font-bold'>Selected Date: <Text className='text-[#7034A4]'>{formatDate(date)}</Text></Text>
                                        <Text className='text-white font-bold text-[20px]'>{formatDate(date)}</Text>
                                    )}
                                </View>
                            </View>
                            <View className='h-[10%] items-center'>
                                <TouchableOpacity
                                    className={`${disable ? 'bg-gray-500' : 'bg-[#AB33ED]'} rounded-xl items-center justify-center w-[90%] h-full`}
                                    disabled={disable}
                                    onPress={() => { navigation.replace('MainTab') }}>
                                    <Text className='text-white font-bold text-[20px]'>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};
export default Age;