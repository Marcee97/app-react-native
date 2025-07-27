import { Link } from 'expo-router';
import { View, Text } from 'react-native';
import styles from "./login/loginstyle.js";
export default function Index() {
  return (
    <View style={styles.login}>
     
      <Text style={styles.cont_login}>El login</Text>
      <Link href="/Home">Ya estoy registrado</Link>
    
    </View>
  );
}

