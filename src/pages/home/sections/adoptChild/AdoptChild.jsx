import React from 'react'
import style from './AdoptChild.module.scss'

const AdoptChild = () => {
  return (
    <div className={style.section}>
        <div className={style.container}>
            <div className={style.left}>
                <div className={style.image}>
                    <img src="https://c7.alamy.com/comp/P9J58Y/hand-drawn-of-happy-family-coloring-book-educational-for-kids-coloring-cartoon-illustration-line-drawing-illustration-P9J58Y.jpg" alt="" />
                </div>
                <div className={style.adoptText}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nemo et, esse laudantium consequatur. Eum soluta illum architecto dolorum quae suscipit dignissimos! Saepe, amet explicabo nemo eligendi totam sint repudiandae.</p>
                    <button>Adopt A Child Now</button>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.Steps}>
                    <h1>Steps to adopt & foster a child</h1>
                </div>
                <div className={style.stepsList}>
                    <ol>
                        <li><a href="">1. Getting Started</a></li>
                        <li><a href="">2. Envisioning Your Family</a></li>
                        <li><a href="">3. Getting Approved</a></li>
                        <li><a href="">4. Being matched width a child</a></li>
                        <li><a href="">5. Receiving a placement</a></li>
                        <li><a href="">6. Finalizing an adoption</a></li>
                        <li><a href="">7. State Information</a></li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdoptChild