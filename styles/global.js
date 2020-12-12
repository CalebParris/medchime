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
    textAlign: "center",
  },
  formHeader: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "blue",
  },
  headerText: {
    color: "blue",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  card: {
    padding: 16,
    marginTop: 16,
    borderColor: "blue",
    borderWidth: 1,
    borderStyle: "solid",
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
  cardHeader: {
    backgroundColor: "blue",
    borderRadius: 4,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  cardHeaderText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  cardText: {
    marginVertical: 10,
  },
});
