import { StyleSheet } from "react-native"

export const homePageStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  noItemsText: {
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 16,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
})
