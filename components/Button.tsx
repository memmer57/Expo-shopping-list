import { Text, StyleSheet, TouchableHighlight } from "react-native"
import React, { useState } from "react"

interface CustomButtonProps {
  onPress: () => void
  title: string
}

export function StyledButton({ onPress, title }: CustomButtonProps) {
  const [isPressed, setIsPressed] = useState(false)

  const handlePressIn = () => {
    setIsPressed(true)
  }

  const handlePressOut = () => {
    setIsPressed(false)
  }

  return (
    <TouchableHighlight
      style={[
        styles.button,
        { backgroundColor: isPressed ? "#004080" : "#016afb" },
      ]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      underlayColor="#004080"
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
})
