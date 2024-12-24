import React from 'react'
import style from './FeaturedSection.module.scss'

const FeaturedSection = () => {
  return (
    <div className={style.section}>
        <div className={style.sectionName}>
            <h1>Featured Stories</h1>
        </div>
        <div className={style.cardBox}>
            <div className={`${style.card} ${style.cardOne}`}>
                
            </div>
            <div className={`${style.card} ${style.cardTwo}`}>
                
            </div>
            <div className={`${style.card} ${style.cardThree}`}>
                
            </div>
        </div>
    </div>
  )
}

export default FeaturedSection