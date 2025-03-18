"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  imageSrc?: string
}

export default function TestimonialCard({ quote, author, role, imageSrc }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl p-4 sm:p-6 shadow-lg h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    >
      <div className="mb-4">
        <svg className="h-8 w-8 text-amber-400" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>
      <p className="text-sm sm:text-base text-neutral-700 mb-6 flex-grow">{quote}</p>
      <div className="flex items-center">
        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 hidden">
          <Image src={imageSrc ?? "/placeholder.svg"} alt={author} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-amber-900">{author}</h4>
          <p className="text-amber-600 text-sm">{role}</p>
        </div>
      </div>
    </motion.div>
  )
}

