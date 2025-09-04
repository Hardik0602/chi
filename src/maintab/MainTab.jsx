import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native'
import Home from '../pages/home/Home'
import Schedules from '../pages/schedules/Schedules'
import Notifications from '../pages/notifications/Notifications'
import home_icon from '../../images/home_icon.png'
import schedule_icon from '../../images/schedule_icon.png'
import notification_icon from '../../images/notification_icon.png'
const Tab = createBottomTabNavigator()
const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        animation: 'shift',
        tabBarStyle: {
          position: 'absolute',
          bottom: '3%',
          marginHorizontal: 50,
          borderRadius: 25,
          height: 60,
          shadowColor: route.name === 'Home' ? '#A532E9' : '#FFFFFF',
          // shadowOffset: { width: 0, height: 10 },
          // shadowRadius: 10,
          // shadowOpacity: 0.1,
          backgroundColor: route.name === 'Home' ? '#FFFFFF' : '#A532E9',
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          let icon
          if (route.name === 'Home') icon = home_icon
          else if (route.name === 'Schedules') icon = schedule_icon
          else if (route.name === 'Notifications') icon = notification_icon
          return (
            <Image
              source={icon}
              className="w-[50px] h-[50px] mt-[15px]"
              style={{
                tintColor: focused
                  ? route.name === 'Home'
                    ? '#A532E9'
                    : '#FFFFFF'
                  : '#000000',
              }} />
          )
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Schedules" component={Schedules} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  )
}
export default MainTab