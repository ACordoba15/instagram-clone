//import liraries
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Perfil from "./Perfil";
import Configuracion from "./Configuracion";

const Drawer = createDrawerNavigator();

// create a component
const MyComponent = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerPosition="right">
      <Drawer.Screen name="Perfil" component={Perfil} />
      <Drawer.Screen name="Configuracion" component={Configuracion} />
    </Drawer.Navigator>
  );
};

//make this component available to the app
export default MyComponent;
