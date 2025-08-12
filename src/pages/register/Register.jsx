import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, Keyboard, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, StatusBar } from 'react-native';
import med from '../../../images/signup.png'
import InputField from '../../componants/InputField';
import SignUpHook from '../../hooks/SignUpHook';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const Register = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('')
  const [disable, setDisable] = useState(true);
  const [verified, setVerified] = useState(false);
  const handleSignUp = SignUpHook();
  useEffect(() => {
    const allFilled =
      password.trim().length > 0 &&
      rePassword.trim().length > 0 &&
      mobile.trim().length > 0;
    setDisable(!allFilled);
  }, [password, rePassword, mobile]);
  const onPress = () => {
    handleSignUp(mobile, password, rePassword, setVerified)
  };
  useEffect(() => {
    // verified ? navigation.navigate('OTP') : null;
    verified ? navigation.navigate('OTP', { phone: mobile }) : null;
  }, [verified]);
  return (
    <KeyboardAvoidingView className="flex-1 bg-black">
      <StatusBar barStyle={'light-content'} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className='flex-1 bg-[#A531E9]' style={{ paddingTop: insets.top }}>
          <View className='h-[40%] items-center justify-center'>
            <Image
              source={med}
              resizeMode='contain'
              className='h-[80%] w-[60%]' />
          </View>
          <View className='h-[60%] bg-white rounded-t-[10%] p-[5%]' style={{ paddingBottom: insets.bottom }}>
            <ScrollView
              contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-evenly' }}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}>
              <View className='items-center'>
                <Text className='text-[#A531E9] font-bold text-[40px]'>Sign Up</Text>
              </View>
              <View>
                <InputField
                  label={'Phone'}
                  value={mobile}
                  onChangeText={setMobile} />
                <InputField
                  label={'Create Password'}
                  value={password}
                  onChangeText={setPassword} />
                <InputField
                  label={'Confirm Password'}
                  value={rePassword}
                  onChangeText={setRePassword} />
              </View>
              <View className='items-center h-[25%]'>
                <TouchableOpacity
                  className={`${disable ? 'bg-gray-500' : 'bg-[#AB33ED]'} rounded-xl items-center justify-center w-full h-[50%]`}
                  disabled={disable}
                  onPress={() => onPress()}>
                  <Text className='text-white font-bold text-[20px]'>Sign Up</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                  className={`${disable ? 'bg-gray-500' : 'bg-[#AB33ED]'} rounded-xl items-center justify-center w-full h-[50%]`}
                  disabled={disable}
                  onPress={() => { navigation.navigate('OTP', { phone: mobile }) }}>
                  <Text className='text-white font-bold text-[20px]'>Sign Up</Text>
                </TouchableOpacity> */}
                <View className='flex-row mt-[8%]'>
                  <Text>Already have an account?</Text>
                  <TouchableOpacity onPress={() => { navigation.replace('Login') }}>
                    <Text className="text-[#8D9AF0] ml-[10px]">Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
export default Register;