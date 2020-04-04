import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8b10ae",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    flex: 1,
    maxHeight: 480,
    width: "100%",
    zIndex: 5,
  },
  card: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 12,
    height: "100%",
    margin: 20,
    position: "absolute",
    top: 0,
    left: 0,
  },
  headerCard: {
    justifyContent: "space-between",
    padding: 16,
    flexDirection: "row",
  },
  bodyCard: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
  },
  moneyTitleText: {
    fontWeight: "bold",
    color: "#999",
    fontSize: 16,
  },
  moneyText: {
    color: "#333",
    fontSize: 42,
  },
  footerCard: {
    padding: 30,
    borderBottomEndRadius: 12,
    borderBottomStartRadius: 12,
    backgroundColor: "#eee",
  },
  footerText: {
    fontSize: 14,
    color: "#333",
  },
});
