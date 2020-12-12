import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
  },
  formHeader: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  header: {
    backgroundColor: "blue",
    padding: 40,
  },
  headerText: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
  },
  med: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
  },
  list: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  modalContent: {
    flex: 1,
  },
  modalOpen: {
    color: "blue",
    alignSelf: "flex-end",
  },
  modalClose: {
    color: "red",
    alignSelf: "flex-end",
  },
  errMessage: {
    color: "red",
    fontWeight: "bold",
  },
  button: {
    marginTop: 20,
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    backgroundColor: "blue",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 25,
    textAlign: "center",
  },
});
