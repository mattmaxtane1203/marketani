import { useState } from "react";
import { SafeAreaView, KeyboardAvoidingView, Text, View, StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome5'

const TagProduk = () => {
    const [checkedTags, setCheckedTags] = useState([])

    const handleCheckboxToggle = (value) => {
        if(checkedTags.includes(value)){
            setCheckedTags(checkedTags.filter((tag) => tag !== value))
        } else{
            setCheckedTags([...checkedTags, value])
        }
    }

    // TODO: Add information icon and explanations for each tag
    // TODO: (Optional) - Make each checkbox into its own component

    return (
        <View style={styles.container}>
            <View style={styles.checkboxContainer}>
                <Text style={styles.header}>Asal Produk</Text>
                <CheckBox 
                    containerStyle={styles.checkbox}
                    title={"Lokal"}
                    checked={checkedTags.includes('lokal')}
                    checkedIcon={<Icon name="check-square" size={20}/>}
                    uncheckedIcon={<Icon name="square" size={20}/>}
                    titleProps={{style: styles.checkboxTitle}}
                    onPress={() => handleCheckboxToggle('lokal')}/>
                <CheckBox 
                    containerStyle={styles.checkbox}
                    title={"Impor"}
                    checked={checkedTags.includes('impor')}
                    checkedIcon={<Icon name="check-square" size={20}/>}
                    uncheckedIcon={<Icon name="square" size={20}/>}
                    titleProps={{style: styles.checkboxTitle}}
                    onPress={() => handleCheckboxToggle('impor')}/>
            </View>

            <View style={styles.checkboxContainer}>
                <Text style={styles.header}>Metode Pengembangan</Text>
                <CheckBox 
                    containerStyle={styles.checkbox}
                    title={"Konvensional"}
                    checked={checkedTags.includes('konvensional')}
                    checkedIcon={<Icon name="check-square" size={20}/>}
                    uncheckedIcon={<Icon name="square" size={20}/>}
                    titleProps={{style: styles.checkboxTitle}}
                    onPress={() => handleCheckboxToggle('konvensional')}/>
                <CheckBox 
                    containerStyle={styles.checkbox}
                    title={"Organik"}
                    checked={checkedTags.includes('organik')}
                    checkedIcon={<Icon name="check-square" size={20}/>}
                    uncheckedIcon={<Icon name="square" size={20}/>}
                    titleProps={{style: styles.checkboxTitle}}
                    onPress={() => handleCheckboxToggle('organik')}/>
                <CheckBox 
                    containerStyle={styles.checkbox}
                    title={"Hidroponik"}
                    checked={checkedTags.includes('hidroponik')}
                    checkedIcon={<Icon name="check-square" size={20}/>}
                    uncheckedIcon={<Icon name="square" size={20}/>}
                    titleProps={{style: styles.checkboxTitle}}
                    onPress={() => handleCheckboxToggle('hidroponik')}/>
            </View>

            {/* TODO: (Optional) Add a button to save the tags */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center"
    },

    checkboxContainer: {
        flexDirection: "column",
        width: 350,
        marginVertical: 10,
    },

    checkbox: {
        backgroundColor: "transparent",
        borderWidth: 0,
    },

    checkboxTitle: {
        fontSize: 16,
        fontWeight: "normal",
        marginHorizontal: 10,
    },

    header: {
        fontSize: 16,
        fontWeight: "bold",
        margin: 10,
    },
})

export default TagProduk