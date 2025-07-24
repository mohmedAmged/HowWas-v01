// components/ArrowButton.tsx
'use client'
import { ComponentProps } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
type IconProps = ComponentProps<'svg'>

export function ArrowLeft(props: IconProps) {
  return <FiArrowLeft size={20} color="white" {...props} />
}

export function ArrowRight(props: IconProps) {
  return <FiArrowRight size={20} color="white" {...props} />
}