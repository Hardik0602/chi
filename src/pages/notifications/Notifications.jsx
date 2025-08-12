import React from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const Notification = ({ title, message, title_color }) => {
    return (
        <View className='px-[3%] py-[3%] m-[5%] bg-white w-[90%] shadow-md shadow-black rounded-xl'>
            <Text className={'font-bold text-[21px] text-center'} style={{ color: title_color }}>{title}</Text>
            <Text className='text-[#686868] font-bold text-[13px] text-center'>{message}</Text>
        </View>
    )
}
const Notifications = () => {
    const insets = useSafeAreaInsets();
    return (
        <View className='flex-1 bg-white'>
            <StatusBar barStyle={'light-content'} />
            <View className='h-[86%]'>
                <View className='h-[33%] w-full items-center'>
                    <View className='items-center justify-center bg-[#A531E9] w-[110%] h-full rounded-b-full'>
                        <Text className='text-white text-[35px] font-bold'>Notification</Text>
                    </View>
                </View>
                <View className='h-[67%]'>
                    <View className='flex-row justify-center '>
                        {/* <TouchableOpacity>
                            <Text className='text-[#A531E9] text-[30px] font-bold'>&lt;</Text>
                        </TouchableOpacity> */}
                        <Text className='text-[#A531E9] text-[30px] font-bold mx-[10%]'>Today</Text>
                        {/* <TouchableOpacity>
                            <Text className='text-[#A531E9] text-[30px] font-bold'>&gt;</Text>
                        </TouchableOpacity> */}
                    </View>
                    <ScrollView
                        contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-evenly', alignItems: 'center' }}
                        showsVerticalScrollIndicator={false}>
                        <Notification title={'ALERT !'} title_color={'#FF0000'} message={'Today morning dose is not taken yet .'} />
                        <Notification title={'Hey User !'} title_color={'#222222'} message={'Today morning dose is taken late at 9:25 AM .'} />
                        <Notification title={'Hey User !'} title_color={'#FF0000'} message={"It's time to take your medicine - your health matters!"} />
                        <Notification title={'Alert !'} title_color={'#FF0000'} message={"Your medicine schedule is empty - let's add your dose"} />
                        <Notification title={'Hey User !'} title_color={'#FF0000'} message={'Skipping doses can lead to complications. Stay disciplined'} />
                        <Notification title={'ALERT !'} title_color={'#FF0000'} message={'Today morning dose is not taken yet .'} />
                        <Notification title={'Hey User !'} title_color={'#222222'} message={'Today morning dose is taken late at 9:25 AM .'} />
                        <Notification title={'Hey User !'} title_color={'#FF0000'} message={"It's time to take your medicine - your health matters!"} />
                        <Notification title={'Alert !'} title_color={'#FF0000'} message={"Your medicine schedule is empty - let's add your dose"} />
                        <Notification title={'Hey User !'} title_color={'#FF0000'} message={'Skipping doses can lead to complications. Stay disciplined'} />
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};
export default Notifications;