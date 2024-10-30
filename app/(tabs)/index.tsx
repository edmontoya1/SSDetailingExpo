import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";

export default function home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam,
        voluptates temporibus impedit magnam voluptas optio? Natus quo ipsam sit
        accusantium a repellat suscipit eos, numquam sapiente sed blanditiis
        quis fugiat.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 100,
    fontWeight: "900",
    color: Colors.green.primary.color,
  },
  description: {
    color: Colors.yellow.primary.color,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
