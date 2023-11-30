import { Tabs } from "expo-router";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Session } from "@supabase/supabase-js";
import tw from "@/lib/tailwind";

export default function RootLayout() {
  return (
    <Tabs sceneContainerStyle={tw`bg-dark-background dark:bg-dark-background`}>
      <Tabs.Screen
        name="index"
        options={{
          title: "App",
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />
        }}
      />
      <Tabs.Screen
        name="test"
        options={{
          title: "Test",
          tabBarIcon: ({ color, size }) => <Ionicons name="alarm" color={color} size={size} />
        }}
      />
    </Tabs>
  );
}
