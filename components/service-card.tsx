"use client"

import React, {useEffect} from "react"

import { useState } from "react"
import Image from "next/image"
import { Clock } from "lucide-react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  prices: { [key: string] : number }
  imageSrc: string
  bookingLink: string
  onBookingClick?: () => void
}

export default function ServiceCard({
  title,
  description,
    prices,
  imageSrc
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

const [selected, setSelected] = useState<string | null>();
const handlePriceClick = (key: string) => {
    setSelected(key);


};

useEffect(() => {

    const firstKey = Object.keys(prices)[0];
    if (firstKey) {
        setSelected(firstKey);
    }

}, [prices]);
  const renderPriceOption = (key: string, index: number) => (
    <div key={index} onClick={() => handlePriceClick(key)} className={`flex flex-col items-center justify-between border-2 ${key === selected ? 'border-amber-600' : 'border-neutral-100'}  py-2 px-3 w-full cursor-pointer rounded-xl hover:border-amber-600 transition-all duration-300`}>
      <div className="flex flex-col items-center text-neutral-500 mb-1">
        <Clock className="w-6 h-6" />
        <span className="text-sm mt-1">{key}</span>
      </div>
      <div>
        <span className="text-xs text-amber-600">$</span>
        <span className="text-xl font-bold text-amber-600">{prices[key]}</span>
      </div>

    </div>
  )

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
          sizes={"200px"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
        />
      </div>
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-serif font-bold text-neutral-900 mb-2">{title}</h3>
        <p className="text-neutral-700 mb-4 flex-grow">{description}</p>

        <div className="flex justify-around gap-2 mt-2">
          {
              prices && Object.keys(prices).length > 0 && Object.keys(prices).map(renderPriceOption)
          }
        </div>

      </div>
    </motion.div>
  )
}

