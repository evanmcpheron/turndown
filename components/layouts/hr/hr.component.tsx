// hr.component.tsx

import { View } from "react-native"
import { HrProps } from './hr.types'
import { hrComponentStyles } from './hr.styled'

export const Hr = (_props: HrProps) => {
    return <View style={hrComponentStyles.container}></View>
}
