import React from 'react'
import style from './DummyCard.module.scss'

const DummyCard = ({item, AddBasket, AddWishlist, goDetail}) => {
  return (
    <div className={style.card} onClick={goDetail}>
        <img src={item.image} alt="" />
        <p>{item.title}</p>
        <p>${item.price}</p>
        <div className={style.buttons}>
            <button onClick={AddBasket}>Add Basket</button>
            <button onClick={AddWishlist}>Add Wishlist</button>
        </div>
    </div>
  )
}

export default DummyCard