"use client"

import * as React from "react"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (itemId: string) => void
  updateCartItem: (itemId: string, quantity: number) => void
  clearCart: () => void
  cartTotal: number
}

export const CartContext = React.createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = React.useState<CartItem[]>(() => {
    const savedCart = typeof window !== 'undefined' ? localStorage.getItem('cart') : null
    return savedCart ? JSON.parse(savedCart) : []
  })

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = React.useCallback((item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      }
      return [...prevCart, item]
    })
  }, [])

  const removeFromCart = React.useCallback((itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId))
  }, [])

  const updateCartItem = React.useCallback((itemId: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    )
  }, [])

  const clearCart = React.useCallback(() => {
    setCart([])
  }, [])

  const cartTotal = React.useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }, [cart])

  const value = React.useMemo(() => ({
    cart,
    addToCart,
    removeFromCart,
    updateCartItem,
    clearCart,
    cartTotal,
  }), [cart, addToCart, removeFromCart, updateCartItem, clearCart, cartTotal])

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = React.useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}