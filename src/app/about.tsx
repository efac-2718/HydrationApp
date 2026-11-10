import { Text, View, StyleSheet } from "react-native";

export default function TipsTab() {
    return (
        <View>
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
             <View style={{ height: 20 }} />
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
    title:{
        fontSize: 16
    },
    paragraph: {
        fontSize: 12
    }
}
);