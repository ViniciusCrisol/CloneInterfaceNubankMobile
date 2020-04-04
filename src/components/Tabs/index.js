import React from "react";
import { Animated, ScrollView } from "react-native";

import ContentTabs from "../ContentTabs/index";
import styles from "./styles";

export default function Tabs({ translateY }) {
  return (
    <Animated.ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: translateY.interpolate({
                inputRange: [0, 380],
                outputRange: [0, 30],
                extrapolate: "clamp",
              }),
            },
          ],
          opacity: translateY.interpolate({
            inputRange: [0, 380],
            outputRange: [1, 0.2],
            extrapolate: "clamp",
          }),
        },
      ]}
    >
      <ContentTabs />
    </Animated.ScrollView>
  );
}
