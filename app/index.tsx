import { useOAuth } from "@clerk/clerk-expo";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";

export default function Index() {
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const handleGoogleOAuth = async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow();

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const openLink = async () => {
    await WebBrowser.openBrowserAsync("www.google.com");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <TouchableOpacity onPress={handleGoogleOAuth}>
        <Ionicons name="logo-google" size={24} color="white" />
        <Text>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
}
