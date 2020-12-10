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
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
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
  inut: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  modal: {
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
});
