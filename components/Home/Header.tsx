import { View, Text } from 'react-native'
import { CustomMaterialCommunityIcon, CustomMaterialIcon } from '../CustomIcon'

const Header = () => {
  return (
    <View className='bg-primary px-6 py-3 w-full gap-y-6'>
      <View className="w-full items-center justify-between flex-row">
          <View className="items-center justify-center p-2 bg-muted/50 rounded-full">
            <CustomMaterialCommunityIcon
              name="image-plus"
              color="white"
              size={26}
            />
          </View>
          <View className="flex-row items-center gap-x-4">
            <View>
              <CustomMaterialCommunityIcon name="eye" color="white" />
            </View>
            <View>
              <CustomMaterialIcon name="help-outline" color="white" />
            </View>
            <View>
              <CustomMaterialIcon name="supervised-user-circle" color="white" />
            </View>
          </View>
        </View>
    </View>
  )
}

export default Header