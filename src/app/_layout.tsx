import { Tabs } from "expo-router";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { DefaultTheme, PaperProvider, Portal } from "react-native-paper";

export default function HomeLayout() {
  return (
    <PaperProvider theme={DefaultTheme}>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: () => <Icon name="home" />
          }}
        />
        <Tabs.Screen
          name="program"
          options={{
            title: "Program",
            tabBarIcon: () => <Icon name="list" />
          }}
        />
        <Tabs.Screen
          name="library"
          options={{
            title: "Library",
            tabBarIcon: () => <Icon name="book" />
          }}
        />
        <Tabs.Screen
          name="appointment"
          options={{
            title: "Appointment",
            tabBarIcon: () => <Icon name="calendar" />
          }}
        />
      </Tabs>
    </PaperProvider>
  );
}
