import { Text, View } from 'react-native'
import { globalStyle } from '../../theme/theme-nativation'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { StackActions, useNavigation } from '@react-navigation/native'

export const SettingScreen = () => {

  const navigator = useNavigation();

  return (
    <View style={globalStyle.container}>
        <Text style={{}}>SettingScreen</Text>

        <PrimaryButton
          onPress={()=>navigator.goBack()}
          label='Regresar'
        />
        <PrimaryButton
          onPress={()=>navigator.dispatch(StackActions.popToTop())}
          label='Regresar al home'
        />
    </View>
  )
}
