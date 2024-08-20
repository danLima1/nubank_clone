import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { CASHBACKS, HERO_IMG, STORE_PRODUCTS } from "@/constants/Operations";
import { CashBacksProps, STORE_PRODUCTSProps } from "@/types";

const Cashbacks = () => {
  const renderItem = ({ item }: { item: CashBacksProps }) => (
    <TouchableOpacity activeOpacity={0.6} className="items-center mr-4">
      <View
        className="w-14 h-14 border border-gray-300 overflow-hidden bg-background p-1"
        style={{ borderRadius: 50 }}
      >
        <Image
          source={{ uri: item.platform.logo }}
          alt={item.platform.name}
          resizeMode="contain"
          className="w-full h-full"
        />
      </View>
      <View className="items-center">
        <Text className="text-xs text-secondary-foreground">
          {item.platform.name}
        </Text>
        <Text className="font-semibold text-xs text-secondary-foreground">
          {item.value} %
        </Text>
      </View>
    </TouchableOpacity>
  );

  const render_hero_images = ({ item }: { item: string }) => (
    <TouchableOpacity className="w-60 h-32 overflow-hidden mr-4 rounded-lg">
      <Image
        source={{ uri: item }}
        alt="hero image"
        className="w-full h-full"
      />
    </TouchableOpacity>
  );

  const render_products_items = ({item}: {item:STORE_PRODUCTSProps}) => (
    <TouchableOpacity className="w-36 mr-4">
        <View className="w-full h-36 p-2 items-center justify-center bg-gray-200 rounded-lg">
            <Image 
                source={{uri: item.image}}
                alt={item.name}
                resizeMode="contain"
                className="w-full h-full"
            />
        </View>
        <View className="space-y-1">
            <View className="items-start">
                <Text className="text-lg font-bold"> R$ {item.price} </Text>
                <Text className="text-xs p-1 bg-muted/30 text-primary rounded-md"> R$ {item.cashback} de cashback </Text>
            </View>
            <View className="space-y-1 items-start">
                <Text className="text-xs text-secondary-foreground/60 flex-wrap">
                    {item.name} - {item.color}
                </Text>
                <View className="flex-row space-x-1 p-1 rounded-full bg-gray-200">
                    <Image 
                        source={{uri: "https://cdn.jim-nielsen.com/ios/512/amazon-shopping-2021-03-02.png?rf=1024"}}
                        alt="store"
                        className="w-4 h-4 rounded-full"
                    />
                    <Text>
                        Amazon
                    </Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  )

  return (
    <View className="px-6 py-4">
      <Text className="font-bold text-lg my-4">
        Melhores cashbacks da semana
      </Text>
      <View className="w-full">
        <FlatList
          data={CASHBACKS}
          renderItem={renderItem}
          keyExtractor={(_s, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View className="w-full mt-6">
        <FlatList
          data={HERO_IMG}
          renderItem={render_hero_images}
          keyExtractor={(_item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View className="mb-16">
        <View className="space-y-1 my-4">
          <Text className="text-lg font-bold text-secondary-foreground">
            {" "}
            Shopping do Nu indica{" "}
          </Text>
          <Text className="font-semibold text-secondary-foreground/60">
            {" "}
            Os melhores cashbacks por tempo limitado{" "}
          </Text>
        </View>
        <View className="w-full">
          <FlatList
            data={STORE_PRODUCTS}
            renderItem={render_products_items}
            keyExtractor={(_item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default Cashbacks;
