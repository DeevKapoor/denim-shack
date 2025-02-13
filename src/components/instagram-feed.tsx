"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const posts = [
  {
    id: "1",
    image: "/placeholder.svg",
    likes: "2.5k",
    comments: "123",
  },
  {
    id: "2",
    image: "/placeholder.svg",
    likes: "1.8k",
    comments: "97",
  },
  {
    id: "3",
    image: "/placeholder.svg",
    likes: "3.2k",
    comments: "156",
  },
  {
    id: "4",
    image: "/placeholder.svg",
    likes: "2.1k",
    comments: "89",
  },
  {
    id: "5",
    image: "/placeholder.svg",
    likes: "4.5k",
    comments: "234",
  },
  {
    id: "6",
    image: "/placeholder.svg",
    likes: "1.9k",
    comments: "78",
  },
]

export function InstagramFeed() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {posts.map((post, i) => (
        <motion.a
          key={post.id}
          href="#"
          className="group relative aspect-square overflow-hidden rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Image
            src={post.image || "/placeholder.svg"}
            alt={`Instagram post ${post.id}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
            <div className="absolute inset-0 flex items-center justify-center gap-4 text-white">
              <div className="flex items-center gap-1">
                <span>❤️</span>
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <span>💬</span>
                <span>{post.comments}</span>
              </div>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  )
}

