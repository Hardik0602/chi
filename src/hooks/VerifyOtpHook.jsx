import axios from 'axios';
import { Alert } from 'react-native';

const VerifyOtpHook = () => {
    const verifyOtp = async (phone, otp, setVerified) => {
        try {
            const response = await axios.post('http://10.0.2.2:5000/api/verifyotp', {
                phone,
                otp,
            });
            console.log('Response from /verifyotp:', response.data);
            if (response.data.msg === 'OTP Verified Successfully') {
                setVerified(true);
            } else {
                setVerified(false);
            }
        } catch (error) {
            setVerified(false);
            console.log('OTP Verification failed:', error?.response?.data || error.message);
            Alert.alert('Verification Failed', error?.response?.data?.msg || 'Something went wrong');
        }
    };
    return verifyOtp;
};
export default VerifyOtpHook;