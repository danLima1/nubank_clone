import { CustomMaterialCommunityIcon, CustomMaterialIcon } from '@/components/CustomIcon'
import Header from '@/components/Home/Header'
import Cashbacks from '@/components/Shop/Cashbacks'
import { STOREMENU } from '@/constants/Operations'
import { StatusBar } from 'expo-status-bar'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const market = () => {
  return (
    <>
      <StatusBar style="light" backgroundColor="#9c44dc" />
      <SafeAreaView className="flex-1">
        <ScrollView className="w-full flex-1">
          <Header />
          <View>
            <View className='bg-primary px-6 py-4'>
              <View className='flex-row space-x-2'>
                <TouchableOpacity activeOpacity={.6} className='flex-row items-center space-x-2 p-3 rounded-full bg-background flex-1'>
                  <CustomMaterialIcon name='search' size={25} color='gray' />
                  <Text className='font-semibold text-gray-400'>
                    Buscar no Shopping
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className='bg-background p-3 rounded-full'>
                  <CustomMaterialCommunityIcon name='cart-outline' size={25} />
                </TouchableOpacity>
              </View>
              <View className='flex-row space-x-2 justify-between items-center mt-4'>
                {STOREMENU.map((store, index) => (
                  <View className='space-y-2 items-center' key={index}>
                    <View className='p-2 bg-muted/30 rounded-full items-center justify-center w-12 h-12'>
                      {store.icon}
                    </View>
                    <Text className='text-white text-xs'>
                      {store.title}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
          <Cashbacks />
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default market