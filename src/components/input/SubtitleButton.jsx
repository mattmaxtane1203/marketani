import { TouchableOpacity, Text } from "react-native";

const SubtitleButton = ({placeholder, onPress}) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={{color: "green", fontSize: 16}}>{placeholder}</Text>
        </TouchableOpacity>
    )
}

export default SubtitleButton