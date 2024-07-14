
import { Pressable, Text, View } from "react-native"
import { globalStyle } from "../../theme/theme-nativation";


interface Props{
    onPress:()=>void,
    label:string
}

export const PrimaryButton = ({onPress,label}:Props) => {

    

  return (
    <View>
        <Pressable 
          onPress={()=>onPress()}
          style={globalStyle.primaryButton}
        >
        <Text style={globalStyle.buttonText}>{label}</Text>
       </Pressable>
    </View>
  )
}
