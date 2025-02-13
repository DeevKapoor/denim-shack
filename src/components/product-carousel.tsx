"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../components/ui/button"
import { ProductCard } from "@/components/product-card"


export function ProductCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollAmount = direction === "left" ? -400 : 400
    container.scrollBy({ left: scrollAmount, behavior: "smooth" })
  }

  return (
    <div className="relative">
      <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="min-w-[300px] snap-start">
            <ProductCard product={{ id: i.toString(), name: `Product ${i + 1}`, price: 100, image: 'image-url', category: 'category' }} />
            </div>
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute -left-4 top-1/2 -translate-y-1/2 bg-background shadow-lg hidden md:flex"
        onClick={() => scroll("left")}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute -right-4 top-1/2 -translate-y-1/2 bg-background shadow-lg hidden md:flex"
        onClick={() => scroll("right")}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  )
}

