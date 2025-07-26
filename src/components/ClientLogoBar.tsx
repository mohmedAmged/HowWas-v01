'use client'

import React from 'react'
import styles from './ClientLogoBar.module.css'
import brand1 from '../imgs/artigianelli-seeklogo.png'
import brand2 from '../imgs/elecosoft-seeklogo.png'
import Image from 'next/image'
const logos = [
  brand1,
  brand2,
  brand1,
  brand2,
  brand1,
  brand2,
  brand1,
  brand2,
  brand1,
  brand2,
  brand1,
  brand2,

]

export default function ClientLogoBar() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>Trusted by fast-growing companies worldwide</p>
      <div className={styles.logoScroller}>
        <div className={styles.fadeLeft}></div>
        <div className={styles.fadeRight}></div>
        <div className={styles.track}>
          {logos.map((src, i) => (
            <Image key={i} src={src} alt={`brand_${i}`} width={100} height={40}/>
          ))}
        </div>
      </div>
    </div>
  )
}
