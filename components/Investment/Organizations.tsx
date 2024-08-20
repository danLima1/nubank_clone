import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import { CustomMaterialCommunityIcon, CustomMaterialIcon } from "../CustomIcon";
import { CRIPTOSDATA, INSURANCES } from "@/constants/Operations";

const Organizations = () => {
  return (
    <View className="">
      <View className="flex-row space-x-2 border-b border-gray-200 px-6 py-4">
        <Pressable className="space-y-1">
          <View className="bg-primary/20 items-center justify-center w-[100px] h-[100px] rounded-lg px-2 py-4">
            <CustomMaterialCommunityIcon
              name="signal"
              size={32}
              color="#9c44dc"
            />
          </View>
          <View>
            <Text className="text-xs font-semibold text-secondary-foreground">
              {" "}
              Investimentos{" "}
            </Text>
            <Text className="text-secondary-foreground/70 text-xs">
              R$ 0,00
            </Text>
          </View>
        </Pressable>
        <Pressable className="space-y-1 items-start">
          <View className="bg-primary/20 justify-end w-[100px] h-[100px] rounded-lg px-2 py-4">
            <Text className="text-lg font-semibold text-primary">Caixinhas</Text>
          </View>
          <View className="bg-primary px-3 py-2 text-white rounded-full">
            <Text className="text-xs font-semibold text-white"> Conhecer </Text>
          </View>
        </Pressable>
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        className="border-b border-gray-200 px-6 py-4 space-y-2"
      >
        <View className="relative w-6 h-6">
          {CRIPTOSDATA.map((cripto, index) => (
            <Image
              source={{ uri: cripto.image }}
              alt={cripto.name}
              resizeMode="contain"
              className={`absolute top-0 w-full h-full rounded-full`}
              style={{ left: index * 16, zIndex: -index }}
              key={index}
            />
          ))}
        </View>
        <View className="w-full flex-row justify-between">
          <View className="gap-y-1">
            <Text className="text-secondary-foreground text-lg font-semibold">
              Total em criptos
            </Text>
            <Text className="text-secondary-foreground/80 text-lg font-semibold">
              {" "}
              R$ 7,16{" "}
            </Text>
          </View>
          <CustomMaterialIcon name="keyboard-arrow-right" color="gray" />
        </View>
        <Text className="text-secondary-foreground">
          <Text className="text-green-700 items-center">
            <CustomMaterialCommunityIcon
              name="arrow-up"
              size={16}
              color="green"
            />
            R$ 0,55
          </Text>{" "}
          de rendimento
        </Text>
      </TouchableOpacity>
      <View className="px-6 py-4 mb-16 space-y-2">
        <Text className="text-lg font-semibold text-secondary-foreground"> Seguros </Text>
        <View className="space-y-4">
          {INSURANCES.map((insurance, index) => (
            <Pressable className="flex-row justify-between items-center p-4 bg-gray-200 rounded-2xl" key={index}>
              <View className="flex-row space-x-4 items-center">
                {insurance.icon}
                <Text className="font-semibold">
                  {insurance.name}
                </Text>
              </View>
              {!insurance.isNew ? (
                <Text className="text-primary font-semibold">
                  Conhecer
                </Text>
              ) : (
                <Text className="p-1 text-xs bg-primary text-white rounded-md">
                  Novo
                </Text>
              )}
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Organizations;
