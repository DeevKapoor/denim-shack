"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../components/ui/button"
import { ProductCard } from "@/components/product-card"
import { motion } from "framer-motion"

const products = [
  {
    id: "1",
    name: "Oversized Denim Jacket",
    price: 129.99,
    image: "/placeholder.svg",
    category: "Jackets",
  },
  {
    id: "2",
    name: "Cargo Pants",
    price: 89.99,
    image: "/placeholder.svg",
    category: "Pants",
  },
  {
    id: "3",
    name: "Graphic Print T-Shirt",
    price: 39.99,
    image: "/placeholder.svg",
    category: "T-Shirts",
  },
  {
    id: "4",
    name: "Distressed Jeans",
    price: 99.99,
    image: "/placeholder.svg",
    category: "Jeans",
  },
  {
    id: "5",
    name: "Cropped Hoodie",
    price: 69.99,
    image: "/placeholder.svg",
    category: "Hoodies",
  },
  {
    id: "6",
    name: "Utility Vest",
    price: 79.99,
    image: "/placeholder.svg",
    category: "Vests",
  },
]

export function TrendingProducts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollAmount = direction === "left" ? -400 : 400
    container.scrollBy({ left: scrollAmount, behavior: "smooth" })
  }

  return (
    <div className="relative">
      <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="min-w-[300px] snap-start"
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
      <div className="hidden md:block">
        <Button
          variant="outline"
          size="icon"
          className="absolute -left-4 top-1/2 -translate-y-1/2 bg-background shadow-lg"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute -right-4 top-1/2 -translate-y-1/2 bg-background shadow-lg"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

