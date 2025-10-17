import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <View style={styles.globalMargin}>
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "none", // disables transition animation globally
          }}
        >
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="modal" options={{ presentation: "modal", title: "Modal" }} />
          <Stack.Screen name="sendersavingpage" />
        </Stack>
      </View>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  globalMargin: {
    flex: 1,
    marginTop: 40, // 👈 adjust as needed
  },
});
