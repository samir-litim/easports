import { ExpoRoot } from "expo-router";
import Head from "expo-router/head";
import { ctx } from "expo-router/_ctx";

export function App() {
  return (
    <Head.Provider>
      <ExpoRoot context={ctx} />
    </Head.Provider>
  );
}
