import { StatusBar, Text, View } from "react-native"
import { CalculatorScreen } from "./calculator/presentation/screens/CalculatorScreen"
import { styles } from "./calculator/presentation/theme/app-theme"
import { AppNavigation } from "./navigation-app/AppNavigation"


export const App = () => {
  return (
    <View style={{flex:1}}>
        <StatusBar barStyle={'dark-content'}/>
        {/* <StatusBar /> */}
        {/* <CalculatorScreen/> */}
        <AppNavigation/>
    </View>
  )
}


