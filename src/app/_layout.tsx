import { Tabs } from "expo-router";
import { Icon } from "react-native-paper";
import { DefaultTheme, PaperProvider, Portal } from "react-native-paper";

export default function HomeLayout() {
  return (
    <PaperProvider theme={DefaultTheme}>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: () => <Icon source="home" size={20} />
          }}
        />
        <Tabs.Screen
          name="program"
          options={{
            title: "Program",
            tabBarIcon: () => <Icon source="view-list" size={20} />
          }}
        />
        <Tabs.Screen
          name="library"
          options={{
            headerShown: false,
            title: "Library",
            tabBarIcon: () => <Icon source="book" size={20} />
          }}
        />
        <Tabs.Screen
          name="appointment"
          options={{
            title: "Appointment",
            tabBarIcon: () => <Icon source="calendar-account" size={20} />
          }}
        />
      </Tabs>
    </PaperProvider>
  );
}
