import { View, Text, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import { useState } from "react";

// TODO: Fix radio button appearance

const RadioButtonInputField = ({placeholder, choice1, choice2}) => {
    const [checked, setChecked] = useState('Pelanggan')

    function handleCheck(newValue) {
        setChecked(newValue)
    }

    return (
        <View style={styles.margin}>
            <Text style={styles.fieldLabel}>{placeholder}</Text>
            <RadioButton.Group onValueChange={handleCheck} value={checked}>
                <View style={styles.radioButton}>
                    <RadioButton value={choice1.toString()} color="green"/>
                    <Text style={styles.radioButtonLabel}>{choice1}</Text>
                </View>

                <View style={styles.radioButton}>
                    <RadioButton value={choice2.toString()} color="green"/>
                    <Text style={styles.radioButtonLabel}>{choice2}</Text>
                </View>
            </RadioButton.Group>
        </View>
    )
}

const styles = StyleSheet.create({
    radioButton: {
        width: 325,

        flexDirection: "row",
        alignItems: "center",
    },
    
    fieldLabel: {
        fontSize: 16,
        marginBottom: 10
    },

    radioButtonLabel: {
        fontSize: 16,
    },  

    margin: {
        marginBottom: 10,
    },  
})

export default RadioButtonInputField