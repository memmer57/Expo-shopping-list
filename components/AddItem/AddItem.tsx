import { View, Text } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { useState } from "react"
import { StyledButton } from "../Button"
import { router } from "expo-router"
import { globalStyles } from "../../styles/globals"
import { addItemStyles as styles } from "./AddItemStyles"
import { ActionType, ItemType, useShopping } from "../../context/StateContext"
import { v4 as uuidv4 } from "uuid"

export function AddItem() {
  const [text, setText] = useState("")
  const [count, setCount] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState("")

  const { dispatch } = useShopping()

  const handleAddItem = () => {
    const randomUid = uuidv4()

    // validation
    if (text === "") {
      setStatus("Item name is required")
      return
    }
    if (count === "") {
      setStatus("Count is required")
      return
    }
    if (isNaN(parseInt(count))) {
      setStatus("Count must be a number")
      return
    }

    const newItem = {
      id: randomUid,
      units: parseInt(count),
      text: text,
      description: description,
      state: "progress",
    } as ItemType

    dispatch({ type: ActionType.ADD_ITEM, payload: newItem })
    router.push("/")
  }

  const handleGoBack = () => {
    router.push("/")
  }

  return (
    <View style={globalStyles.defaultView}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Bread"
        style={styles.textInput}
      />
      <TextInput
        value={count}
        onChangeText={setCount}
        placeholder="7"
        keyboardType="numeric"
        style={styles.textInput}
      />
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Whole wheat"
        style={styles.textInput}
      />
      <Text style={styles.statusText}>{status}</Text>
      <StyledButton title={"Add item"} onPress={handleAddItem}></StyledButton>
      <StyledButton title={"Back"} onPress={handleGoBack}></StyledButton>
    </View>
  )
}
