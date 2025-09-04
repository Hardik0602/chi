import React from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import doc from '../../../images/welcometo.png'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const Welcome = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const isLoggedIn = false; // replace with check for login
  return (
    <View className="flex-1 bg-[#F6F6F6]" style={{ justifyContent: 'space-evenly', paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <StatusBar translucent backgroundColor='transparent' barStyle={'dark-content'} />
      <View className='items-center'>
        <Text className="text-[35px] font-bold text-black">Welcome to</Text>
        <Text className="text-[35px] font-bold text-[#AB33ED]">Dawa Sathi</Text>
      </View>
      <View className='items-center'>
        <Text className="text-[20px] text-[#777777]">Your health, your time, your Sathi.</Text>
      </View>
      <View className='items-center h-[20%]'>
        <Image
          source={doc}
          resizeMode='contain'
          className='w-full h-full' />
      </View>
      <View className='items-center h-[7%]'>
        <TouchableOpacity className='bg-[#AB33ED] rounded-xl h-full w-[80%] justify-center' onPress={() => { isLoggedIn ? navigation.replace('MainTab') : navigation.replace('Login') }}>
          <Text className='text-white font-bold text-center text-[20px]'>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Welcome;