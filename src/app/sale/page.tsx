import React from "react"
import  Layout  from "../layout"
import { ProductCard } from "@/components/product-card"

const mockSaleProducts = [
  { id: 1, name: "Sale Product 1", price: 70, image: "/sale-product1.jpg" },
  { id: 2, name: "Sale Product 2", price: 120, image: "/sale-product2.jpg" },
  { id: 3, name: "Sale Product 3", price: 160, image: "/sale-product3.jpg" },
  { id: 4, name: "Sale Product 4", price: 200, image: "/sale-product4.jpg" },
]

export default function Sale() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Sale</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockSaleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  )
}