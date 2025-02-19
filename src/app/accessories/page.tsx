import React from "react"
import  Layout  from "../layout"
import { ProductCard } from "@/components/product-card"

const mockAccessories = [
  { id: 1, name: "Accessory 1", price: 50, image: "/accessory1.jpg" },
  { id: 2, name: "Accessory 2", price: 75, image: "/accessory2.jpg" },
  { id: 3, name: "Accessory 3", price: 85, image: "/accessory3.jpg" },
  { id: 4, name: "Accessory 4", price: 95, image: "/accessory4.jpg" },
]

export default function Accessories() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Accessories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockAccessories.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  )
}