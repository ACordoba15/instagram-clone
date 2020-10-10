//import liraries
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// create a component
const CerrarSesion = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>CerrarSesion</Text>
      <Button
        title="Iniciar sesión"
        onPress={() => {
          navigation.goBack();
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
export default CerrarSesion;
