import React from "react"
import Layout  from "../layout"
import { ProductCard } from "@/components/product-card"

const mockWomenProducts = [
  { id: 1, name: "Women's Product 1", price: 90, image: "/women-product1.jpg" },
  { id: 2, name: "Women's Product 2", price: 140, image: "/women-product2.jpg" },
  { id: 3, name: "Women's Product 3", price: 190, image: "/women-product3.jpg" },
  { id: 4, name: "Women's Product 4", price: 240, image: "/women-product4.jpg" },
]

export default function Women() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Women&apos;s Collection</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockWomenProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  )
}