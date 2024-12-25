import React, { useEffect } from 'react'
import style from './AdminSection.module.scss'
import Layout from '../../../../layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { addToPageFromAdminThunk, deleteItemFromAdminPanelThunk, getProductsAdminPanelThunk } from '../../../../redux/reducers/adminSlice'
import AdminCard from '../../../../components/cards/adminPanelCard/AdminCard'

const AdminSection = () => {


    const dispatch = useDispatch()

    const products = useSelector((state) => state.admin.admin)
    const loading = useSelector((state) => state.admin.loading)
    const error = useSelector((state) => state.admin.error)

    const deleteItem = async (id) =>{
      try {
        const response = await fetch(`http://localhost:5000/products/${id}`);
        if (!response.ok) {
          alert('Məhsul səhifədə mövcud deyil');
          return;
        }
         dispatch(deleteItemFromAdminPanelThunk(id));
         dispatch(getProductsAdminPanelThunk())
        console.log("Deleted", id);
        alert('Məhsul silindi');
      } catch (error) {
        console.error("Error deleting item:", error);
        alert('Məhsul silinərkən xəta baş verdi');
      }
    }


    const addItem = (item) =>{
      dispatch(addToPageFromAdminThunk(item))
      alert('sehifeye elave olundu')
    }

    useEffect(() => {
        dispatch(getProductsAdminPanelThunk())
    }, [])

    if (loading) return <h1>Yuklenir</h1>
    if (error) return <h1>Xeta bas verdi</h1>
  return (
    <div className={style.section}>
        <h2>Butun mehsullar</h2>
        <div className={style.container}>
            {products && products.map((item) => <AdminCard item={item} deleteItem={() => deleteItem(item.id)}  addItem={() => addItem(item)} />)}
        </div>
    </div>
  )
}

export default AdminSection