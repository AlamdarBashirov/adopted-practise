import React, { useEffect } from 'react'
import style from './BasketSection.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductsBasketThunk, getProductsBasketThunk } from '../../../redux/reducers/basketSlice'
import BasketCard from '../../../components/cards/basketCard/BasketCard'

const BasketSection = () => {
  const dispatch = useDispatch()

    const products = useSelector((state) => state.basket.basket)
    const loading = useSelector((state) => state.basket.loading)
    const error = useSelector((state) => state.basket.error)

    const deleteItem = (id) => {
      dispatch(deleteProductsBasketThunk(id))
      console.log('deleted', id);
    }

    useEffect(() => {
        dispatch(getProductsBasketThunk())
    }, [])

    if (error) return <h1>Xeta oldu</h1>
    if (loading) return <h1>Loading</h1>


  return (
    <div>
        <div>
            { products && products.map((item) => <BasketCard item={item} deleteItem={() => deleteItem(item.id)} />)}
        </div>
    </div>
  )
  
}

export default BasketSection