import { StyleSheet } from "react-native";

const LoginStyles = StyleSheet.create({
    background: {
      backgroundColor: '##FFFFF0',
    },
  
    logo: {
      alignSelf: "center",
      margin: 100,
      width: 200,
      height: 200,
    },
  
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  
    centered: {
      alignItems: "center"
    },
  
    subtitle: {
      fontSize: 16
    }
  });

export default LoginStyles