import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    backgroundColor: "#8b10ae",
    paddingTop: Constants.statusBarHeight + 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  nameIcon: {
    alignItems: "center",
    flexDirection: "row",
  },
});
