import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import TabBar from '@/components/TabBar';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    tabBar={props => <TabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Actividad',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
          headerShown:false
        }}
        
      />
      <Tabs.Screen
      
        name="explore"
        options={{
          title: 'Presupuesto',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
          headerShown:false
        }}
      />
      <Tabs.Screen
        
        name="more"
        options={{
          title: 'Mas',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
          headerShown:false
        }}
      />
    </Tabs>
  );
}
