import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RutasNoAutenticadas from "./Componentes/NoAutenticados/RutasNoAutenticadas";
import RutasAutenticadas from "./Componentes/Autenticados/RutasAutenticadas";
import { Provider } from "react-redux";
import Store from "./Store/Store";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={Store}>
        <RutasAutenticadas />
      </Provider>
    </NavigationContainer>
  );
}
