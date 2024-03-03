import { View, Text } from "react-native"
import { footerStyles as styles } from "./FooterStyles"

export function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Made by <Text style={styles.textBold}>Matěj Emmer</Text>
      </Text>
    </View>
  )
}
