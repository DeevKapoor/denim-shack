"use client";
import Image from "next/image"
import Link from "next/link"
import { Button } from "../components/ui/button"
import { CategoryNav } from "@/components/category-nav"
import { TrendingProducts } from "@/components/trending-products"
import { InstagramFeed } from "@/components/instagram-feed"
import { Newsletter } from "@/components/newsletter"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative text-center text-white space-y-6 max-w-3xl mx-auto px-4"
        >
          <span className="text-sm uppercase tracking-widest">New Season</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">The Future of Fashion</h1>
          <p className="text-lg md:text-xl text-white/80">
            Discover our latest collection of premium streetwear essentials
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              Shop Men
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
              Shop Women
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Category Navigation */}
      <CategoryNav />

      {/* Featured Collections */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/men" className="group relative overflow-hidden">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/placeholder.svg"
                  alt="Men's Collection"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h2 className="text-3xl font-bold text-white mb-4">Men&apos;s Collection</h2>
                  <Button variant="outline" className="text-white border-white hover:bg-white/20">
                    Shop Now
                  </Button>
                </div>
              </div>
            </Link>
            <div className="grid grid-cols-1 gap-8">
              <Link href="/women" className="group relative overflow-hidden">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/placeholder.svg"
                    alt="Women's Collection"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Women&apos;s Collection</h2>
                    <Button variant="outline" className="text-white border-white hover:bg-white/20">
                      Shop Now
                    </Button>
                  </div>
                </div>
              </Link>
              <Link href="/accessories" className="group relative overflow-hidden">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/placeholder.svg"
                    alt="Accessories"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Accessories</h2>
                    <Button variant="outline" className="text-white border-white hover:bg-white/20">
                      Shop Now
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Trending Now</h2>
              <p className="text-muted-foreground">Discover what&apos;s hot this season</p>
            </div>
            <Button variant="link" size="lg">
              View All
            </Button>
          </div>
          <TrendingProducts />
        </div>
      </section>

      {/* Featured Story */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-sm uppercase tracking-widest text-primary">Our Story</span>
              <h2 className="text-4xl font-bold tracking-tight">Crafting Modern Essentials Since 2024</h2>
              <p className="text-lg text-muted-foreground">
                We believe in creating timeless pieces that blend contemporary design with sustainable practices. Our
                commitment to quality and innovation drives everything we do.
              </p>
              <Button size="lg">Learn More</Button>
            </div>
            <div className="relative aspect-square">
              <Image src="/placeholder.svg" alt="Brand Story" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">@denimshack</h2>
            <p className="text-muted-foreground">Follow us on Instagram for daily inspiration</p>
          </div>
          <InstagramFeed />
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  )
}

