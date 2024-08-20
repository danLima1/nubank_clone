import React, { useState, useEffect, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CustomMaterialIcon } from "@/components/CustomIcon";
import CreditCard from "@/components/Home/CreditCard";
import Discover from "@/components/Home/Discover";
import Header from "@/components/Home/Header";
import OperationsContainer from "@/components/Home/OperationsContainer";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, TouchableOpacity, TextInput, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function Index() {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState("120,06");
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollXRef = useRef(0);

  const [name, setName] = useState("Nome");
  const [isEditingName, setIsEditingName] = useState(false);

  const saveValue = async (value) => {
    try {
      await AsyncStorage.setItem("@account_value", value);
    } catch (e) {
      console.error("Erro ao salvar o valor no AsyncStorage", e);
    }
  };

  const loadValue = async () => {
    try {
      const storedValue = await AsyncStorage.getItem("@account_value");
      if (storedValue !== null) {
        setValue(storedValue);
      }
    } catch (e) {
      console.error("Erro ao carregar o valor do AsyncStorage", e);
    }
  };

  const saveName = async (name) => {
    try {
      await AsyncStorage.setItem("@user_name", name);
    } catch (e) {
      console.error("Erro ao salvar o nome no AsyncStorage", e);
    }
  };

  const loadName = async () => {
    try {
      const storedName = await AsyncStorage.getItem("@user_name");
      if (storedName !== null) {
        setName(storedName);
      }
    } catch (e) {
      console.error("Erro ao carregar o nome do AsyncStorage", e);
    }
  };

  useEffect(() => {
    loadValue();
    loadName();
  }, []);

  const formatCurrency = (inputValue) => {
    const cleanValue = inputValue.replace(/\D/g, "");
    const integerPart = cleanValue.slice(0, -2);
    const decimalPart = cleanValue.slice(-2);

    const formattedValue = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "," + decimalPart;
    return formattedValue;
  };

  const handleChangeText = (inputText) => {
    const formatted = formatCurrency(inputText);
    setValue(formatted);
    saveValue(formatted);
  };

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    setCurrentIndex(index);
    scrollXRef.current = contentOffsetX;
  };

  const handleNameChange = (inputName) => {
    setName(inputName);
    saveName(inputName);
  };

  return (
    <>
      <StatusBar style="light" backgroundColor="#9c44dc" />
      <SafeAreaView className="flex-1">
        <ScrollView className="w-full flex-1">
          <Header />
          <View className="bg-primary px-6 py-4">
            <TouchableOpacity onPress={() => setIsEditingName(true)}>
              {isEditingName ? (
                <TextInput
                  className="text-white text-lg font-semibold"
                  value={name}
                  onChangeText={handleNameChange}
                  onBlur={() => setIsEditingName(false)}
                  autoFocus
                />
              ) : (
                <Text className="text-white text-lg font-semibold">Olá {name}</Text>
              )}
            </TouchableOpacity>
          </View>
          <View className="divide-y divide-gray-300">
            <View className="flex-1 w-full px-6 py-4">
              <TouchableOpacity
                activeOpacity={0.5}
                className="w-full flex-row justify-between mb-6"
                onPress={() => setIsEditing(true)}
              >
                <View className="gap-y-1">
                  <Text className="text-secondary-foreground text-lg font-semibold">Conta</Text>
                  {isEditing ? (
                    <TextInput
                      className="text-secondary-foreground text-lg font-semibold"
                      value={value}
                      onChangeText={handleChangeText}
                      onBlur={() => setIsEditing(false)}
                      keyboardType="numeric"
                      autoFocus
                    />
                  ) : (
                    <Text className="text-secondary-foreground text-lg font-semibold">R$ {value}</Text>
                  )}
                </View>
                <CustomMaterialIcon name="keyboard-arrow-right" color="gray" />
              </TouchableOpacity>
              <OperationsContainer />
              <TouchableOpacity
                className="flex-row w-full p-4 items-center bg-gray-200 mt-6 rounded-lg"
                activeOpacity={0.5}
              >
                <CustomMaterialIcon name="smartphone" color="black" />
  <Text style={{ fontWeight: '500', marginLeft: 10 }}>Meus cartões</Text> 
</TouchableOpacity>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={handleScroll}
                scrollEventThrottle={16}
                contentContainerStyle={{ alignItems: "center" }}
                style={{ marginTop: 16 }}
              >
                {[...Array(3).keys()].map((_, index) => (
                  <View
                    key={index}
                    style={{
                      width: width - 64,
                      backgroundColor: "#F5F5FF",
                      borderRadius: 20,
                      padding: 24,
                      marginHorizontal: 10, // Adicionado espaço de 10px entre os cards
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}
                  >
                    <View style={{ flex: 1, alignItems: 'center' }}>
                      <Text style={{ fontSize: 13, marginBottom: 8 }}>
                        <Text style={{ fontWeight: 'bold' }}>Pix no crédito</Text>:
                        transfira sem usar o saldo da conta.
                      </Text>
                    </View>
                    <Image
                      source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4Q-JUJjrOjV1KVaOGPvsjutQTvSmTrGInQ&usqp=CAU" }}
                      style={{ width: 24, height: 24 }}
                    />
                  </View>
                ))}
              </ScrollView>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: -16,
                }}
              >
                {[...Array(3).keys()].map((index) => (
                  <View
                    key={index}
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: currentIndex === index ? "black" : "gray",
                      marginHorizontal: 4,
                    }}
                  />
                ))}
              </View>
            </View>
            <View>
              <CreditCard />
            </View>
            <View className="px-6 py-4">
              <TouchableOpacity
                activeOpacity={0.6}
                className="w-full flex-row justify-between"
              >
                <View className="gap-y-2">
                  <Text className="text-lg font-semibold">Empréstimo</Text>
                  <View className="gap-y-1">
                    <Text> Valor disponível de até </Text>
                    <Text className="text-lg font-semibold"> R$ 15.000,00</Text>
                  </View>
                </View>
                <CustomMaterialIcon name="keyboard-arrow-right" color="gray" />
              </TouchableOpacity>
            </View>
            <View className="px-6 py-4">
              <TouchableOpacity
                activeOpacity={0.6}
                className="w-full flex-row justify-between"
              >
                <View className="gap-y-2">
                  <Text className="text-lg font-semibold">Próximo pagamento</Text>
                  <View className="gap-y-1">
                    <Text className="text-lg"> Quarta-feira, 11 Set </Text>
                  </View>
                </View>
                <CustomMaterialIcon name="keyboard-arrow-right" color="gray" />
              </TouchableOpacity>
            </View>
            <View className="mb-16">
              <Discover />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
