import React from "react"
import Layout from "../layout"
import { ProductCard } from "@/components/product-card"

const mockPremiumSelection = [
  { id: 1, name: "Premium Product 1", price: 130, image: "/premium-product1.jpg" },
  { id: 2, name: "Premium Product 2", price: 180, image: "/premium-product2.jpg" },
  { id: 3, name: "Premium Product 3", price: 230, image: "/premium-product3.jpg" },
  { id: 4, name: "Premium Product 4", price: 280, image: "/premium-product4.jpg" },
]

export default function PremiumSelection() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Premium Selection</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockPremiumSelection.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  )
}