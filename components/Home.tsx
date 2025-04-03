import React from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const exercises = [
  { id: "1", name: "Push-ups", type: "Repetition" },
  { id: "2", name: "Jumping Jacks", type: "Repetition" },
  { id: "3", name: "Plank", type: "Duration" },
];

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Exercise Tracker</Text>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate(
                item.type === "Repetition"
                  ? "RepetitionExercise"
                  : "DurationExercise",
                { exerciseName: item.name }
              )
            }
          >
            <Text style={styles.buttonText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 40, alignItems: "center" },
  header: {
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "green",
    padding: 20,
    paddingHorizontal: 100,
    marginVertical: 5,
    borderRadius: 30,
  },
  buttonText: { color: "#fff", fontSize: 18, textAlign: "center" },
});

export default Home;
