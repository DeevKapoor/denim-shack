"use client"

import { useRef } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../components/ui/button"

const categories = ["New", "Trending", "Jeans", "Dresses", "Tops", "Shirts", "Jackets", "Accessories", "Shoes", "Sale"]

export function CategoryNav() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollAmount = direction === "left" ? -200 : 200
    container.scrollBy({ left: scrollAmount, behavior: "smooth" })
  }

  return (
    <div className="relative border-y bg-muted/50">
      <div className="container mx-auto px-4 flex items-center">
        <Button variant="ghost" size="icon" className="hidden md:flex shrink-0" onClick={() => scroll("left")}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div ref={scrollContainerRef} className="flex overflow-x-auto scrollbar-hide py-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/${category.toLowerCase()}`}
              className="text-sm font-medium whitespace-nowrap hover:text-primary transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>
        <Button variant="ghost" size="icon" className="hidden md:flex shrink-0" onClick={() => scroll("right")}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

