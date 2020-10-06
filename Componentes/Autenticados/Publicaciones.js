//import liraries
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

// create a component
const Publicaciones = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Publicaciones</Text>
      <Button
        title="Perfil"
        onPress={() => {
          navigation.push("Perfil");
        }}
      />
      <Button
        title="Comentarios"
        onPress={() => {
          navigation.push("Comentarios");
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
export default Publicaciones;
