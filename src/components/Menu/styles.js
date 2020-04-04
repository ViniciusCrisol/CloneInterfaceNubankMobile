import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerItens: {
    padding: 32,
  },
  Iten: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255,255,255, 0.5)",
  },
  ItenLC: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255,255,255, 0.5)",
  },
  itenText: {
    marginLeft: 8,
    color: "white",
    lineHeight: 42,
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255,255,255, 0.5)",
    padding: 12,
    marginBottom: 4 - 4,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  qrCode: {
    alignSelf: "center",
    marginBottom: 20,
    width: 90,
    height: 90,
  },
});
