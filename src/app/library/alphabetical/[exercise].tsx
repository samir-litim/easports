import { Text } from "react-native-paper";
import { useLocalSearchParams } from "expo-router";

export default function Exercice() {
  const { exercise } = useLocalSearchParams();
  return <Text>welcome to the exercise: {exercise}</Text>;
}
