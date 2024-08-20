import { View, Text, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { MORE } from '@/constants/Operations'
import { MoreInfosProps } from '@/types'

const Discover = () => {


    const renderItem = ({item}: {item: MoreInfosProps}) => (
        <Pressable className='rounded-xl overflow-hidden mr-4 w-[250px] bg-gray-200'>
            <Image 
                source={{uri: item.image}}
                alt={item.title}
                resizeMode='cover'
                className='w-full h-32'
            />
            <View className='py-4 px-2 items-start'>
                <View className='space-y-2'>
                    <Text className='font-semibold'> {item.title} </Text>
                    <Text>
                        {item.description}
                    </Text>
                </View>

                <Pressable className='p-2 rounded-full bg-primary mt-4'>
                    <Text className='text-lg font-semibold text-white'> {item.action} </Text>
                </Pressable>
            </View>
        </Pressable>
    )

  return (
    <View className='px-6 py-4 space-y-4'>
      <Text className='text-lg font-bold'>Descubra mais</Text>
      <View>
        <FlatList 
            data={MORE}
            renderItem={renderItem}
            keyExtractor={(_item, index) => index.toString()}
            horizontal
        />
      </View>
    </View>
  )
}

export default Discover