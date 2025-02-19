import React from "react"
import Layout from "../layout"
import { ProductCard } from "@/components/product-card"

const mockTrendingProducts = [
  { id: 1, name: "Product 5", price: 120, image: "/product5.jpg", category: "Category 1" },
  { id: 2, name: "Product 6", price: 180, image: "/product6.jpg", category: "Category 2" },
  { id: 3, name: "Product 7", price: 220, image: "/product7.jpg", category: "Category 3" },
  { id: 4, name: "Product 8", price: 260, image: "/product8.jpg", category: "Category 4" },
]

export default function TrendingNow() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Trending Now</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockTrendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  )
}