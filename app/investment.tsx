import { CustomMaterialIcon } from "@/components/CustomIcon";
import Header from "@/components/Home/Header";
import Organizations from "@/components/Investment/Organizations";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const investment = () => {
  return (
    <>
      <StatusBar style="light" backgroundColor="#9c44dc" />
      <SafeAreaView className="flex-1">
        <ScrollView className="w-full flex-1">
          <Header />
          <View className="divide-y divide-gray-300">
            <View className="flex-1 w-full px-6 py-4 items-start">
              <TouchableOpacity
                activeOpacity={0.5}
                className="w-full flex-row justify-between mb-6"
              >
                <View className="gap-y-1">
                  <Text className="text-secondary-foreground text-lg font-semibold">
                    Total em investimentos
                  </Text>
                  <Text className="text-secondary-foreground/80 text-lg font-semibold">
                    {" "}
                    R$ 0,00{" "}
                  </Text>
                </View>
                <CustomMaterialIcon name="keyboard-arrow-right" color="gray" />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                className="bg-primary rounded-full px-4 py-2"
              >
                <Text className="text-white font-semibold"> Investir </Text>
              </TouchableOpacity>
            </View>
            <Organizations />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default investment;
