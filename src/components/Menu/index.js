import React from "react";
import {
  Text,
  Animated,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./styles";

import qr from "../../assets/qr.png";

export default function Menu({ translateY }) {
  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        styles.containerItens,
        {
          opacity: translateY.interpolate({
            inputRange: [0, 150],
            outputRange: [0, 1],
          }),
        },
      ]}
    >
      <Image source={qr} style={styles.qrCode} />

      <TouchableOpacity style={styles.Iten}>
        <Icon name="help-outline" size={26} color="white" />
        <Text style={styles.itenText}>Me ajuda</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Iten}>
        <Icon name="perm-identity" size={26} color="white" />
        <Text style={styles.itenText}>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Iten}>
        <Icon name="credit-card" size={26} color="white" />
        <Text style={styles.itenText}>Configurar cartão</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.ItenLC}>
        <Icon name="stay-current-portrait" size={26} color="white" />
        <Text style={styles.itenText}>Configurações do app</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SAIR DO APP</Text>
      </TouchableOpacity>
    </Animated.ScrollView>
  );
}
