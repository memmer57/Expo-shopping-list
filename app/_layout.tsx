import { Slot } from "expo-router"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { ShoppingProvider } from "../context/StateContext"

export default function HomeLayout() {
  return (
    <ShoppingProvider>
      <Header />
      <Slot />
      <Footer />
    </ShoppingProvider>
  )
}
