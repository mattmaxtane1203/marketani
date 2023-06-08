import { Box, HStack, Input } from "native-base";
import React, { useState } from "react";
import {
    TextInput,
    Image,
    FlatList,
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    Pressable,
    TouchableOpacity
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Icons from "../../constants/Icons";

const HomeSearchBar = ({ placeholder }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const handleTextChange = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    return (
        <View style={styles.searchBar}>
            <Image source={Icons.magnifyingGlass} style={styles.icon} />
            <TextInput
                onChangeText={handleTextChange}
                value={searchTerm}
                editable={true}
                placeholder={placeholder}
                style={styles.test}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchBar: {
        display: "flex",
        flexDirection: "row",
        // alignItems: "center",
        paddingHorizontal: 30,
        height: 45,
        borderRadius: 30,
        backgroundColor: "#F5F5F5"
    },
    icon: {
        width: 20,
        height: 20,
        marginTop: 12,
        marginRight: 10,
        marginLeft: -18
    },
    test: {
        marginRight: 5,
        // marginLeft: -100,
        width: "75%",
        height: "100%",
    }
});

export default HomeSearchBar;