import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, TouchableWithoutFeedback } from 'react-native';
import Home from '../pages/home/Home';
import Schedules from '../pages/schedules/Schedules';
import Notifications from '../pages/notifications/Notifications';
import home_icon from '../../images/home_icon.png';
import schedule_icon from '../../images/schedule_icon.png';
import notification_icon from '../../images/notification_icon.png';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const Tab = createBottomTabNavigator();
const NoFeedbackButton = ({ children, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View className='flex-1 items-center justify-center'>{children}</View>
  </TouchableWithoutFeedback>
);
const MainTab = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'shift',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: () => null,
            tabBarButton: NoFeedbackButton,
            tabBarStyle: {
              position: 'absolute',
              width: '80%',
              bottom: '3%',
              marginLeft: '10%',
              borderRadius: 30,
              height: '8%',
              backgroundColor: 'white',
              shadowColor: '#A532E9'
            },
            tabBarIcon: ({ focused }) => (
              <View className='h-[150%] w-[150%]'>
                <Image
                  source={home_icon}
                  style={{
                    width: '100%',
                    height: '100%',
                    tintColor: focused ? null : '#1C1C1E',
                    resizeMode: 'contain'
                  }} />
              </View>
            ),
          }} />
        <Tab.Screen
          name="Schedules"
          component={Schedules}
          options={{
            tabBarLabel: () => null,
            tabBarButton: NoFeedbackButton,
            tabBarStyle: {
              position: 'absolute',
              width: '80%',
              bottom: '3%',
              marginLeft: '10%',
              borderRadius: 30,
              height: '8%',
              backgroundColor: '#A531E9',
              shadowColor: '#A532E9'
            },
            tabBarIcon: ({ focused }) => (
              <View className='h-[150%] w-[150%]'>
                <Image
                  source={schedule_icon}
                  style={{
                    width: '100%',
                    height: '100%',
                    tintColor: focused ? 'white' : '#1C1C1E',
                    resizeMode: 'contain'
                  }} />
              </View>
            ),
          }} />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: () => null,
            tabBarButton: NoFeedbackButton,
            tabBarStyle: {
              position: 'absolute',
              width: '80%',
              bottom: '3%',
              marginLeft: '10%',
              borderRadius: 30,
              height: '8%',
              backgroundColor: '#A531E9',
              shadowColor: '#A532E9'
            },
            tabBarIcon: ({ focused }) => (
              <View className='h-[150%] w-[150%]'>
                <Image
                  source={notification_icon}
                  style={{
                    width: '100%',
                    height: '100%',
                    tintColor: focused ? 'white' : '#1C1C1E',
                    resizeMode: 'contain'
                  }} />
              </View>
            ),
          }} />
      </Tab.Navigator>
    </View>
  );
};
export default MainTab;