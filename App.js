import React from "react";

import Main from "./src/pages/Main/Index";
import Header from "./src/components/Header/Index";

import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      <Header />
      <Main />
    </>
  );
}
