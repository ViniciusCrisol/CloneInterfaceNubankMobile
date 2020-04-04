import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "./styles";

export default function ContentTabs() {
  return (
    <>
      <TouchableOpacity style={styles.container}>
        <Icon name="person-add" size={30} color="white" />
        <View style={styles.icon} style={styles.containerText}>
          <Text style={styles.text}>Indicar Amigos</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <Icon name="monetization-on" size={30} color="white" />
        <View style={styles.icon} style={styles.containerText}>
          <Text style={styles.text}>Depositar</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <Icon name="attach-money" size={30} color="white" />
        <View style={styles.icon} style={styles.containerText}>
          <Text style={styles.text}>Transferir</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <Icon name="credit-card" size={30} color="white" />
        <View style={styles.icon} style={styles.containerText}>
          <Text style={styles.text}>Pagar</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <Icon name="tune" size={30} color="white" />
        <View style={styles.icon} style={styles.containerText}>
          <Text style={styles.text}>Ajustar Limite</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <Icon name="lock" size={30} color="white" />
        <View style={styles.icon} style={styles.containerText}>
          <Text style={styles.text}>Bloquear Cartão</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <Icon name="card-giftcard" size={30} color="white" />
        <View style={styles.icon} style={styles.containerText}>
          <Text style={styles.text}>Solicitar Cartão</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
