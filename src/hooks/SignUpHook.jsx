// import axios from 'axios';
// import { Alert } from 'react-native';
// const SignUpHook = () => {
//   const signUp = async (phone, pass, repass, setVerified) => {
//     try {
//       const response = await axios.post('http://10.0.2.2:5000/api/signup', {
//         phone,
//         password: pass,
//         confirmpassword: repass,
//       });
//       console.log('Response from /signup:', response.data);
//       if (response.data.msg === 'OTP sent for verification') {
//         setVerified(true);
//       } else {
//         setVerified(false);
//       }
//     } catch (error) {
//       setVerified(false);
//       console.log('Signup failed:', error?.response?.data || error.message);
//       Alert.alert('Signup Failed', error?.response?.data?.msg || 'Something went wrong');
//     }
//   };
//   return signUp;
// };
// export default SignUpHook;

import axios from 'axios';
import { Alert } from 'react-native';
const SignUpHook = () => {
  const signUp = async (email, pass, repass, setVerified) => {
    try {
      const response = await axios.post('http://10.0.2.2:6000/api/signup', {
        email,
        password: pass,
        confirmpassword: repass,
      });
      console.log('Response from /signup:', response.data);
      if (response.data.msg === 'OTP sent for verification') {
        setVerified(true);
      } else {
        setVerified(false);
      }
    } catch (error) {
      setVerified(false);
      console.log('Signup failed:', error?.response?.data || error.message);
      Alert.alert(
        'Signup Failed',
        error?.response?.data?.msg || 'Something went wrong'
      );
    }
  };
  return signUp;
};
export default SignUpHook;