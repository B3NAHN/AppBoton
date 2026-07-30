// myCustomButton = camel case
// MyCustomButton = pascal case
// my_custom_button = snake case

import { Button, Text, TouchableOpacity, View, StyleSheet } from "react-native";
type CustomButtonProps = { 
    title: string,
    onPress: () => void,
}

//definicion de componente personalizado utilizand componentes nativos de react native
export default function CustomButton ({title, onPress}: CustomButtonProps) {
    
    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: 'blue',
        width: 150,
        padding: 12,
        borderRadius: 6,
    },
    buttonText:{
        color: 'white',
    }
})