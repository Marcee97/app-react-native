import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from "./login/loginstyle.js";
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { useRouter } from "expo-router";
WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth",
  tokenEndpoint: "https://oauth2.googleapis.com/token",
  revocationEndpoint: "https://oauth2.googleapis.com/revoke"
};

export default function Index() {
  const [loginResult, setLoginResult] = useState(null);
    const router = useRouter();

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: "591276684496-9qhf2pgr6m7frvs4bom8a6d02eutep2j.apps.googleusercontent.com",
      scopes: ["openid", "profile", "email"],
      redirectUri:"https://auth.expo.io/@marcee97/mi-proyecto",
      responseType: "code"
    },
    discovery
  );

  console.log(
    makeRedirectUri({ useProxy: true }),
    "➡️ esta es la que va en Google"
  );

  useEffect(() => {
  requestAnimationFrame(() => {
    router.replace("/Home");
  });
}, []);

  useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
      setLoginResult(`✅ Login exitoso. Código: ${code}`);
    } else if (response?.type === "error") {
      setLoginResult(`❌ Error: ${response.error}`);
    } else if (response?.type === "dismiss") {
      setLoginResult("⚠️ Login cancelado por el usuario.");
    }
  }, [response]);

  return (
    <View style={styles.login}>
      <Text style={styles.nombre_app}>TuVieja.com</Text>

      <View style={styles.cont_login}>
        <View style={styles.cont_titles}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.title}>Sign Up</Text>
        </View>

        <TextInput placeholder='Nombre' placeholderTextColor="#707070ff" style={styles.login_input}/>
        <TextInput placeholder='Apellido' placeholderTextColor="#707070ff" style={styles.login_input}/>
        <TextInput placeholder='Email' placeholderTextColor="#707070ff" style={styles.login_input}/>
        <TextInput placeholder='Contraseña' placeholderTextColor="#707070ff" style={styles.login_input}/>

        <TouchableOpacity style={styles.touch_button}>
          <Text style={styles.text_button}>Logear</Text>
        </TouchableOpacity>
      </View>

      {/* Botón Google */}
      <TouchableOpacity
        onPress={() => promptAsync()}
        disabled={!request}
      >
        <Text style={styles.opciones_login}>
          Iniciar sesión con Google
        </Text>
      </TouchableOpacity>

      {/* Mostrar el resultado en pantalla */}
      {loginResult && (
        <Text style={{ marginTop: 15, color: 'white', textAlign: 'center' }}>
          {loginResult}
        </Text>
      )}

      <Link href={"/Home"} style={styles.btn_omitir}>Omitir</Link>
    </View>
  );
}
