import axios from 'axios';
import { Alert } from 'react-native';
const LoginHook = () => {
  const logIn = async (phone, pass, setVerified) => {
    try {
      const response = await axios.post('http://10.0.2.2:5000/api/login', {
        phone,
        password: pass,
      });
      console.log('Response from /login:', response.data);
      if (response.data.message === 'Login Successful') {
        setVerified(true);
      } else {
        setVerified(false);
      }
    } catch (error) {
      setVerified(false);
      console.log('Signup failed:', error?.response?.data || error.message);
      Alert.alert('Signup Failed', error?.response?.data?.msg || 'Something went wrong');
    }
  };
  return logIn;
};
export default LoginHook;