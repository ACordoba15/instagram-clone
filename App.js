import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RutasNoAutorizadas from "./Componentes/NoAutenticados/RutasNoAutenticadas";
import RutasAutenticadas from "./Componentes/Autenticados/RutasAutenticadas";

export default function App() {
  return (
    <NavigationContainer>
      {/* <RutasNoAutorizadas /> */}
      <RutasAutenticadas />
    </NavigationContainer>
  );
}
