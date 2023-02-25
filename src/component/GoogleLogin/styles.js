import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors.js";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkGrey,
        padding: 16,
        borderRadius: 14,
        width: '45%',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:30,
    },
    googleicon:{
        alignSelf:'center',
        width:29,
        height:29
    }
})