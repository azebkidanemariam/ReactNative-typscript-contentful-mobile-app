import React from "react";
import { Text,View,StyleSheet,Pressable } from "react-native";
import { theme } from "../sdha/themes";

const moodOptions = [
    { emoji: '🧑‍💻', description: 'studious' },
    { emoji: '🤔', description: 'pensive' },
    { emoji: '😊', description: 'happy' },
    { emoji: '🥳', description: 'celebratory' },
    { emoji: '😤', description: 'frustrated' },
  ];
  export const MoodPicker: React.FC = () => {
    return (
        <View>


           <Text style={styles.heading}>How is your Day?</Text>
      <View style={styles.moodList}>
        {moodOptions.map((option) => (
          <Text key={option.emoji} style={styles.moodText}>
            {option.emoji}
          </Text>
        ))}
      </View>
           <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Mood blog</Text>
      </Pressable>
        </View>
    );
  };
  
  const styles = StyleSheet.create({
      moodOptions:{
flexDirection:'row',
justifyContent:'space-between'
      },
    container: {
        borderWidth: 2,
        borderColor: theme.colorPurple,
        margin: 10,
        borderRadius: 10,
        padding: 20,
      },
      heading: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1,
        textAlign: 'center',
        marginBottom: 20,
        color:theme.colorBeige,
        
      },
      button: {
        backgroundColor: theme.colorPurple,
        width: 150,
        borderRadius: 20,
        marginTop: 20,
        alignSelf: 'center',
        padding: 10,
      },
      buttonText: {
        color: theme.colorBeige,
        textAlign: 'center',
        fontWeight: 'bold',
      },
      selectedMoodItem: {
        borderWidth: 2,
        backgroundColor: theme.colorPurple,
        borderColor: theme.colorBeige,
      },
      descriptionText: {
        
        color: theme.colorPurple,
        fontWeight: 'bold',
        fontSize: 10,
        textAlign: 'center',
      },
    moodText: {
      fontSize: 24,
    },
    moodList: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
    },
  });