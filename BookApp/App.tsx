import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import CustomButton from './src/components/CustomButton';
import CustomInput from './src/components/CustomInput';
import { useState } from 'react';
//import { Button } from 'react-native/types_generated/index';

export default function App() {
   const [nombre, setNombre] = useState('');
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      
      <CustomButton title={'Boton primario'} 
      onPress={() => {}} />
      
      <CustomButton title={'Boton Secundario'} 
      onPress={() => {}} 
      variant="secondary"
      />
      
      <CustomButton title={'Boton tercero'} 
      onPress={() => {}} 
      variant="tertiary"
      />

      <CustomInput
        placeholder="tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <Text style={styles.resultado}>
        Hola, {nombre || 'tu nombre'}
      </Text>


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
    resultado: {
    fontSize: 18,
    marginTop: 10,
    },
});
