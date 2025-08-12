import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity, StatusBar } from 'react-native';
import moment from 'moment';
import morning from '../../../images/morning.png';
import afternoon from '../../../images/afternoon.png';
import evening from '../../../images/evening.png';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const Time = ({ photo, time, time_of_day, onPress, isVisible, expand, selectTime }) => {
    if (!isVisible)
        return null;
    const hour = moment(time).format('hh');
    const minute = moment(time).format('mm');
    const am_pm = moment(time).format('A');
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View className={`bg-white ${expand ? 'flex-1' : 'h-[30%]'} mt-[3%] shadow-md shadow-black justify-center items-center rounded-xl`}>
                <View className={`flex-row p-[1%] ${expand ? 'h-[30%] mb-[10%]' : 'h-full'}`}>
                    <View className={`justify-center items-center h-full w-[30%]`}>
                        <Text className='text-[16px] font-bold text-[#A531E9]'>{time_of_day}</Text>
                        <Image
                            source={photo}
                            className='w-[70%]'
                            resizeMode='contain' />
                    </View>
                    <View className='w-[70%] items-center justify-center flex-row'>
                        <View className='mr-[5%]'>
                            <Text className='text-[#9838CD] font-bold text-[45px]'>{hour}</Text>
                        </View>
                        <View className='mr-[5%]'>
                            <Text className='text-[#9838CD] font-bold text-[45px]'>:</Text>
                        </View>
                        <View className='mr-[5%]'>
                            <Text className='text-[#9838CD] font-bold text-[45px]'>{minute}</Text>
                        </View>
                        {/* <View>
                            <Text className='text-[#9838CD] font-bold text-[25px]'>{am_pm}</Text>
                        </View> */}
                    </View>
                </View>
                {expand ?
                    <View className='w-[90%] items-center'>
                        <TouchableOpacity className='bg-[#9838CD] w-[80%] h-[55px] items-center justify-center rounded-3xl' onPress={selectTime}>
                            <Text className='text-[30px] text-white font-bold'>Change Time</Text>
                        </TouchableOpacity>
                    </View>
                    : null}
            </View>
        </TouchableWithoutFeedback>
    );
};
const Schedules = () => {
    const insets = useSafeAreaInsets();
    const [monthDates, setMonthDates] = useState([]);
    const [monthLabel, setMonthLabel] = useState('');
    const [activeTime, setActiveTime] = useState(null);
    const [showPicker, setShowPicker] = useState(false);
    const [timeSlot, setTimeSlot] = useState(null);
    const [times, setTimes] = useState({
        // Morning: new Date(),
        // Afternoon: new Date(),
        // Evening: new Date()
        Morning: new Date(new Date().setHours(5, 30)),
        Afternoon: new Date(new Date().setHours(12, 30)),
        Evening: new Date(new Date().setHours(19, 30))
    });
    useEffect(() => {
        const startOfMonth = moment().startOf('month');
        const endOfMonth = moment().endOf('month');
        const startDate = moment(startOfMonth).startOf('isoWeek');
        const endDate = moment(endOfMonth).endOf('isoWeek');
        const dateCursor = moment(startDate);
        const allWeeks = [];
        while (dateCursor.isSameOrBefore(endDate)) {
            const week = [];
            for (let i = 0; i < 7; i++) {
                week.push({
                    date: dateCursor.format('YYYY-MM-DD'),
                    number: dateCursor.format('D'),
                    isCurrentMonth: dateCursor.month() === startOfMonth.month(),
                    isToday: dateCursor.isSame(moment(), 'day')
                });
                dateCursor.add(1, 'day');
            }
            allWeeks.push(week);
        }
        setMonthDates(allWeeks);
        setMonthLabel(startOfMonth.format('MMMM'));
    }, []);
    const toggleTime = (time) => {
        setActiveTime((prev) => (prev === time ? null : time));
    };
    const handleTimeChange = (event, selectedDate) => {
        if (event.type === 'set' && selectedDate) {
            setTimes(prev => ({ ...prev, [timeSlot]: selectedDate }));
            setActiveTime(null);
        }
        setShowPicker(false);
    };
    return (
        <View className='flex-1 bg-white'>
            <StatusBar barStyle={'light-content'} />
            <View className='h-[86%] items-center' style={{ paddingTop: insets.top }}>
                <View className='h-[40%] w-full items-center absolute'>
                    <View className='items-center justify-center bg-[#A531E9] w-[110%] h-full rounded-b-full' />
                </View>
                <View className='w-[80%] h-[94%]'>
                    <View className='mb-[5%]'>
                        <Text className='text-white text-[35px] font-bold text-center'>Schedules</Text>
                    </View>
                    <View className='bg-[#FAF9F6] h-[40%] mb-[5%] items-center justify-center rounded-3xl shadow-xl shadow-black'>
                        <View className='bg-white w-[93%] h-[93%] rounded-xl p-[1%] items-center justify-center'>
                            <Text className="text-[20px] font-bold text-[#9838CD] mb-[3%]">{monthLabel}</Text>
                            <View className="flex-row w-full justify-between px-[1%] mb-[2%]">
                                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                                    <Text key={day} className="text-[15px] font-bold text-[#B0B0B0] w-[13%] text-center">{day}</Text>
                                ))}
                            </View>
                            {monthDates.map((week, idx) => (
                                <View key={idx} className="flex-row w-full justify-between mb-[1%] px-[1%]">
                                    {week.map((day) => (
                                        <View key={day.date} className={`items-center w-[13%] py-1 rounded-full ${day.isToday ? 'bg-[#AB33ED]' : 'bg-transparent'}`}>
                                            <Text className={`text-[15px] font-bold ${day.isToday ? 'text-white' : day.isCurrentMonth ? 'text-[#171D1B]' : 'text-[#D2C9DE]'}`}>
                                                {day.number}
                                            </Text>
                                        </View>
                                    ))}
                                </View>
                            ))}
                        </View>
                    </View>
                    <View className='h-[47%] mt-[10%]'>
                        <Text className='text-[#9838CD] font-bold text-[20px] text-center'>Today's Schedules</Text>
                        <View className='flex-1'>
                            <Time time_of_day={'Morning'} photo={morning} time={times.Morning} onPress={() => toggleTime('Morning')} expand={activeTime === 'Morning'} isVisible={activeTime === null || activeTime === 'Morning'} selectTime={() => { setTimeSlot('Morning'), setShowPicker(true) }} />
                            <Time time_of_day={'Afternoon'} photo={afternoon} time={times.Afternoon} onPress={() => toggleTime('Afternoon')} expand={activeTime === 'Afternoon'} isVisible={activeTime === null || activeTime === 'Afternoon'} selectTime={() => { setTimeSlot('Afternoon'), setShowPicker(true) }} />
                            <Time time_of_day={'Evening'} photo={evening} time={times.Evening} onPress={() => toggleTime('Evening')} expand={activeTime === 'Evening'} isVisible={activeTime === null || activeTime === 'Evening'} selectTime={() => { setTimeSlot('Evening'), setShowPicker(true) }} />
                        </View>
                        {showPicker && (
                            <DateTimePicker
                                mode="time"
                                display="clock"
                                value={times[timeSlot] || new Date()}
                                onChange={handleTimeChange}
                                is24Hour={false} />
                        )}
                    </View>
                </View>
            </View>
        </View>
    );
};
export default Schedules;