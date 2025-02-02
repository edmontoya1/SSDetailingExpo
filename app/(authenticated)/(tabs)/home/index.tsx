import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { Colors } from "@/constants/Colors";
import { ServiceCardProps } from "@/app/types";
import ServiceCard from "@/components/ServiceCard";
import { useRouter } from "expo-router";

const Page = () => {
  const { user } = useUser();
  const router = useRouter();

  const testServices: ServiceCardProps[] = [
    {
      title: "Interior Detailing",
      imageUrl: user?.imageUrl!,
    },
    { title: "Exterior Detailing", imageUrl: user?.imageUrl! },
    { title: "Add On Services", imageUrl: user?.imageUrl! },
    {
      title: "Ceramic Coating",
      imageUrl: user?.imageUrl!,
    },
    // Add more services here if needed
  ];

  const handleServiceClick = (service: ServiceCardProps) => {
    router.navigate(`/(authenticated)/(tabs)/service/${service.title}`);
  };

  const handleProfileImageClick = () => {
    router.navigate("/(authenticated)/(tabs)/profile");
  };

  const renderDetailingServices = () => (
    <View>
      <Text
        style={{
          marginHorizontal: 30,
          marginVertical: 10,
          fontSize: 24,
          fontWeight: "500",
          opacity: 0.5,
        }}
      >
        Detailing Services
      </Text>
    </View>
  );

  const renderMaintenancePlans = () => (
    <View>
      <Text
        style={{
          marginHorizontal: 30,
          marginVertical: 20,
          fontSize: 24,
          fontWeight: "400",
          opacity: 0.5,
        }}
      >
        Maintenance Plans
      </Text>

      <View style={{ alignSelf: "center" }}>
        <ServiceCard
          service={testServices[0]}
          hero={true}
          key={testServices[0].title + 1}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primaryLightGray }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 30,
        }}
      >
        <View style={{ gap: 5 }}>
          <Text style={{ fontWeight: 300 }}>
            Welcome to{" "}
            <Text style={{ color: Colors.primaryGreen }}>SS Detailing</Text>
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            {user?.fullName}
          </Text>
        </View>
        <TouchableOpacity onPress={handleProfileImageClick}>
          <Image
            source={{ uri: user?.imageUrl }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              borderWidth: 0.5,
            }}
          />
        </TouchableOpacity>
      </View>

      {/* Use FlatList for both the services and footer */}
      <FlatList
        contentContainerStyle={{
          paddingBottom: 50,
          backgroundColor: Colors.white,
        }}
        data={testServices}
        keyExtractor={(item) => item.title}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderDetailingServices}
        ListFooterComponent={renderMaintenancePlans}
        columnWrapperStyle={{
          marginHorizontal: 30,
          marginVertical: 10,
          justifyContent: "space-evenly",
        }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleServiceClick(item)}>
            <ServiceCard service={item} hero={false} key={item.title} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Page;
