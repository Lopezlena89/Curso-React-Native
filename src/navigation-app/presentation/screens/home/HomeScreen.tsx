import { useEffect } from "react";
import { DrawerActions, type NavigationProp, useNavigation } from "@react-navigation/native"
import { globalStyle } from "../../theme/theme-nativation"
import { Pressable, Text, View } from "react-native"
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import { type RootStackParams } from "../../routes/StackNavigator";


export const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () =>(
        <Pressable onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>Menu</Text>
        </Pressable>
      )
    })
  }, [])
  
  

  return (
    <View style={globalStyle.container}>
       <PrimaryButton
        onPress={()=>navigation.navigate('Products' )}
        label='Productos'
       />
       <PrimaryButton
        onPress={()=>navigation.navigate('Settings')}
        label='Setting'
       />
    </View>
  )
}
