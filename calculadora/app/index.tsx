import { Stack } from "expo-router";
import { Text, View } from "react-native";
import Calculadora from "@/Components/Calculadora";

// Feito por Guilherme Santos

export default function Index() {
  return (
    <>
    <Stack.Screen options={{title: 'Calculadora - Guilherme Santos', headerTitleAlign: 'center'}} />
    <Calculadora />
    </>
  );
}
