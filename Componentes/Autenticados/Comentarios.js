//import liraries
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

// create a component
const Comentarios = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Comentarios</Text>
      <Button
        title="Perfil"
        onPress={() => {
          navigation.push("Perfil");
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default Comentarios;
