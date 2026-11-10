import * as Notifications from "expo-notifications";
import { useEffect, useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function ReminderTab() {
  const [isReminding, setIsReminding] = useState(false);
  const [message, setMessage] = useState("Time to drink water!");
  const [intervalMinutes, setIntervalMinutes] = useState(1);

  useEffect(() => {
    async function requestPermissions() {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Permission required','We need notifications to remind you to drink water!'
        );
      }
    }
    requestPermissions();
  }, []);

  async function scheduleReminder() {
    await Notifications.requestPermissionsAsync();
    await Notifications.cancelAllScheduledNotificationsAsync();
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "💧 Hydration Alert",
        body: message,
        sound: "true",
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: intervalMinutes * 60,
        repeats: true
      },
    });

    setIsReminding(true);
    Alert.alert("Set!", `Reminding you every ${intervalMinutes} minutes.`);
  }

  async function stopReminder() {
    await Notifications.cancelAllScheduledNotificationsAsync();
    setIsReminding(false);
    Alert.alert("Stopped!", "You will no longer receive reminders.");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🥤</Text>
      <Text style={styles.label}>TextInput to get the user's custom text</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your custom message..."
        value={message}
        onChangeText={setMessage}
      />
      <Text style={styles.label}>Set interval (minutes):</Text>
      <TextInput
        style={styles.input}
        value={intervalMinutes.toString()}
        onChangeText={(text) => setIntervalMinutes(parseInt(text) || 1)}  
        keyboardType="numeric"
        />
        <Text style={styles.status}>
          Status: {isReminding ? "Active 🟢" : "Inactive 🔴"}
        </Text>

        <Pressable style={({ pressed }) => [styles.button,
        {backgroundColor: pressed ? "blue" : "green"}
      ]} onPress={stopReminder}>
          <Text style={styles.buttonText}>Start Reminder</Text>
        </Pressable>
        <View style={{ height: 10 }} />
        <Pressable style={({ pressed }) => [styles.button,
        {backgroundColor: pressed ? "blue" : "green"}
      ]} onPress={stopReminder}>
          <Text style={styles.buttonText}>Stop Reminder</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: {
    fontSize: 64,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: "80%",
  },
  button: {
    marginBottom: 10,
  },
  status: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  buttonPressed: {
    backgroundColor: "#0A84FF",
  },
});
