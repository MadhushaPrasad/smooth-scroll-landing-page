import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'

function Index() {
  return (
    <div className={styles.intro}>
      <div className={styles.backgroundImage}>
        <Image src={'/images/background.jpeg'} fill={true} alt="background image" />
      </div>
      <div className={styles.introContainer}>
        <div className={styles.introImage}>
          <Image src={'/images/intro.png'} fill={true} alt="background image" />
        </div>
        <h1>Smooth Scroll</h1>
      </div>
    </div>
  )
}

export default Index
