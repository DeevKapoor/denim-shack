"use client"

import * as React from "react"

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
}

interface WishlistContextType {
  items: Product[]
  wishlistCount: number
  addToWishlist: (product: Product) => void
  removeFromWishlist: (productId: string) => void
  isInWishlist: (productId: string) => boolean
  clearWishlist: () => void
  toggleWishlist: (product: Product) => void
}

const WishlistContext = React.createContext<WishlistContextType | undefined>(undefined)

const WISHLIST_STORAGE_KEY = "denim-shack-wishlist"

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<Product[]>(() => {
    const savedWishlist = typeof window !== 'undefined' ? localStorage.getItem(WISHLIST_STORAGE_KEY) : null
    return savedWishlist ? JSON.parse(savedWishlist) : []
  })

  const wishlistCount = items.length

  React.useEffect(() => {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addToWishlist = React.useCallback((product: Product) => {
    setItems((prev) => {
      if (prev.some(item => item.id === product.id)) {
        return prev
      }
      return [...prev, product]
    })
  }, [])

  const removeFromWishlist = React.useCallback((productId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== productId))
  }, [])

  const isInWishlist = React.useCallback((productId: string) => {
    return items.some((item) => item.id === productId)
  }, [items])

  const clearWishlist = React.useCallback(() => {
    setItems([])
  }, [])

  const toggleWishlist = React.useCallback((product: Product) => {
    setItems((prev) => {
      const exists = prev.some(item => item.id === product.id)
      if (exists) {
        return prev.filter(item => item.id !== product.id)
      }
      return [...prev, product]
    })
  }, [])

  const value = React.useMemo(() => ({
    items,
    wishlistCount,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist,
    toggleWishlist,
  }), [items, wishlistCount, addToWishlist, removeFromWishlist, isInWishlist, clearWishlist, toggleWishlist])

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = React.useContext(WishlistContext)
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}

export function useWishlistItem(product: Product) {
  const { isInWishlist, toggleWishlist } = useWishlist()
  
  const inWishlist = isInWishlist(product.id)
  const toggle = React.useCallback(() => {
    toggleWishlist(product)
  }, [product, toggleWishlist])

  return { inWishlist, toggle }
}