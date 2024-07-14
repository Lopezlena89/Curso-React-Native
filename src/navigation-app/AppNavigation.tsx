import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaView, ScrollView, Text, View } from "react-native"
import { StackNavigator } from './presentation/routes/StackNavigator';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';


export const AppNavigation = () => {
  return (
    <NavigationContainer>
        {/* <StackNavigator/> */}
        <SideMenuNavigator/>
    </NavigationContainer>
  )
}
