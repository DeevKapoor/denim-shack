import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { CartProvider } from "@/components/cart-provider"
import { WishlistProvider } from "@/components/wishlist-provider"
import { RecentlyViewedProvider } from "@/components/recently-viewed-provider"
import type { ReactNode } from "react"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "DENIM SHACK | Modern Fashion for the Bold",
  description: "Discover premium streetwear and denim essentials for the modern generation",
  viewport: { width: 'device-width', initialScale: 1 },
  icons: {
    icon: "/favicon.ico",
  },
  defaultTheme?: string
}

const ErrorBoundary = ({ children }: { children: ReactNode }) => {
  if (process.env.NODE_ENV === "development") {
    return (
      <div role="alert">
        {children}
      </div>
    )
  }
  return <>{children}</>
}

interface ThemeProviderProps {
  children: ReactNode
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
  storageKey?: string
}

export const ThemeProvider = ({
  children,
}: ThemeProviderProps) => {
  // ThemeProvider implementation
  return <>{children}</>
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