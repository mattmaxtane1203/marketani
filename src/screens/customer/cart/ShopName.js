import { TouchableOpacity, Image, StyleSheet, View, Text, SafeAreaView, FlatList } from "react-native";
import Checkbox from 'expo-checkbox'
import React, { useState } from 'react'
import { style } from "deprecated-react-native-prop-types/DeprecatedTextPropTypes";


const ShopName = ({ ShopText }) => {
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#48BD5B' : undefined}
                />
                <Text style={styles.paragraph}>{ShopText}</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: -15
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1.5,
        borderBottomColor: '#F1F1F1',
        marginVertical: 32,
        paddingLeft: 20
    },
    paragraph: {
        fontSize: 15,
        paddingLeft: 12,
        marginBottom: 20
    },
    checkbox: {
        marginBottom: 20,
        marginLeft: 20
    },
});

export default ShopName;