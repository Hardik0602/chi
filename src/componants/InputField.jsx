import React from 'react';
import { View, Text, TextInput } from 'react-native';
const InputField = ({ label, value, onChangeText, status, message }) => {
  const getBorderColor = () => {
    switch (status) {
      case 'error':
        return 'border-red-500';
      case 'success':
        return 'border-green-500';
      default:
        return 'border-gray-300';
    }
  };
  return (
    <View className='mb-4 w-full'>
      {label && <Text className='mb-1 font-bold text-gray-700'>{label}</Text>}
      <TextInput
        className={`border rounded-lg px-3 py-2 ${getBorderColor()}`}
        placeholder={label}
        placeholderTextColor='#333333'
        value={value}
        onChangeText={onChangeText} />
      {message && (
        <Text
          className={`mt-1 text-sm ${status === 'error' ? 'text-red-500' : status === 'success' ? 'text-green-500' : 'text-gray-500'
            }`}>
          {message}
        </Text>
      )}
    </View>
  );
};
export default InputField;