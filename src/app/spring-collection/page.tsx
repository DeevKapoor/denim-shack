import React from "react"
import  Layout  from "../layout"
import { ProductCard } from "@/components/product-card"

const mockSpringCollection = [
  { id: 1, name: "Spring Product 1", price: 90, image: "/spring-product1.jpg" },
  { id: 2, name: "Spring Product 2", price: 140, image: "/spring-product2.jpg" },
  { id: 3, name: "Spring Product 3", price: 190, image: "/spring-product3.jpg" },
  { id: 4, name: "Spring Product 4", price: 240, image: "/spring-product4.jpg" },
]

export default function SpringCollection() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Spring Collection</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockSpringCollection.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  )
}