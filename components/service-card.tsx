"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Clock, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  duration: string
  price: number
  imageSrc: string
  bookingLink: string
  onBookingClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export default function ServiceCard({
  title,
  description,
  duration,
  price,
  imageSrc,
  bookingLink,
  onBookingClick,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-40 sm:h-48 w-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
        />
      </div>
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-serif font-bold text-amber-900 mb-2">{title}</h3>
        <p className="text-amber-700 mb-4 flex-grow">{description}</p>
        <div className="flex items-center text-amber-600 mb-4">
          <Clock className="w-4 h-4 mr-2" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-lg sm:text-xl font-bold text-amber-900">${price}</span>
          <a
            href={bookingLink}
            onClick={onBookingClick}
            className="text-amber-600 hover:text-amber-800 transition-colors flex items-center"
          >
            <span>Book Now</span>
            <ArrowRight
              className={`w-4 h-4 ml-1 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
            />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

