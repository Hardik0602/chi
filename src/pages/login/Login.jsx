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
      <StatusBar barStyle={'light-content'}/>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className='flex-1 bg-[#A531E9]' style={{paddingTop:insets.top}}>
          <View className='h-[40%] items-center justify-center'>
            <Image
              source={log}
              resizeMode='contain'
              className='h-[80%] w-[60%]' />
          </View>
          <View className='h-[60%] bg-white rounded-t-[10%] p-[5%]' style={{paddingBottom:insets.bottom}}>
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



// import React, { useEffect, useState } from 'react';
// import { 
//   View, 
//   Text, 
//   Image, 
//   TouchableOpacity, 
//   Keyboard, 
//   TouchableWithoutFeedback, 
//   ScrollView,
//   Platform,
//   Dimensions
// } from 'react-native';
// import log from '../../../images/login.png';
// import InputField from '../../componants/InputField';
// import LoginHook from '../../hooks/LoginHook';

// const { height: screenHeight } = Dimensions.get('window');

// const Login = ({ navigation }) => {
//   const [mobile, setMobile] = useState('');
//   const [password, setPassword] = useState('');
//   const [disable, setDisable] = useState(true);
//   const [verified, setVerified] = useState(false);
//   const [keyboardVisible, setKeyboardVisible] = useState(false);
//   const [keyboardHeight, setKeyboardHeight] = useState(0);
//   const [screenData, setScreenData] = useState(Dimensions.get('window'));
  
//   const handleLogin = LoginHook();

//   useEffect(() => {
//     setDisable(!(mobile.trim() && password.trim()));
//   }, [mobile, password]);

//   // Universal keyboard handling for all Android versions
//   useEffect(() => {
//     const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e) => {
//       setKeyboardVisible(true);
//       setKeyboardHeight(e.endCoordinates.height);
//     });
    
//     const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
//       setKeyboardVisible(false);
//       setKeyboardHeight(0);
//     });

//     const dimensionsChangeListener = Dimensions.addEventListener('change', ({ window }) => {
//       setScreenData(window);
//     });

//     return () => {
//       keyboardDidShowListener?.remove();
//       keyboardDidHideListener?.remove();
//       dimensionsChangeListener?.remove();
//     };
//   }, []);

//   const onPress = () => {
//     handleLogin(mobile, password, setVerified);
//   };

//   useEffect(() => {
//     verified ? navigation.navigate('MainTab') : null;
//   }, [verified]);

//   // Calculate dynamic heights based on keyboard state
//   const availableHeight = screenData.height;
//   const headerHeight = keyboardVisible ? availableHeight * 0.25 : availableHeight * 0.4;
//   const contentHeight = keyboardVisible ? availableHeight * 0.75 : availableHeight * 0.6;

//   // Container style with dynamic adjustments
//   const containerStyle = {
//     flex: 1,
//     backgroundColor: '#A531E9',
//   };

//   const headerStyle = {
//     height: headerHeight,
//     alignItems: 'center',
//     justifyContent: 'center',
//     transition: 'height 0.3s ease',
//   };

//   const contentContainerStyle = {
//     height: contentHeight,
//     backgroundColor: 'white',
//     borderTopLeftRadius: screenData.width * 0.1,
//     borderTopRightRadius: screenData.width * 0.1,
//     padding: screenData.width * 0.05,
//     paddingBottom: keyboardVisible ? keyboardHeight * 0.1 : screenData.width * 0.05,
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: 'black' }}>
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View style={containerStyle}>
//           <View style={headerStyle}>
//             <Image
//               source={log}
//               resizeMode='contain'
//               style={{ 
//                 height: '80%', 
//                 width: '60%',
//                 maxHeight: keyboardVisible ? 120 : 200 
//               }}
//             />
//           </View>
          
//           <View style={contentContainerStyle}>
//             <ScrollView
//               contentContainerStyle={{ 
//                 flexGrow: 1, 
//                 justifyContent: keyboardVisible ? 'flex-start' : 'space-evenly',
//                 paddingBottom: 20,
//                 minHeight: contentHeight - (screenData.width * 0.1)
//               }}
//               keyboardShouldPersistTaps="handled"
//               showsVerticalScrollIndicator={false}
//               bounces={false}
//               overScrollMode="never"
//               nestedScrollEnabled={true}
//             >
//               <View style={{ 
//                 alignItems: 'center', 
//                 marginBottom: keyboardVisible ? 20 : 0 
//               }}>
//                 <Text style={{ 
//                   color: '#A531E9', 
//                   fontWeight: 'bold', 
//                   fontSize: keyboardVisible ? 32 : 40 
//                 }}>
//                   Login
//                 </Text>
//               </View>
              
//               <View style={{ marginBottom: keyboardVisible ? 15 : 0 }}>
//                 <View style={{ alignItems: 'center' }}>
//                   <Text style={{ 
//                     color: '#7034A4', 
//                     fontWeight: 'bold', 
//                     fontSize: 12,
//                     marginBottom: 20
//                   }}>
//                     Please login to continue using the app
//                   </Text>
//                   <InputField
//                     label={'Phone'}
//                     value={mobile}
//                     onChangeText={setMobile} 
//                   />
//                   <InputField
//                     label={'Password'}
//                     value={password}
//                     onChangeText={setPassword} 
//                   />
//                 </View>
//                 <View style={{ 
//                   flexDirection: 'row', 
//                   justifyContent: 'flex-end',
//                   marginTop: 10
//                 }}>
//                   <TouchableOpacity onPress={() => { navigation.replace('Forgetpass') }}>
//                     <Text style={{ color: '#8A99FD', fontSize: 13 }}>
//                       Forgot Password?
//                     </Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
              
//               <View style={{ 
//                 alignItems: 'center',
//                 height: keyboardVisible ? 'auto' : '25%',
//                 justifyContent: keyboardVisible ? 'flex-start' : 'center',
//                 paddingTop: keyboardVisible ? 10 : 0
//               }}>
//                 <TouchableOpacity
//                   style={{
//                     backgroundColor: disable ? '#6B7280' : '#AB33ED',
//                     borderRadius: 12,
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     width: '100%',
//                     height: 50,
//                     marginBottom: 15
//                   }}
//                   disabled={disable}
//                   onPress={() => onPress()}
//                 >
//                   <Text style={{ 
//                     color: 'white', 
//                     fontWeight: 'bold', 
//                     fontSize: 20 
//                   }}>
//                     Login
//                   </Text>
//                 </TouchableOpacity>
                
//                 <View style={{ 
//                   flexDirection: 'row',
//                   marginTop: keyboardVisible ? 10 : '8%'
//                 }}>
//                   <Text>Don't have an account?</Text>
//                   <TouchableOpacity onPress={() => { navigation.replace('Register') }}>
//                     <Text style={{ color: '#8D9AF0', marginLeft: 10 }}>
//                       Sign Up
//                     </Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </ScrollView>
//           </View>
//         </View>
//       </TouchableWithoutFeedback>
//     </View>
//   );
// };

// export default Login;