import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { CustomMaterialIcon } from "../CustomIcon";

const CreditCard = () => {
  return (
    <TouchableOpacity activeOpacity={.6} className="w-full px-6 py-4 gap-y-4">
      <View className="flex-row justify-between">
        <View className="gap-y-2">
          <Text className="text-lg font-semibold"> Cartão de crédito </Text>
          <View className="gap-y-1">
            <Text className=""> Fatura atual </Text>
            <Text className="text-lg font-semibold"> R$ 205,08</Text>
          </View>
        </View>
        <CustomMaterialIcon name="keyboard-arrow-right" color="gray" />
      </View>
      <View className="items-start">
        <Text> Limite disponível de R$ 423,58 </Text>
        <Text>
            A fatura nem fechou e já pesou? Parcele parte do valor e alivie a fatura.
        </Text>
        <Pressable className="p-2 rounded-full bg-gray-200 mt-4">
            <Text className="font-semibold text-secondary-foreground"> Aliviar fatura </Text>
        </Pressable>
      </View>
    </TouchableOpacity>
  );
};

export default CreditCard;
