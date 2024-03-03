import React, { createContext, useReducer, useContext, Dispatch } from "react"

export type ItemState = "progress" | "obtained" | "partially" | "not-found"

export type ItemType = {
  id: string
  units: number
  text: string
  description: string
  state: ItemState
}

export enum ActionType {
  ADD_ITEM,
  REMOVE_ITEM,
  CHANGE_ITEM_STATE,
}

export type Action =
  | { type: ActionType.ADD_ITEM; payload: ItemType }
  | { type: ActionType.REMOVE_ITEM; payload: string }
  | {
      type: ActionType.CHANGE_ITEM_STATE
      payload: { id: string; newState: ItemState }
    }

export type ShoppingState = {
  items: ItemType[]
}

const initialState: ShoppingState = {
  items: [],
}

type ShoppingContextType = {
  state: ShoppingState
  dispatch: Dispatch<Action>
}

export const ShoppingContext = createContext<ShoppingContextType | undefined>(
  undefined
)

export const ShoppingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(shoppingReducer, initialState)

  return (
    <ShoppingContext.Provider value={{ state, dispatch }}>
      {children}
    </ShoppingContext.Provider>
  )
}

export const useShopping = (): ShoppingContextType => {
  const context = useContext(ShoppingContext)
  if (!context) {
    throw new Error("useShopping must be used within a ShoppingProvider")
  }
  return context
}

const shoppingReducer = (
  state: ShoppingState,
  action: Action
): ShoppingState => {
  switch (action.type) {
    case ActionType.ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] }

    case ActionType.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      }

    case ActionType.CHANGE_ITEM_STATE:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, state: action.payload.newState }
            : item
        ),
      }

    default:
      return state
  }
}
