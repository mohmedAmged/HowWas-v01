// components/ArrowButton.tsx
'use client'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

export function ArrowLeft(props) {
  return <FiArrowLeft size={20} color="white" {...props} />
}

export function ArrowRight(props) {
  return <FiArrowRight size={20} color="white" {...props} />
}