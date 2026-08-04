// myCustomButton = camel case
// MyCustomButton = pascal case
// my_custom_button = snake case

import { Button, Text, TouchableOpacity, View, StyleSheet } from "react-native";
type CustomButtonProps = { 
    title: string,
    onPress: () => void;
    //tipo union literales
    variant?: "primary" | "secondary" | "tertiary"
    //tipo literal
    //variant: "primary"
}

//definicion de componente personalizado utilizand componentes nativos de react native
export default function CustomButton ({title, onPress, variant="primary"}: CustomButtonProps) {
    const styles = getStyles(variant);
    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const getStyles = (variant: "primary" | "secondary" | "tertiary") =>
StyleSheet.create({
    button:{
        backgroundColor: variant === "primary" ? "navy" : 
                            variant === "secondary" ? "lightblue" : "lightgray",
        width: 150,
        padding: 12,
        borderRadius: 6,
    },
    buttonText:{
        color: variant === "primary" ? "white " : "black",
    }
})