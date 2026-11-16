import * as Notifications from 'expo-notifications';
import { Tabs } from 'expo-router';
import { Text } from 'react-native';

//Global Foreground Handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function TabLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: '#FFFFFF' , tabBarStyle: {
      backgroundColor: "#1E293B",
      borderTopWidth: 0,
      height: 75},
      tabBarInactiveTintColor: '#94A3B8',
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: 600,
      },
      headerStyle: {
        backgroundColor: '#1E293B'
      },
      headerTintColor: "#FFFFFF",
      headerTitleStyle: {
        fontSize: 22,
        fontWeight: 'bold',
      }, 
      headerTitleAlign: 'center',
      headerShadowVisible: false,
    }}>
      <Tabs.Screen
        name="index"
        options={{ title: 'Reminder', tabBarIcon: () => <Text>⏰</Text> }}
      />
      <Tabs.Screen
        name="tips"
        options={{ title: 'Tips', tabBarIcon: () => <Text>💧</Text> }}
      />
      <Tabs.Screen
        name="about"
        options={{ title: 'About', tabBarIcon: () => <Text>ℹ️</Text> }}
      />
    </Tabs>
  );
}
