import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { View, Text, TouchableOpacity } from "react-native";

type IconsRoutesProps = "index" | "investment" | "store";

export function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const icons = {
    index: (props: any) => (
      <FontAwesome6
        name="arrow-right-arrow-left"
        {...props}
        style={{
          transform: [{ rotate: "90deg" }],
        }}
      />
    ),
    investment: (props: any) => <FontAwesome6 name="dollar-sign" {...props} />,
    store: (props: any) => (
      <FontAwesome6 name="bag-shopping" {...props} />
    ),
  };

  const filteredRoutes = state.routes.filter((route) => {
    // Exclude routes that start with '+' or are named 'sitemap'
    return !route.name.startsWith("+") && route.name !== "_sitemap";
  });

  return (
    <View className="absolute bottom-4 flex-row w-1/2 items-center justify-between bg-secondary/95 backdrop-blur-xl left-28 rounded-full p-1 shadow-md"
    >
      {filteredRoutes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={route.name}
            className={`px-5 py-4 rounded-full ${isFocused ? "bg-muted/30" : "transparent text-secondary-foreground/60"}`}
          >
            <Text
              className={isFocused ? 'text-primary' : 'text-secondary-foreground/80' }
              style={{
                transform: [{ rotate: route.name === 'index' ? '90deg' : '0deg' }],
              }}
            >
              {icons[`${route.name as IconsRoutesProps}`]({ size: 22 })}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
