import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const DurationExercise = () => {
  const route = useRoute();
  const { exerciseName } = route.params || {};

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 100);

    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (tenths) => {
    const totalSeconds = tenths / 10;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const decimal = tenths % 10;

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}.${decimal}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{exerciseName || "Exercise"}</Text>
      <Text style={styles.timer}>Time: {formatTime(time)}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: isRunning ? "red" : "green" },
          ]}
          onPress={() => setIsRunning((prev) => !prev)}
        >
          <Text style={styles.buttonText}>{isRunning ? "Pause" : "Start"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "gray" }]}
          onPress={() => {
            setIsRunning(false);
            setTime(0);
          }}
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
  timer: {
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

export default DurationExercise;
