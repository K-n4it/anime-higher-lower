import React from 'react';
import { Tabs } from 'expo-router';

export default function TabsLayout() {

  return (
     <>
     <Tabs 
     initialRouteName="main" 
     screenOptions={{ 
      tabBarShowLabel: false, 
      tabBarActiveTintColor: "#FFA001", 
      tabBarInactiveTintColor: "#CDCDE0", 
      tabBarStyle: {
        tabBarStyle: "#161622", 
        borderTopWidth: 1, 
        borderTopColor: "#232533", 
        height: 70
      }
     }}>

      <Tabs.Screen 
        name="main" 
        options={{
          title: "Main",
          headerShown: false
        }} 
      />

      <Tabs.Screen 
        name="settings" 
        options={{
          title: "Settings",
          headerShown: false
        }} 
      />
      
     </Tabs>
     </>
  );
}
