import React from 'react'
import style from './Header.module.scss'
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";



const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.ust} >
        <div className={style.ustContainer}>
          <div className={style.icons}>
          <FaTwitter />
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          </div>
          <div className={style.logins}>
            <button>Sponsor</button>
            <button className={style.loginBtn}>Login</button>
          </div>
        </div>
      </div>
      <div className={style.alt}>
        <div className={style.logo}>
          <h2>A D O P T E D</h2>
        </div>
        <div className={style.navigation}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/basket">Basket</a></li>
            <li><a href="/wishlist">Wishlist</a></li>
            <li><a href="/admin">Admin</a></li>
            <li><a href="">Contact</a></li>
          </ul>
          <GiHamburgerMenu className={style.burger} />
        </div>
      </div>
    </div>
  )
}

export default Header