import { StyleSheet, Text, View } from "react-native";

export default function TipsTab() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About This App</Text>
            <Text style={styles.paragraph}>
                Built for Mobile Application Development
            </Text>
            <Text style={styles.paragraph}>
                Lab 6. Demonstrates local notifications
            </Text>
            <Text style={styles.paragraph}>
                and Expo Router tab navigation
            </Text>
             <View style={{ height: 40 }} />
            <Text style={styles.paragraph}>
                Developed with React Native and Expo
            </Text>
            <Text style={styles.paragraph}>
                Created by Vishva Peiris
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E2E8F0",
    },
    title:{
        fontSize: 22,
        fontWeight: 700,
        paddingBottom: 15
    },
    paragraph: {
        fontSize: 16,
        color: "gray"
    }
}
);