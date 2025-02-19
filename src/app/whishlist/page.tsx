import React from "react"
import Layout from "../layout"
import { useWishlist } from "@/components/wishlist-provider"
import { ProductCard } from "@/components/product-card"


export default function Wishlist() {
  const { items } = useWishlist()

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Wishlist</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((product) => (
            <ProductCard key={product.id} product={{ ...product, id: Number(product.id) }} />
          ))}
        </div>
      </div>
    </Layout>
  )
}