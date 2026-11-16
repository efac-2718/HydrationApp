import { StyleSheet, Text, View } from "react-native";

export default function TipsTab() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Why Hydrate? 🌊</Text>
            <Text style={styles.paragraph}>
                Boosts skin health and beauty
            </Text>
            <Text style={styles.paragraph}>
                Regulates body temperature
            </Text>
            <Text style={styles.paragraph}>
                Flushes body waste
            </Text>
            <Text style={styles.paragraph}>
                Maintains blood pressure
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
        color: "#1696D2",
        fontSize: 22,
        fontWeight: 700,
        alignContent: "center",
        paddingBottom: 10
    },
    paragraph: {
        color: "gray",
        fontSize: 16,
        alignContent: "center",
        paddingBottom: 2
    }
}
);