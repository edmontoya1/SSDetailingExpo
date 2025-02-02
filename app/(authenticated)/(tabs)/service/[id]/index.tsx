import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

type Props = {};

const Page = (props: Props) => {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView>
      <Text>Page</Text>
    </SafeAreaView>
  );
};

export default Page;
