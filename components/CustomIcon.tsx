import { TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { IconProps } from '@/types'

export const CustomMaterialCommunityIcon = ({name, size, color}: IconProps) => {
  return (
    <TouchableOpacity activeOpacity={.7}>
      <MaterialCommunityIcons name={name as any} size={size || 24} color={color || "black"} />
    </TouchableOpacity>
  )
}

export const CustomMaterialIcon = ({name, size, color}: IconProps) => {
  return (
    <TouchableOpacity activeOpacity={.7}>
      <MaterialIcons name={name as any} size={size || 26} color={color || "black"} />
    </TouchableOpacity>
  )
}
