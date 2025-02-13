"use client"

import { useWishlistItem } from "@/components/wishlist-provider"
import { Button } from "@/components/ui/button"
import { Heart, HeartOff } from "lucide-react"
import Image from 'next/image'

interface ProductCardProps {
  product: {
    id: string
    name: string
    price: number
    image: string
    category: string
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const { inWishlist, toggle } = useWishlistItem(product)

  return (
    <div className="relative group">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 z-10"
        onClick={toggle}
      >
        {inWishlist ? (
          <Heart className="w-5 h-5 fill-red-500 text-red-500" />
        ) : (
          <HeartOff className="w-5 h-5" />
        )}
      </Button>
        <Image
          src={product.image}
          alt={product.name}
          layout="responsive"
          width={500}
          height={500}
          className="object-cover transition-transform group-hover:scale-105"
        />
      <div className="p-4">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.category}</p>
        <p className="mt-2 font-bold">${product.price.toFixed(2)}</p>
    </div>
    </div>
  )
}