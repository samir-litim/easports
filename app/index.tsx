import { Button, Text, View } from "react-native";

import tw from "@/lib/tailwind";
import { useSupabase } from "@/context/useSupabase";
import { useEffect, useState } from "react";
import { Video, ResizeMode } from "expo-av";
import React from "react";

export default function Index() {
  const { signOut, getVideos } = useSupabase();
  const [videos, setVideos] = useState<any[]>([]);
  const [status, setStatus] = React.useState({});
  const video = React.useRef(null);

  useEffect(() => {
    (async () => {
      setVideos(await getVideos());
    })();
  }, []);

  console.log(videos);

  return (
    <View style={tw`flex-1 items-center justify-center bg-background dark:bg-dark-background`}>
      {videos.map((v) => {
        return (
          <View>
            <Text style={tw`h3 text-foreground dark:text-dark-foreground`}>{v.title}</Text>
            <Video
              ref={video}
              key={v.id}
              style={{
                width: 300,
                height: 200
              }}
              source={{
                uri: v.metadata.url
              }}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
              isLooping
            />
          </View>
        );
      })}
      <Text style={tw`h1 text-foreground dark:text-dark-foreground`} onPress={() => signOut()}>
        Sign Out
      </Text>
    </View>
  );
}
