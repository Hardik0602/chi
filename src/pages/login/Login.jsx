import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, StatusBar } from 'react-native';
import log from '../../../images/login.png';
import InputField from '../../componants/InputField';
import LoginHook from '../../hooks/LoginHook';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const Login = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [disable, setDisable] = useState(true);
  const [verified, setVerified] = useState(false);
  const handleLogin = LoginHook();
  useEffect(() => {
    setDisable(!(mobile.trim() && password.trim()));
  }, [mobile, password]);
  const onPress = () => {
    handleLogin(mobile, password, setVerified)
  };
  useEffect(() => {
    verified ? navigation.navigate('MainTab') : null;
  }, [verified]);
  return (
    <KeyboardAvoidingView className='flex-1 bg-black'>
      <StatusBar translucent backgroundColor='transparent' barStyle={'light-content'} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className='flex-1 bg-[#A531E9]' style={{ paddingTop: insets.top }}>
          <View className='h-[40%] items-center justify-center'>
            <Image
              source={log}
              resizeMode='contain'
              className='h-[80%] w-[60%]' />
          </View>
          <View className='h-[60%] bg-white rounded-t-[10%] p-[5%]' style={{ paddingBottom: insets.bottom }}>
            <ScrollView
              contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-evenly' }}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}>
              <View className='items-center'>
                <Text className='text-[#A531E9] font-bold text-[40px]'>Login</Text>
              </View>
              <View>
                <View className='items-center'>
                  <Text className='text-[#7034A4] font-bold text-[12px]'>Please login to continue using the app</Text>
                  <InputField
                    label={'Phone'}
                    value={mobile}
                    onChangeText={setMobile} />
                  <InputField
                    label={'Password'}
                    value={password}
                    onChangeText={setPassword} />
                </View>
                <View className='flex-row justify-end'>
                  <TouchableOpacity onPress={() => { navigation.replace('Forgetpass') }}>
                    <Text className='text-[#8A99FD] text-[13px]'>Forgot Password?</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View className='items-center h-[25%]'>
                <TouchableOpacity
                  className={`${disable ? 'bg-gray-500' : 'bg-[#AB33ED]'} rounded-xl items-center justify-center w-full h-[50%]`}
                  disabled={disable}
                  onPress={() => { navigation.replace('MainTab') }}>
                  <Text className='text-white font-bold text-[20px]'>Login</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                  className={`${disable ? 'bg-gray-500' : 'bg-[#AB33ED]'} rounded-xl items-center justify-center w-full h-[50%]`}
                  disabled={disable}
                  onPress={() => onPress()}>
                  <Text className='text-white font-bold text-[20px]'>Login</Text>
                </TouchableOpacity> */}
                <View className='flex-row mt-[8%]'>
                  <Text>Don't have an account?</Text>
                  <TouchableOpacity onPress={() => { navigation.replace('Register') }}>
                    <Text className="text-[#8D9AF0] ml-[10px]">Sign Up</Text>
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
export default Login;