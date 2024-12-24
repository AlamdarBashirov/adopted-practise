import React from 'react'
import style from './IntroSection.module.scss'

const IntroSection = () => {
  return (
    <div className={style.section}>
      <div className={style.text}>
        <h2>Mark Rodriuez, 12 yrs. old</h2>
        <h1>NEEDS A LOVING PARENTS</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid velit, asperiores libero. Beatae vitae nostrum et distinctio saepe autem quisquam cupiditate labore voluptatum.</p>
        <button>Adopt Him Now</button>
      </div>
    </div>
  )
}

export default IntroSection