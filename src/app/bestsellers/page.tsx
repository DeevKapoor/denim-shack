import React from "react"
import Layout from "../layout"
import { ProductCard } from "@/components/product-card"

const mockBestsellers = [
  { id: 1, name: "Bestseller 1", price: 110, image: "/bestseller1.jpg" },
  { id: 2, name: "Bestseller 2", price: 160, image: "/bestseller2.jpg" },
  { id: 3, name: "Bestseller 3", price: 210, image: "/bestseller3.jpg" },
  { id: 4, name: "Bestseller 4", price: 260, image: "/bestseller4.jpg" },
]

export default function Bestsellers() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Bestsellers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockBestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  )
}