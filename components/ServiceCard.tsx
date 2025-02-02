import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { ServiceCardProps } from "@/app/types";

type Props = {
  service: ServiceCardProps;
  hero: boolean;
};

const { width: screenWidth } = Dimensions.get("window");

const ServiceCard = ({ service, hero }: Props) => {
  return (
    <View
      style={{
        width: hero ? screenWidth * 0.8 : 130,
        height: hero ? "auto" : 150,
        borderRadius: 10,
        justifyContent: "center",
        backgroundColor: "#f0f0f0",
        // iOS shadow
        shadowColor: "#000", // Set shadow color
        shadowOffset: { width: 0, height: 4 }, // Offset from the component
        shadowOpacity: 0.3, // Shadow opacity
        shadowRadius: 2, // Blur radius
        // Android shadow
        elevation: 5, // Elevation for Android shadow
        padding: 10,
      }}
    >
      <View style={{ alignItems: "center", gap: 10, justifyContent: "center" }}>
        <Text style={{ fontSize: 12, fontWeight: "400" }}>{service.title}</Text>
        <Image
          source={{ uri: service.imageUrl }} // Assuming you're using an external URL for images
          style={{
            width: hero ? "90%" : 100,
            height: hero ? 300 : 100,
            borderRadius: 10,
            borderWidth: 0.5,
          }}
          resizeMode="cover" // Prevent stretching
        />
      </View>
    </View>
  );
};

export default ServiceCard;
