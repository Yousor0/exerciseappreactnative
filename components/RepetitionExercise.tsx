import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const RepetitionExercise = () => {
  const route = useRoute();
  const { exerciseName } = route.params || {};

  const [reps, setReps] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{exerciseName || "Exercise"}</Text>
      <Text style={styles.counter}>Reps: {reps}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "green" }]}
          onPress={() => setReps((prev) => prev + 1)}
        >
          <Text style={styles.buttonText}>+1 Rep</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "red" }]}
          onPress={() => setReps((prev) => (prev > 0 ? prev - 1 : 0))}
        >
          <Text style={styles.buttonText}>-1 Rep</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "gray" }]}
          onPress={() => setReps(0)}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
  },
  header: {
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 20,
  },
  counter: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    width: 120,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default RepetitionExercise;
