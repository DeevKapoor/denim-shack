"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { motion } from "framer-motion"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const { add } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    add("Thanks for subscribing! Check your email to confirm your subscription.")
    setEmail("")
  }

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-muted -skew-y-6 transform origin-top-left" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative container mx-auto px-4 text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Join the Movement</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for exclusive drops, special offers, and behind-the-scenes content.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            required
          />
          <Button type="submit">Subscribe</Button>
        </form>
        <p className="text-sm text-muted-foreground mt-4">
          By subscribing, you agree to our Privacy Policy and Terms of Service.
        </p>
      </motion.div>
    </section>
  )
}

