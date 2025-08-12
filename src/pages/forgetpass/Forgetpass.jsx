import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Keyboard, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, StatusBar } from 'react-native';
import pass from '../../../images/forgetpass.png';
import InputField from '../../componants/InputField';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const Forgetpass = ({ navigation }) => {
  const [mobile, setMobile] = useState('');
  const [disable, setDisable] = useState(true);
  useEffect(() => {
    if (mobile.trim() !== '') {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [mobile]);
  const insets = useSafeAreaInsets();
  return (
    <KeyboardAvoidingView className='flex-1 bg-black'>
      <StatusBar barStyle={'light-content'} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className='flex-1 bg-[#A531E9]' style={{ paddingTop: insets.top }}>
          <View className='h-[40%] items-center justify-center'>
            <Image
              source={pass}
              resizeMode='contain'
              className='h-[80%] w-[60%]' />
          </View>
          <View className='h-[60%] bg-white rounded-t-[10%] p-[5%]' style={{ paddingBottom: insets.bottom }}>
            <ScrollView
              contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-evenly' }}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}>
              <View className='items-center'>
                <Text className='text-[#A531E9] font-bold text-[40px]'>Forget Password</Text>
              </View>
              <View className='items-center'>
                <Text className='text-[#6B6969] font-bold text-[12px]'>Enter the Phone Number</Text>
                <InputField
                  label={'Phone'}
                  value={mobile}
                  onChangeText={setMobile} />
              </View>
              <View className='items-center h-[25%]'>
                <TouchableOpacity
                  className={`${disable ? 'bg-gray-500' : 'bg-[#AB33ED]'} rounded-xl items-center justify-center w-full h-[50%]`}
                  disabled={disable}>
                  <Text className='text-white font-bold text-[20px]'>Submit</Text>
                </TouchableOpacity>
                <View className='mt-[8%]'>
                  <TouchableOpacity onPress={() => { navigation.replace('Login') }}>
                    <Text className="text-[#8D9AF0] ml-[10px]">Back to Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default Forgetpass;