import { ScrollView, Image, View, Dimensions, Touchable, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
const baseUrl = "https://gehljpapohcarkaaaess.supabase.co/storage/v1/object/public/assets/";
const urls = [
  { name: "abmat", url: "abmat.png" },
  { name: "bar", url: "bar.png" },
  { name: "box", url: "box.png" },
  { name: "dumbell", url: "dumbell.png" },
  { name: "dumbell_2", url: "dumbell_2.png" },
  { name: "elastic", url: "elastic.png" },
  { name: "kettlebell", url: "kettlebell.png" },
  { name: "roller", url: "roller.png" },
  { name: "swiss ball", url: "swiss_ball.png" }
];

export default function Material() {
  const router = useRouter();
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 10,
          marginVertical: 200
        }}
      >
        {urls.map(({ name, url }) => (
          <TouchableOpacity onPress={() => router.push(`/library/alphabetical`)}>
            <Image
              key={name}
              source={{ uri: baseUrl + url }}
              style={{
                width: 100,
                height: 100
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
