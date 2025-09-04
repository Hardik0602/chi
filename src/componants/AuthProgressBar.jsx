import React from 'react';
import { View } from 'react-native';
const AuthProgressBar = ({ progress }) => {
    return (
        <View className="h-[10px] mb-8 bg-[#E2E1F3] w-[40%] rounded-xl">
            <View className={`h-full ${progress} bg-[#AB33ED] rounded-xl`} />
        </View>
    );
};
export default AuthProgressBar;