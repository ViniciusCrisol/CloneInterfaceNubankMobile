import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Text, View, TouchableOpacity, Animated } from "react-native";

import { PanGestureHandler, State } from "react-native-gesture-handler";

import Tabs from "../../components/Tabs/index";
import Menu from "../../components/Menu/index";

import styles from "./styles";

export default function Main() {
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: { translationY: translateY },
      },
    ],
    { useNativeDriver: true }
  );

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Animated.View
            style={[
              styles.card,
              {
                translateY: translateY.interpolate({
                  inputRange: [-300, 0, 380],
                  outputRange: [-50, 0, 380],
                  extrapolate: "clamp",
                }),
              },
            ]}
          >
            <View style={styles.headerCard}>
              <TouchableOpacity>
                <Icon name="attach-money" size={24} color="#333" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="help-outline" size={24} color="#333" />
              </TouchableOpacity>
            </View>
            <View style={styles.bodyCard}>
              <Text style={styles.moneyTitleText}>Saldo Disponível</Text>
              <Text style={styles.moneyText}>R$ 1.317,15</Text>
            </View>
            <View style={styles.footerCard}>
              <Text style={styles.footerText}>
                Está pronto para ver seu dinheiro render mais que a poupança ?
              </Text>
            </View>
          </Animated.View>
        </PanGestureHandler>
      </View>
      <Tabs translateY={translateY} />
    </View>
  );
}
