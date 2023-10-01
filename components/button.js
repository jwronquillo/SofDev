import { StyleSheet, View, Pressable, Text } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Button({label, theme}){
    if (theme === "selected"){
        return (
            <View
            style={[div.buttonContainer]}
            >
                <Pressable
                style={[div.button]}
                >
                </Pressable>
            </View>
        );
    }
    return (
        <View style={div.buttonContainer}>
            <Pressable style={div.button} onPress={() => alert('You Pressed a button.')}>
                <Text style={div.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const div=StyleSheet.create({
    buttonContainer: {
        width: 63,
        height: 41,
    },
    button: {
        paddingTop: 29,
        paddingLeft: 16,
        paddingRight: 16,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    buttonIcon: {
      paddingRight: 8,
    },
    buttonLabel: {
      color: '#fff',
      fontSize: 16,
    }
});