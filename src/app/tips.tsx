import { Text, View, StyleSheet } from "react-native";

export default function TipsTab() {
    return (
        <View>
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
    title:{
        color: "blue",
        fontSize: 16
    },
    paragraph: {
        color: "gray",
        fontSize: 12
    }
}
);