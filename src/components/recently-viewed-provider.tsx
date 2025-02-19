"use client"

import { createContext, useContext, useState } from "react"

interface RecentlyViewedContextType {
  recentlyViewed: string[]
  addToRecentlyViewed: (productId: string) => void
  clearRecentlyViewed: () => void
}

const RecentlyViewedContext = createContext<RecentlyViewedContextType | undefined>(
  undefined
)

export function RecentlyViewedProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([])

  const addToRecentlyViewed = (productId: string) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((id) => id !== productId)
      return [productId, ...filtered].slice(0, 10) 
    })
  }

  const clearRecentlyViewed = () => {
    setRecentlyViewed([])
  }

  return (
    <RecentlyViewedContext.Provider
      value={{
        recentlyViewed,
        addToRecentlyViewed,
        clearRecentlyViewed,
      }}
    >
      {children}
    </RecentlyViewedContext.Provider>
  )
}

export function useRecentlyViewed() {
  const context = useContext(RecentlyViewedContext)
  if (context === undefined) {
    throw new Error(
      "useRecentlyViewed must be used within a RecentlyViewedProvider"
    )
  }
  return context
}