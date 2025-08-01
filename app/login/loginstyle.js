// styles.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  login: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
    color: "#5c4747ff",
  },
  nombre_app: {
    color: "#2ecc71ff",
    fontFamily: "monospace",
    fontSize: 40,
  },
  cont_login: {
    color: "#ffffff",
    backgroundColor: "#2b2b2bff",
    paddingVertical: 28,
    paddingHorizontal: 5,
    width: "100%",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  cont_titles: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 35,
    color: "#ffffff",
  },
  login_input: {
    fontSize: 25,
    backgroundColor: "#353535ff",
    width: "100%",
    borderRadius: 5,
    color: "#ffffff",
  },
  touch_button: {
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 5,
    padding: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#2ecc7094",

  },
  text_button: {
    fontSize: 25,
    color:"#ffffff",

  },
  opciones_login:{
color:"#ffffff"
  },
  btn_omitir:{
    color:"#ffffff",
    fontSize:15
  }
});
