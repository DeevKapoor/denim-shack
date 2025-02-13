import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"
import { Button } from "../components/ui/button"
import { QuickAddToCart } from "@/components/quick-add-to-cart"

export function ProductGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="group relative">
          <div className="aspect-[3/4] overflow-hidden rounded-lg bg-muted">
            <Link href={`/products/${i}`}>
              <Image
                src="/placeholder.svg"
                alt="Product"
                width={600}
                height={800}
                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100"
            >
              <Heart className="h-5 w-5" />
            </Button>
          </div>
          <div className="mt-4 space-y-1">
            <h3 className="text-sm font-medium">
              <Link href={`/products/${i}`}>Premium Denim Jacket</Link>
            </h3>
            <p className="text-sm text-muted-foreground">$199.00</p>
            <div className="flex gap-1">
              {["S", "M", "L", "XL"].map((size) => (
                <div key={size} className="w-6 h-6 rounded-full border flex items-center justify-center text-xs">
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 opacity-0 transition-opacity group-hover:opacity-100">
            <QuickAddToCart />
          </div>
        </div>
      ))}
    </div>
  )
}

