import React, { useEffect , useState} from "react";
import style from "./AdminSection.module.scss";
import Layout from "../../../../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  addToPageFromAdminThunk,
  deleteItemFromAdminPanelThunk,
  getProductsAdminPanelThunk,
} from "../../../../redux/reducers/adminSlice";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const AdminSection = () => {
  const dispatch = useDispatch();

  const navigation = useNavigate()

  const [text, setText] = useState('')
  const [sort, setSort] = useState('asc')

  const products = useSelector((state) => state.admin.admin);
  const loading = useSelector((state) => state.admin.loading);
  const error = useSelector((state) => state.admin.error);

  const deleteProduct = (id) => {
    dispatch(deleteItemFromAdminPanelThunk(id))
  }

  const filteredData = products
                               .filter(product => product.title.toLowerCase().includes(text.toLowerCase()))
                               .sort((a,b) => {
    if(sort == 'asc'){
      return a.price - b.price
    } else {
      return b.price - a.price
    }
  })

  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      price: "",
    },
    onSubmit: (values) => {
      dispatch(addToPageFromAdminThunk(values));
    },
  });

  useEffect(() => {
    dispatch(getProductsAdminPanelThunk());
  }, []);

  if (loading) return <h1>Yuklenir</h1>;
  if (error) return <h1>Xeta bas verdi</h1>;
  return (
    <div className={style.section}>
      <button onClick={() => navigation('/basket')}>go Basket </button>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          name="image"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.image}
        />
        <label htmlFor="title">TITLE</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <label htmlFor="price">price</label>
        <input
          id="price"
          name="price"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        <button type="submit">Submit</button>
      </form>
      <h2>Butun mehsullar</h2>
      <input type="text" placeholder="axtarin" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setSort('asc')}>Azdan coxa</button>
      <button onClick={() => setSort('desc')}>Coxdan aza</button>
      <div className={style.container}>
        <table style={{width:'100%',border:'1px solid black'}}>
          <tr style={{border:'1px solid black'}}>
            <th style={{border:'1px solid black'}}>image</th>
            <th style={{border:'1px solid black'}}>title</th>
            <th style={{border:'1px solid black'}}>price</th>        
            <th style={{border:'1px solid black'}}>əməliyyat</th>        
          </tr>

          {filteredData &&
            filteredData.map((item) => (
              <tr>
                <td style={{border:'1px solid black'}}>
                  <img style={{width:'80px'}} src={item.image} alt="" />
                </td>
                <td style={{border:'1px solid black'}}>{item.title}</td>
                <td style={{border:'1px solid black'}}>{item.price}</td>
                <td style={{border:'1px solid black'}}>
                  <button onClick={() => deleteProduct(item._id)}>Sil</button>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default AdminSection;
