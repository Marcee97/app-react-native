import { Link } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from "./login/loginstyle.js";
import { MaterialIcons } from '@expo/vector-icons'; 
import { axios } from "axios";
export default function Index() {

const loginGithub = ()=> {
axios.post("http://localhost:3000/auth")
}


  return (
    <View style={styles.login}>
      <Text style={styles.nombre_app}>Calamares</Text>
     <View style={styles.cont_login}>
      <View style={styles.cont_titles}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.title}>Sign Up</Text>
      </View>
<TextInput placeholder='Nombre'  placeholderTextColor="#707070ff" style={styles.login_input}/>
<TextInput placeholder='Apellido'  placeholderTextColor="#707070ff"  style={styles.login_input}/>
<TextInput placeholder='Email'  placeholderTextColor="#707070ff"  style={styles.login_input}/>
<TextInput placeholder='Contraseña'  placeholderTextColor="#707070ff"  style={styles.login_input}/>
<TouchableOpacity style={styles.touch_button}>
  <Text style={styles.text_button}>Logear</Text>
</TouchableOpacity>
     </View>
     <View>
      <Text style={styles.opciones_login} onPress={loginGithub}>iniciar sesion con Github</Text>
     </View>
  <Link href={"/Home"} style={styles.btn_omitir}>Omitir</Link>
    </View>
  );
}

