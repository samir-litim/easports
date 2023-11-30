import { ScrollView, TouchableOpacity, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { globalStyles } from "@src/styles";
import { AlphabetList } from "react-native-section-alphabet-list";
import { useRouter } from "expo-router";

const exerciceNames = [
  "Abdominaux",
  "Biceps",
  "Cardio",
  "Cuisses",
  "Dos",
  "Epaules",
  "Pectoraux",
  "Triceps",
  "Tout le corps",
  "Trapèzes",
  "Avant bras",
  "Mollets",
  "Fessiers",
  "Ischios",
  "Adducteurs",
  "Abducteurs",
  "Quadriceps",
  "Musculation",
  "Stretching",
  "Yoga",
  "Pilates",
  "Crossfit",
  "HIIT",
  "Circuit training",
  "MMA",
  "Boxe"
]
  .sort()
  .map((el) => ({ value: el, key: el }));

export default function Alphabetical() {
  const router = useRouter();

  return (
    <ScrollView style={globalStyles.container}>
      <Text>Library</Text>
      <AlphabetList
        data={exerciceNames}
        renderCustomItem={(item) => (
          <View style={styles.listItemContainer}>
            <Button
              style={{
                marginVertical: 5,
                borderRadius: 5
              }}
              onPress={() => router.push(`/library/alphabetical/${item.value}`)}
            >
              {item.value}
            </Button>
          </View>
        )}
        renderCustomSectionHeader={(section) => (
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeaderLabel}>{section.title}</Text>
          </View>
        )}
      />
      {/* {exerciceNames.map((name) => (
        <Button
          mode="contained"
          style={{
            marginVertical: 5,
            borderRadius: 5
          }}
        >
          {name}
        </Button>
      ))} */}
    </ScrollView>
  );
}

const styles = {
  sectionHeaderContainer: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 8,
    paddingHorizontal: 15
  },
  sectionHeaderLabel: {
    color: "#8E8E93"
  },
  listItemContainer: {
    height: 50,
    paddingHorizontal: 15
  },
  listItemLabel: {
    color: "#007AFF"
  },
  letterContainer: {
    backgroundColor: "#007AFF",
    borderRadius: 15,
    height: 30,
    width: 30,
    margin: 10,
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  letterLabel: {
    color: "#FFFFFF",
    paddingHorizontal: 5,
    fontSize: 13
  }
};
