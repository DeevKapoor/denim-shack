"use client"

import { useState, useEffect, ReactElement } from "react"
import Link from "next/link"
import { Menu, Search, ShoppingBag, User, Heart, X } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet"
import { MegaMenu } from "@/components/mega-menu"
import { useWishlist } from "@/components/wishlist-provider"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface CartSheetProps {
  children: ({ open }: { open: () => void }) => ReactElement;
}
const CartSheet = ({ children }: CartSheetProps) => {
  const open = () => {
  };

  return children({ open });
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { cartCount } = useLocalCartLocal()
  const { wishlistCount } = useWishlist()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-background",
      )}
    >
      {/* Announcement Bar */}
      <div className="bg-primary px-4 py-2 text-primary-foreground">
        <p className="text-center text-sm font-medium">
          Free shipping on orders over $150 | Get 10% off your first order
        </p>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-0 bg-background z-50 px-4 py-3"
          >
            <div className="container mx-auto flex items-center gap-4">
              <Input
                type="search"
                placeholder="Search for products, brands, and more..."
                className="flex-1"
                autoFocus
              />
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-muted-foreground">New & Featured</h3>
                  <div className="grid gap-2">
                    <Link href="/new" className="text-lg hover:text-primary transition-colors">
                      New Arrivals
                    </Link>
                    <Link href="/trending" className="text-lg hover:text-primary transition-colors">
                      Trending Now
                    </Link>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-muted-foreground">Shop</h3>
                  <div className="grid gap-2">
                    <Link href="/men" className="text-lg hover:text-primary transition-colors">
                      Men
                    </Link>
                    <Link href="/women" className="text-lg hover:text-primary transition-colors">
                      Women
                    </Link>
                    <Link href="/accessories" className="text-lg hover:text-primary transition-colors">
                      Accessories
                    </Link>
                    <Link href="/sale" className="text-lg hover:text-primary transition-colors">
                      Sale
                    </Link>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-muted-foreground">Account</h3>
                  <div className="grid gap-2">
                    <Link href="/account" className="text-lg hover:text-primary transition-colors">
                      Profile
                    </Link>
                    <Link href="/orders" className="text-lg hover:text-primary transition-colors">
                      Orders
                    </Link>
                    <Link href="/wishlist" className="text-lg hover:text-primary transition-colors">
                      Wishlist
                    </Link>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            DENIM SHACK
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <MegaMenu trigger="New" />
            <MegaMenu trigger="Men" />
            <MegaMenu trigger="Women" />
            <Link href="/sale" className="text-sm font-medium hover:text-primary transition-colors">
              Sale
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/account">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="relative">
              <Link href="/wishlist">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
                <span className="sr-only">Wishlist</span>
              </Link>
            </Button>
            <CartSheet>
              {({ open }: { open: () => void }) => (
                <Button variant="ghost" size="icon" className="relative" onClick={open}>
                  <ShoppingBag className="h-5 w-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                  <span className="sr-only">Open cart</span>
                </Button>
              )}
            </CartSheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default function useLocalCartLocal() {

  return {
    cartCount: 0,
  }
}