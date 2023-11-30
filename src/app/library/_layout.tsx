import { Stack, Slot } from "expo-router";
import React from "react";
import { Button } from "react-native-elements";
import { router } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: true
        }}
      />
    </>
  );
}
