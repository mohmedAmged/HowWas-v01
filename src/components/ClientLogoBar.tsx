'use client'

import React from 'react'
import styles from './ClientLogoBar.module.css'

const logos = [
  '/logos/langchain.svg',
  '/logos/resend.svg',
  '/logos/loops.svg',
  '/logos/mobbin.svg',
  '/logos/gopuff.svg',
  '/logos/betashares.svg',
  '/logos/submagic.svg',
  '/logos/mozilla.svg',
  '/logos/github.svg',
  '/logos/1password.svg',
]

export default function ClientLogoBar() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>Trusted by fast-growing companies worldwide</p>
      <div className={styles.logoScroller}>
        <div className={styles.fadeLeft}></div>
        <div className={styles.fadeRight}></div>
        <div className={styles.track}>
          {logos.concat(logos).map((src, i) => (
            <img key={i} src={src} alt="Client logo" className={styles.logo} />
          ))}
        </div>
      </div>
    </div>
  )
}
