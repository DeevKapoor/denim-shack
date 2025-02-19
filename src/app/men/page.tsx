import React from "react"
import Layout from "../layout"
import { ProductCard } from "@/components/product-card"

const mockMenProducts = [
  { id: 1, name: "Men's Product 1", price: 100, image: "/men-product1.jpg", category: "Men" },
  { id: 2, name: "Men's Product 2", price: 150, image: "/men-product2.jpg", category: "Men" },
  { id: 3, name: "Men's Product 3", price: 200, image: "/men-product3.jpg", category: "Men" },
  { id: 4, name: "Men's Product 4", price: 250, image: "/men-product4.jpg", category: "Men" },
]

export default function Men() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Men&apos;s Collection</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockMenProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  )
}