import { View, Text } from "react-native"
import { headerStyles as styles } from "./HeaderStyles"

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Shopper</Text>
    </View>
  )
}
