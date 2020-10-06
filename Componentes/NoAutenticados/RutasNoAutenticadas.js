//import liraries
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
// create a component

const signIn = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>SigIn</Text>
      <Button
        title="Ir a signUp"
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      />
    </View>
  );
};

const signUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
      <Button
        title="Ir a signIn"
        onPress={() => {
          // goBack, vuelve a la ventana anterior, no crea un nuevo elemento
          navigation.goBack();
        }}
      />
    </View>
  );
};

const RutasNoAutorizadas = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={signIn} />
      <Stack.Screen name="SignUp" component={signUp} />
    </Stack.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "#fff",
  },
});

//make this component available to the app
export default RutasNoAutorizadas;
