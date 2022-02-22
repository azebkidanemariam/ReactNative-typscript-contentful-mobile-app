import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { theme } from "../sdha/themes";

const moodOptions = [
  { emoji: "🧑‍💻", description: "studious" },
  { emoji: "🤔", description: "pensive" },
  { emoji: "😊", description: "happy" },
  { emoji: "🥳", description: "celebratory" },
  { emoji: "😤", description: "frustrated" },
];
export const MoodPicker: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>BLOGme</Text>
      <View style={styles.moodList}>
        {moodOptions.map((option) => (
          <Text key={option.emoji} style={styles.moodText}>
            {option.emoji}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  moodOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    margin: 10,
    borderRadius: 10,
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    letterSpacing: 1,
    textAlign: "center",
    marginBottom: 20,
    color: theme.colorBlack,
    fontFamily: "Avenir",
  },
  moodText: {
    fontSize: 24,
  },
  moodList: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
});
