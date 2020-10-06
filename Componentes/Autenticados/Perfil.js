//import liraries
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

// create a component
const Perfil = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Perfil</Text>
      <Button
        title="Publicación"
        onPress={() => {
          navigation.push("Publicaciones");
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
export default Perfil;
