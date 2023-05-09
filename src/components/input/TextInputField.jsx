import { View, TextInput, StyleSheet, Text } from "react-native";
import { useState } from "react";

const TextInputField = ({label, OnChange}) => {
    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = () => {
        setIsFocused(true)
    }
    
    const handleBlur = () => {
        setIsFocused(false);
    }

    return (
        <View>
            <Text style={styles.fieldLabel}>{label}</Text>
            <TextInput
                style={[styles.textInputBox, isFocused && styles.inputFocused]}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInputBox: {
        width: 325,
        height: 35,

        borderColor: 'black',
        borderRadius: 8,
        borderWidth: 1,
        paddingLeft: 10,

        marginBottom: 20,
    },

    fieldLabel: {
        fontSize: 16,
        marginBottom: 10
    },

    inputFocused: {
        borderColor: "green",
    }
})

export default TextInputField