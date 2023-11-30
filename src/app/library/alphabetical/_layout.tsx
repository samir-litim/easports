import { Stack, Slot } from "expo-router";
import React from "react";
import { IconButton } from "react-native-paper";
import { router } from "expo-router";

export default function AlphabeticalLayout() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <IconButton icon="keyboard-backspace" onPress={() => router.back()}></IconButton>
          )
        }}
      />
      <Slot />
    </>
  );
}
