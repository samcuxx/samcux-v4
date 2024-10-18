"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRef, useState } from "react"

interface AnimatedCardProps {
  title: string;
  description: string;
  image: string;
  width?: number;
  height?: number;
  hoverScale?: number;
  gradientSize?: number;
  gradientOpacity?: number;
  className?: string;
  imageClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function AnimatedCard({
  title,
  description,
  image,
  width = 350,
  height = 350,
  hoverScale = 1.03,
  gradientSize = 150,
  gradientOpacity = 0.2,
  className = "",
  imageClassName = "",
  titleClassName = "",
  descriptionClassName = "",
}: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (rect) {
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      setMousePosition({ x, y })
    }
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: hoverScale }}
      className={`relative rounded-2xl border dark:border-zinc-900 hover:cursor-pointer overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <div
        className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out"
        style={{
          background: `radial-gradient(circle ${gradientSize}px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,${gradientOpacity}), transparent 80%)`,
          opacity: isHovered ? 1 : 0,
          pointerEvents: 'none',
        }}
      />
      <div className="relative z-10 p-3 h-full flex flex-col">
        <div className={`relative w-full flex-grow rounded overflow-hidden ${imageClassName}`}>
          <Image
            src={image}
            alt="Card thumbnail"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <p className={`text-sm dark:text-gray-300 ${titleClassName}`}>{title}</p>
          <p className={`text-xs dark:text-gray-400 ${descriptionClassName}`}>{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
