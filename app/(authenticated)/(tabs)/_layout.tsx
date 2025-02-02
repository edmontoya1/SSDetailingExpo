import { Tabs } from "@/components/Tabs";

export default function TabLayout() {
  return (
    <Tabs ignoresTopSafeArea hapticFeedbackEnabled>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => ({
            sfSymbol: focused ? "house.fill" : "house",
          }),
        }}
      />
      <Tabs.Screen
        name="service"
        options={{
          title: "Services",
          tabBarIcon: ({ focused }) => ({
            sfSymbol: focused ? "wrench.fill" : "wrench",
          }),
        }}
      />
      <Tabs.Screen
        name="appointment"
        options={{
          title: "Appointment",
          tabBarIcon: () => ({ sfSymbol: "house" }),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: () => ({ sfSymbol: "house" }),
        }}
      />
    </Tabs>
  );
}
