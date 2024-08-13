import React from 'react'
import styles from './AboutCard.module.css'

const AboutCard = ({img, heading, para}) => {

    const bg_style ={
        backgroundImage: `url(${img})`,
    }

  return (
    <div className={styles.AboutCard} >
      <div className={styles.overlay} style={bg_style}></div>
      <div className={styles.About_title}>
        <h3 style={{marginBottom: '4px'}}>{heading}</h3>
        <p>{para}</p>
      </div>
    </div>
  )
}

export default AboutCard
