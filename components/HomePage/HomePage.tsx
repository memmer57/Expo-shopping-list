import { FlatList, View, Text, Button } from "react-native"
import { homePageStyles as styles } from "./HomePageStyles"
import { globalStyles } from "../../styles/globals"
import { StyledButton } from "../Button"
import { router } from "expo-router"
import {
  ActionType,
  ItemType,
  ShoppingContext,
} from "../../context/StateContext"
import { useContext } from "react"

export function HomePage() {
  const { state, dispatch } = useContext(ShoppingContext)

  const handleAddNew = () => {
    router.push("/add-item")
  }

  const renderItem = ({ item }: { item: ItemType }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.text}</Text>
      <Text>{item.units} units</Text>
      <Text>{item.description}</Text>
      <Text>Status: {item.state}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Mark as Obtained"
          onPress={() =>
            dispatch({
              type: ActionType.CHANGE_ITEM_STATE,
              payload: { id: item.id, newState: "obtained" },
            })
          }
        />
        <Button
          title="Remove Item"
          onPress={() =>
            dispatch({ type: ActionType.REMOVE_ITEM, payload: item.id })
          }
        />
      </View>
    </View>
  )

  return (
    <View style={globalStyles.defaultView}>
      {state.items.length === 0 ? (
        <Text>No items in the shopping list, try adding one!</Text>
      ) : (
        <FlatList
          data={state.items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
      <StyledButton
        title={"Add new item"}
        onPress={handleAddNew}
      ></StyledButton>
    </View>
  )
}
