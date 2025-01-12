import React from 'react'
import style from './AdminCard.module.scss'

const AdminCard = ({item, deleteItem, addItem}) => {
  return (
    <div className={style.card}>
        <img src={item.image} alt="" />
        <p>{item.title}</p>
        <p>{item.price}</p>
        <div className={style.buttons}>
            <button onClick={deleteItem}>Sehifeden Sil</button>
            <button onClick={addItem}>Sehifeye elave et</button>
        </div>
    </div>
  )
}

export default AdminCard