import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView, KeyboardAvoidingView, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import VerifyOtpHook from '../../hooks/VerifyOtpHook';
const Number = ({ number }) => (
  <View>
    <Text className='text-[18px] font-bold text-[#727272]'>We'll text you on {number}</Text>
  </View>
)
const OTPInput = ({ otp, setOtp }) => {
  const inputRef = useRef(null);
  const handleChange = (text) => {
    const clean = text.replace(/[^0-9]/g, '').slice(0, 4);
    setOtp(clean);
  };
  const focusInput = () => inputRef.current?.focus();
  useEffect(() => {
    const hideSub = Keyboard.addListener('keyboardDidHide', () => {
      inputRef.current?.blur();
    });
    return () => hideSub.remove();
  }, []);
  const renderDots = () => {
    const digits = otp.split('');
    return [0, 1, 2, 3].map((i) => {
      const filled = !!digits[i];
      return (
        <View key={i} className='w-[60px] h-[60px] items-center justify-center' style={{ justifyContent: 'space-evenly' }}>
          {filled ? (
            <Text className='text-[30px] font-bold text-black'>{digits[i]}</Text>
          ) : (
            <View className='w-[30px] h-[30px] rounded-full bg-[#E2E1F3]' />
          )}
        </View>
      );
    });
  };
  return (
    <View>
      <TouchableWithoutFeedback onPress={focusInput}>
        <View className='flex-row'>{renderDots()}</View>
      </TouchableWithoutFeedback>
      <TextInput
        ref={inputRef}
        value={otp}
        onChangeText={handleChange}
        keyboardType='number-pad'
        maxLength={4}
        style={{ position: 'absolute', opacity: 0 }}
        autoFocus
      />
    </View>
  );
};
const OTP = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();
  const [otp, setOtp] = useState('');
  const [disable, setDisable] = useState(true);
  const { phone } = route.params;
  const [verified, setVerified] = useState(false);
  const handleOTP = VerifyOtpHook();
  useEffect(() => {
    setDisable(otp.length !== 4);
  }, [otp]);
  const onPress = () => {
    handleOTP(phone, otp, setVerified)
  };
  useEffect(() => {
    verified ? navigation.navigate('Name') : null;
  }, [verified]);
  return (
    <KeyboardAvoidingView className='flex-1 bg-black'>
      <StatusBar translucent backgroundColor='transparent' barStyle="dark-content" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
        <View className='flex-1 bg-white'>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-evenly' }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            <View className='items-center'>
              <Text className='text-[30px] font-bold text-[#171D1B] mb-[1%]'>Verify your Number</Text>
              <Number number={phone} />
            </View>
            <View className='items-center'>
              <OTPInput
                otp={otp}
                setOtp={setOtp} />
              <TouchableOpacity onPress={() => setOtp('')}>
                <Text className='mt-[5%] text-[18px] text-[#9838CD]'>Send me a new code</Text>
              </TouchableOpacity>
            </View>
            <View className='h-[8%] items-center'>
              <TouchableOpacity
                className={`${disable ? 'bg-gray-500' : 'bg-[#AB33ED]'} rounded-xl items-center justify-center w-[60%] h-full`}
                disabled={disable}
                onPress={() => { navigation.replace('Name') }}>
                <Text className='text-white font-bold text-[20px]'>Continue</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity
                className={`${disable ? 'bg-gray-500' : 'bg-[#AB33ED]'} rounded-xl items-center justify-center w-[60%] h-full`}
                disabled={disable}
                onPress={() => onPress()}>
                <Text className='text-white font-bold text-[20px]'>Continue</Text>
              </TouchableOpacity> */}
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default OTP;