import React from 'react';
import { View, Image, Text, StyleSheet, StatusBar } from 'react-native';
import { Tabs } from 'expo-router';

import icons from "../../constants/icons";

const TabIcon = ({ icon, color, title, focused }) => {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.icon}
        source={icon} 
        resizeMode='contain' 
        tintColor={color} 
      />

      <Text style={[focused && styles.title, { color: color, fontSize: 10, textAlign: "center" }]}>
        {title}
      </Text>
    </View>
  );
};

export default function TabsLayout() {

  return (
     <>
     <Tabs 
     initialRouteName="main" 
     screenOptions={{ 
      tabBarShowLabel: false, 
      tabBarActiveTintColor: "#00C6CF", 
      tabBarInactiveTintColor: "#FFFFFF", 
      tabBarStyle: {
        backgroundColor: "#3A3A3A",
        tabBarStyle: "#161622", 
        borderTopWidth: 0, 
        height: 80
      }
     }}>

      <Tabs.Screen 
        name="main" 
        options={{
          title: "Main",
          headerShown: false, 
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.game} 
              color={color} 
              title={"Main menu"} 
              focused={focused}
            />
          )
        }} 
      />

      <Tabs.Screen 
        name="settings" 
        options={{
          title: "Settings",
          headerShown: false, 
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.gear} 
              color={color} 
              title={"Settings"} 
              focused={focused}
            />
          )
        }} 
      />
     </Tabs>

     <StatusBar 
        backgroundColor="#0F0F0F" 
        barStyle="light-content"
      />
     </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 }, 
  icon: {
    width: 40,
    height: 40
  },
  title: {
    textAlign: "center",
    fontWeight: "bold"
  }
});
