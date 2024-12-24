import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import style from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={style.footer}>
      <p>Copyright ©2024 All rights reserved | This template is made with <FaRegHeart /> by Colorlib</p>
    </div>
  )
}

export default Footer