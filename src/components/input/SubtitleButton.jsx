import { TouchableOpacity, Text } from "react-native";


const SubtitleButton = ({placeholder}) => {

    return (
        <TouchableOpacity>
            <Text style={{color: "green", fontSize: 16}}>{placeholder}</Text>
        </TouchableOpacity>
    )
}

export default SubtitleButton