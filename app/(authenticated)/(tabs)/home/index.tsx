import { View, Text, SafeAreaView, Button } from "react-native";
import React from "react";
import * as Sentry from "@sentry/react-native";

const Page = () => {
  const testFunction = () => {
    throw new Error("Test Error is thrown");
  };
  return (
    <SafeAreaView>
      <Text>Page</Text>
      <Button
        title="Try!"
        onPress={() => {
          Sentry.captureException(new Error("First error"));
        }}
      />
      <Button title="try custom error" onPress={testFunction} />
    </SafeAreaView>
  );
};

export default Page;
