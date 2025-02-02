import {
  Stack,
  Slot,
  router,
  useRouter,
  useSegments,
  usePathname,
} from "expo-router";
import { ClerkProvider, ClerkLoaded, useAuth } from "@clerk/clerk-expo";
import { tokenCache } from "@/utils/cache";
import { Suspense, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { isRunningInExpoGo } from "expo";
import * as Sentry from "@sentry/react-native";
import { useNavigationContainerRef } from "@react-navigation/native";

const navigationIntegration = Sentry.reactNavigationIntegration({
  enableTimeToInitialDisplay: !isRunningInExpoGo(),
});

// Sentry.init({
//   dsn: "https://499237d44d9f9bd4a83ea3a4170b4c89@o4508673943011328.ingest.us.sentry.io/4508673945042944",
//   attachScreenshot: true,
//   tracesSampleRate: 1.0,
//   _experiments: {
//     profileSampleRate: 1.0,
//     replaysSessionSampleRate: 1.0, //CHANGE IN PROD
//     replaysOnErrorSampleRate: 1.0,
//   },
//   integrations: [
//     Sentry.mobileReplayIntegration({
//       maskAllImages: false,
//       maskAllText: false,
//       maskAllVectors: false,
//     }),
//     navigationIntegration,
//     Sentry.spotlightIntegration(),
//   ],
//   // uncomment the line below to enable Spotlight (https://spotlightjs.com)
//   // spotlight: __DEV__,
// });

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
  );
}

const InitialLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();
  const segments = useSegments();
  const pathName = usePathname();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(authenticated)";

    if (isSignedIn && !inAuthGroup) {
      router.replace("/(authenticated)/(tabs)/home");
    } else if (!isSignedIn && pathName !== "/") {
      router.replace("/");
    }
  }, [isLoaded, isSignedIn]);

  if (!isLoaded) {
    return (
      <View>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(authenticated)" options={{ headerShown: false }} />
    </Stack>
  );
};

function Loading() {
  return <ActivityIndicator size="large" color="blue" />;
}

const RootLayout = () => {
  const ref = useNavigationContainerRef();

  useEffect(() => {
    if (ref?.current) {
      navigationIntegration.registerNavigationContainer(ref);
    }
  }, [ref]);

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <ClerkLoaded>
        <Suspense fallback={<Loading />}>
          <InitialLayout />
        </Suspense>
      </ClerkLoaded>
    </ClerkProvider>
  );
};

export default RootLayout;
//export default Sentry.wrap(RootLayout);
