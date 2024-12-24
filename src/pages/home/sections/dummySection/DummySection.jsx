import React, { useEffect } from 'react'
import style from './DummySection.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsHomeThunk, postProductsToBasket, postProductsToWishlist } from '../../../../redux/reducers/productsSlice'
import DummyCard from '../../../../components/cards/dummyCard/DummyCard'

const DummySection = () => {

  const dispatch = useDispatch()

  const products = useSelector((state) => state.products.products)
  const loading = useSelector((state) => state.products.loading)
  const error = useSelector((state) => state.products.error)

  const AddBasket = (item) => {
    dispatch(postProductsToBasket(item))
  }

  const AddWishlist = (item) => {
    dispatch(postProductsToWishlist(item))
  }

  useEffect(() => {
    dispatch(getProductsHomeThunk())
  }, [])

  if (error) return <h1>Xeta bas verdi</h1>
  if (loading) return <h1>Yuklenir</h1>
  return (
    <div className={style.section}>
      <div className={style.container}>
        {products && products.map((item) => <DummyCard item={item} AddBasket={() => AddBasket(item)} AddWishlist={() => AddWishlist(item)} />)}
      </div>
    </div>
  )
}

export default DummySection