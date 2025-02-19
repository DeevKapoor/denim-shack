"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"

interface ToastOptions {
  title: string;
  description?: string;
  variant?: "default" | "destructive";
}

export function useToast() {
  const add = (options: ToastOptions) => {
    console.log("Toast options:", options)
   
  }

  return {
    add,
  }
}

export default function useLocalCart() {
  interface CartItem {
    id: string;
    name: string;
    price: number;
    size: string;
    quantity: number;
    image: string;
  }

  const addToCart = (item: CartItem) => {
    console.log("Adding item to cart:", item)
   
  }
                                                                              
  return {
    addToCart,
  }
}

export function QuickAddToCart() {
  const [selectedSize, setSelectedSize] = useState<string>("")
  const { addToCart } = useLocalCart()
  const { add: toast } = useToast()

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        variant: "destructive",
      })
      return
    }

    addToCart({
      id: "1",
      name: "Premium Denim Jacket",
      price: 199,
      size: selectedSize,
      quantity: 1,
      image: "/placeholder.svg",
    })

    toast({
      title: "Added to cart",
      description: "Check your cart to complete your purchase",
    })
  }

  return (
    <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
      <div className="flex gap-2 mb-4">
        {["S", "M", "L", "XL"].map((size) => (
          <Button
            key={size}
            variant={selectedSize === size ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedSize(size)}
            className="w-10 h-10 rounded-full p-0"
          >
            {size}
          </Button>
        ))}
      </div>
      <Button className="w-full" onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </div>
  )
}

