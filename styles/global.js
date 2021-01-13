import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#9577BB",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 23,
    color: "white",
    textAlign: "center",
  },
  formHeader: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#D3D3D3",
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "blue",
    backgroundColor: "#D3D3D3",
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
    borderColor: "#D3D3D3",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    color: "#D3D3D3",
  },
  instructions: {
    borderWidth: 1,
    borderColor: "#D3D3D3",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    minHeight: 150,
    color: "#D3D3D3",
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
    marginTop: 5,
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  cardHeaderText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  cardText: {
    marginVertical: 20,
    backgroundColor: "#D3D3D3",
  },
  dateTimeInput: {
    borderWidth: 1,
    borderColor: "#D3D3D3",
    padding: 10,
    borderRadius: 6,
    marginBottom: 20,
  },
  dateTimeIcon: {
    color: "blue",
  },
  dateTimeBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  emptyBox: {
    backgroundColor: "blue",
  },
  noData: {
    marginVertical: 100,
    textAlign: "center",
    fontSize: 20,
    color: "lightgrey",
  },
  bodyText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#D3D3D3",
    textAlign: "center",
    marginTop: 15,
    marginHorizontal: 15,
  },
  editIcon: {
    color: "#D3D3D3",
  },
});
