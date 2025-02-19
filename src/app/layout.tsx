"use client"

import { Space_Grotesk } from "next/font/google"
import "../app/globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { CartProvider } from "@/components/cart-provider"
import { WishlistProvider } from "@/components/wishlist-provider"
import { RecentlyViewedProvider } from "@/components/recently-viewed-provider"
import type { ReactNode } from "react"
import { useState, useEffect } from "react"
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

const ErrorBoundary = ({ children }: { children: ReactNode }) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={({ error, resetErrorBoundary }) => (
        <div role="alert">
          <p>Something went wrong:</p>
          <pre>{error.message}</pre>
          <button onClick={resetErrorBoundary}>Try again</button>
        </div>
      )}
    >
      {children}
    </ReactErrorBoundary>
  )
}

interface ThemeProviderProps {
  children: ReactNode
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
  storageKey?: string
  defaultTheme?: string
}

export const ThemeProvider = ({
  children,
  enableSystem = true,
  storageKey = "theme",
  defaultTheme = "light",
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    const storedTheme = localStorage.getItem(storageKey)
    if (storedTheme) {
      setTheme(storedTheme)
    } else if (enableSystem) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      setTheme(systemTheme)
    }
  }, [enableSystem, storageKey])

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem(storageKey, theme)
  }, [theme, storageKey])

  return (
    <>{children}</>
  )
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className={spaceGrotesk.className}
    >
      <body>
        <ErrorBoundary>
          <ThemeProvider
            defaultTheme="system"
            enableSystem
            storageKey="denim-shack"
          >
            <CartProvider>
              <WishlistProvider>
                <RecentlyViewedProvider>
                  <Header />
                  {children}
                  <Footer />
                  <Toaster />
                </RecentlyViewedProvider>
              </WishlistProvider>
            </CartProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}