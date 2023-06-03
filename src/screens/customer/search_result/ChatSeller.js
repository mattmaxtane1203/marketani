import {
    ScrollView,
    Text,
    StyleSheet,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput
  } from "react-native";
  import Icons from "../../../constants/Icons";
  import Images from "../../../constants/Images";
  import BackButton from "../../../components/button/BackButton";
import ChatSellerFooter from "../../../components/input/ChatSellerFooter";

  const ChatSeller = ({navigation}) => {
    return(
        <View style={ChatSellerStyle.background}>
            <View style={ChatSellerStyle.footerContainer}>
                <ChatSellerFooter placeholder={"Ketik disini"}/>
            </View>
            <SafeAreaView>
                <ScrollView stickyHeaderIndices={[1]}>
                    <View style={ChatSellerStyle.header}>
                        <BackButton onPress={() => navigation.navigate("Product Information")}></BackButton>
                        <View style={ChatSellerStyle.headerTitle}>
                            <View style={ChatSellerStyle.border}>
                                <Image source={Images.shopPictureSample} style={ChatSellerStyle.shopImage}></Image>
                            </View>
                            <Text style={ChatSellerStyle.textHeader}>Fresh Shop</Text>
                        </View>
                    </View>

                    <View style={ChatSellerStyle.chatDate}>
                        <Text style={ChatSellerStyle.date}>Senin</Text>
                    </View>

                    <View style={ChatSellerStyle.sellerChat}>
                        <View style={ChatSellerStyle.shopPicture}>
                            <Image source={Images.shopPictureSample} style={ChatSellerStyle.shopImage2}></Image>
                        </View>
                        <View style={ChatSellerStyle.chatContent}>
                            <Text style={ChatSellerStyle.chatComment}>Halo! Selamat datang di Marketani Store Fresh Shop! Mohon menunggu admin kami untuk menjawab kembali.</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
  }

const ChatSellerStyle = StyleSheet.create ({
    background:{
        backgroundColor: "white",
        flex: 1,
        paddingBottom: 65
    },

    footerContainer:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },

    header:{
        display: "flex",
        justifyContent:"flex-start",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomColor: "#CFCFCF",
        borderBottomWidth: 0.5
    },

    headerTitle:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginStart: 20
    },

    border:{
        padding: 2,
        backgroundColor: '#F1F1F1',
        borderRadius: 100
    },

    shopImage:{
        width: 35,
        height: 35,
        borderRadius: 100
    },

    textHeader:{
        fontSize: 20,
        fontWeight: 500,
        marginStart: 10
    },

    chatDate:{
        display: "flex",
        alignItems: "center",
        marginTop: 15
    },

    date:{
        fontSize: 12,
        fontWeight: 500,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5
    },

    sellerChat:{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        marginHorizontal: 20,
        marginTop: 20,
        gap: 20
    },

    shopPicture:{
        padding: 2,
        backgroundColor: '#F1F1F1',
        borderRadius: 100
    },

    shopImage2:{
        width: 35,
        height: 35,
        borderRadius: 100
    },

    chatContent:{
        backgroundColor: '#F5F5F5',
        padding: 10,
        borderRadius: 10,
        width: "83%"
    },

    chatComment:{
        fontSize: 13
    },




})

export default ChatSeller

  