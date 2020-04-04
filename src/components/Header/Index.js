import React from "react";
import styles from "./styles";
import logo from "../../assets/Nubank_Logo.png";
import { Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.nameIcon}>
        <Image source={logo} />
        <Text style={styles.title}>Vinícius</Text>
      </View>
      <Icon name="keyboard-arrow-down" size={20} color="white" />
    </View>
  );
}
