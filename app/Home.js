import { View, Text, Pressable } from "react-native";
import styles from "../app/homestyle.js";
import { useEffect, useState } from "react";
export default function Home() {
  const [opcionA, setOpcionA] = useState(0);
  const [opcionB, setOpcionB] = useState(0);
  const [activeAnimation, setActiveAnimation] = useState(false)
  const [votos, setVotos] = useState(0);
  const [porcentajeA, setPorcentajeA] = useState(0)
  const [porcentajeB, setPorcentajeB] = useState(0)
  const porcentajes = (opcion) => {
    setVotos(votos + 1);

    if (opcion === "a") setOpcionA(opcionA + 1);
    if (opcion === "b") setOpcionB(opcionB + 1);
    }
    
  useEffect(()=> {

  setPorcentajeA(((opcionA * 100) / votos).toFixed(1)); 
  setPorcentajeB(((opcionB * 100) / votos).toFixed(1)); 
    
    console.log(votos, opcionA, opcionB);
  }, [opcionA, opcionB])  
  

  return (
    <View style={styles.encuesta}>
      <Text style={styles.titulo}>Top Encuestas</Text>
      <View style={styles.cont_encuesta}>
      <View style={styles.encabezado_encuesta}>
        <Text style={styles.titulo_encuesta}>Donde?</Text>
        <Text style={styles.total_votos}>Votos {votos}</Text>
      </View>
        <View style={styles.cont_opcion}>
              <View  style={[styles.barra, { width: `${porcentajeA}%` }]}></View>
          <Pressable  onPress={() => porcentajes("a")}>
            <View style={styles.view_encuesta}>
              <Text style={styles.textos}>Nolo</Text>
              <Text style={styles.textos}>{porcentajeA} %</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.cont_opcion}>
           <View  style={[styles.barra, { width: `${porcentajeB}%` }]}></View>
          <Pressable  onPress={() => porcentajes("b")}>
            <View style={styles.view_encuesta}>
              <Text style={styles.textos}>Club</Text>
              <Text style={styles.textos}>{porcentajeB} %</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
