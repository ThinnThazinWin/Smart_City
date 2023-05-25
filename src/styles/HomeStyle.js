import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabBar: {
    backgroundColor: "#AFEEEE",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    width: "100%",
    height: 55,
  },
  txtStyle: {
    fontWeight: "bold",
    fontSize: 17,
  },
  head: {
    backgroundColor: "#fff",
    marginBottom: 3,
    width: "100%",
    height: 260,
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    width: "100%",
    borderRadius: 10,
    borderColor: "gray",
  },
  input: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },
  searchIcon: {
    padding: 10,
  },
  iconSection: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
  },
  iconTouch: {
    borderWidth: 0.5,
    borderColor: "#fff",
    backgroundColor: "#f0f4f8",
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 3,
  },
  scroll: {
    flex: 1,
  },
  body: {
    flex: 1 / 4,
    backgroundColor: "#fff",
    marginBottom: 3,
    padding: 15,
  },
  foot: {
    flex: 3 / 4,
    backgroundColor: "#fff",
    marginBottom: 3,
    padding: 15,
    width: "100%",
    height: "100%",
  },
  img: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,
    resizeMode: "contain",
    marginRight: 10,
  },
  txt: {
    color: "gray",
    fontSize: 13,
  },
});
export default styles;
