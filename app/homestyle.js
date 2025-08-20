import { StyleSheet } from "react-native";

export default StyleSheet.create({
  encuesta: {
    gap: 25,
  },
  titulo_encuesta: {
    fontSize: 30,
    color: "#ffffffff",
    borderLeftWidth: 2,
    borderColor: "#5f5f5fff",
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginBottom: 18,
  },
  cont_encuesta: {
    display: "flex",
    flexDirection: "column",
    padding: 15,
    backgroundColor: "#303030ff",
    gap: 15,
    borderRadius: 4,
  },
  cont_opcion: {
    borderRadius: 5,
    backgroundColor: "#222222ff",
    height: 65,
    justifyContent: "center",
    padding: 15,
  },

  view_encuesta: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    alignItems: "center",
  },
  barra: {
    backgroundColor: "#181818ff",
    position: "absolute",
    height: 65,
    borderRadius: 5,
    width: "50%",
    
  },

  encabezado_encuesta: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titulo: {
    fontSize: 53,
    color: "#999898ff",
  },
  total_votos: {
    color: "#ffffff",
  },
  textos: {
    color: "#ffffff",
    fontSize: 20,
  },
  active: {
    backgroundColor: "#222222ff",
  },
});
