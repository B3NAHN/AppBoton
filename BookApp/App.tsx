import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import CustomButton from './src/components/CustomButton';
//import { Button } from 'react-native/types_generated/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <CustomButton title={'Boton personalizado'} 
      onPress={() => {console.log('Boton presionado');}} />

      <CustomButton title={'Boton generico'} 
      onPress={() => {console.log('Boton presionado 2');}} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
