/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { CartItem, Product } from "../lib/types"

// 1. Crea il Context
interface CartContextType {
  cart: CartItem[]
  addToCart: (product: Product, quantityToAdd?: number) => void
  updateQuantity: (productId: string, newQuantity: number) => void
  removeFromCart: (productId: string) => void
  getTotalPrice: () => number
  getCartItemCount: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

// 2. Crea il Provider
interface CartProviderProps {
  children: ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([])

  // Carica il carrello dal localStorage all'avvio
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("iper-store-cart")
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart)
        setCart(parsedCart)
        console.log("Carrello caricato da localStorage:", parsedCart)
      } else {
        console.log("Nessun carrello trovato in localStorage.")
      }
    } catch (error) {
      console.error("Errore nel caricamento del carrello da localStorage:", error)
      setCart([]) // Resetta il carrello in caso di errore di parsing
    }
  }, [])

  // Salva il carrello nel localStorage ogni volta che cambia
  useEffect(() => {
    try {
      localStorage.setItem("iper-store-cart", JSON.stringify(cart))
      console.log("Carrello salvato in localStorage:", cart)
    } catch (error) {
      console.error("Errore nel salvataggio del carrello in localStorage:", error)
    }
  }, [cart])

  const addToCart = (product: Product, quantityToAdd = 1) => {
    setCart((prevCart) => {
      console.log(`Tentativo di aggiungere ${quantityToAdd} di ${product.name} al carrello.`)
      const existingItem = prevCart.find((item) => item.id === product.id)
      if (existingItem) {
        const updatedCart = prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantityToAdd } : item,
        )
        console.log("Prodotto già presente, quantità aggiornata:", updatedCart)
        return updatedCart
      } else {
        const newCart = [...prevCart, { ...product, quantity: quantityToAdd }]
        console.log("Nuovo prodotto aggiunto:", newCart)
        return newCart
      }
    })
  }

  const updateQuantity = (productId: string, newQuantity: number) => {
    setCart((prevCart) => {
      console.log(`Aggiornando quantità per ${productId} a ${newQuantity}`)
      if (newQuantity <= 0) {
        const filteredCart = prevCart.filter((item) => item.id !== productId)
        console.log("Prodotto rimosso (quantità <= 0):", filteredCart)
        return filteredCart
      }
      const updatedCart = prevCart.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item))
      console.log("Quantità aggiornata:", updatedCart)
      return updatedCart
    })
  }

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => {
      console.log("Rimuovendo dal carrello:", productId)
      const filteredCart = prevCart.filter((item) => item.id !== productId)
      console.log("Carrello dopo rimozione:", filteredCart)
      return filteredCart
    })
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const contextValue = {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
    getCartItemCount,
  }

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
}

// 3. Crea un custom hook per usare il Context
export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}