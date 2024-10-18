"use client"
import React, { useRef, ReactNode } from 'react'
import { motion, MotionProps } from 'framer-motion'

interface MoveEffectProps {
  children: ReactNode
  className?: string
  scale?: number
  gradientColor?: string
  gradientSize?: string
  transitionDuration?: number
  transitionEase?: string
  springConfig?: {
    stiffness: number
    damping: number
  }
}

export default function MoveEffect({
  children,
  className = '',
  scale = 1.02,
  gradientColor = 'rgba(255,255,255,0.1)',
  gradientSize = '50%',
  transitionDuration = 300,
  transitionEase = 'ease-in-out',
  springConfig = { stiffness: 400, damping: 17 }
}: MoveEffectProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const { left, top, width, height } = ref.current.getBoundingClientRect()
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height
      ref.current.style.setProperty('--mouse-x', `${x * 100}%`)
      ref.current.style.setProperty('--mouse-y', `${y * 100}%`)
    }
  }

  const motionProps: MotionProps = {
    whileHover: { scale },
    transition: { type: "spring", ...springConfig }
  }

  return (
    <motion.div
      ref={ref}
      className={`relative ${className} group`}
      onMouseMove={handleMouseMove}
      {...motionProps}
    >
      <div 
        className="absolute inset-0 transition-opacity pointer-events-none opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${gradientColor}, transparent ${gradientSize})`,
          transitionDuration: `${transitionDuration}ms`,
          transitionTimingFunction: transitionEase
        }}
      />
      {children}
    </motion.div>
  )
}
