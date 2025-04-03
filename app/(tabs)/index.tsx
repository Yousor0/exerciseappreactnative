import { createStackNavigator } from "@react-navigation/stack";
import Home from "@/components/Home";
import DurationExercise from "@/components/DurationExercise";
import RepetitionExercise from "@/components/RepetitionExercise";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: "Exercise Tracker" }}
      />
      <Stack.Screen
        name="DurationExercise"
        component={DurationExercise}
        options={{ headerTitle: "Duration Exercise" }}
      />
      <Stack.Screen
        name="RepetitionExercise"
        component={RepetitionExercise}
        options={{ headerTitle: "Repetition Exercise" }}
      />
    </Stack.Navigator>
  );
}
