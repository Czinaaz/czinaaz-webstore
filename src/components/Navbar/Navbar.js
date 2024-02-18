import React from "react";
import { Link } from "react-router-dom";
import css from "./Navbar.module.css";
import { CiSearch } from "react-icons/ci";
// import { CiMenuBurger } from "react-icons/ci";
// import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import Logo from '../../img/logo.avif'

export const Navbar = () => {

  const [data, setdata] = useState(false);
  // const [menu, setmenu] = useState(false);    

  const inputhandler = () => {
      setdata(!data)
  }

  // const menuhandler = () => {
  //     setmenu(!menu)
  // }

  return (
  <div className={css.navbar}>
    <div>
      <div className={css.inputDiv} onClick={inputhandler}>
      <input className={css.input_item} type="text" placeholder="Type to search" />
      <CiSearch className={css.searchBtn} />

      </div>
      {/* <IoCloseSharp onClick={inputhandler} className={css.closeBtn} />
      <CiMenuBurger  className={css.burger} onClick={menuhandler}/> */}
    </div>
    <div>
      <div>
        <div>
        {/* SearchIcon */}
        </div>
        {/* MenuIcon */}
      </div>
      <div className={css.img}>
      <img width={150} src={Logo} alt=""/>
      </div>
    </div>
    <div className={css.menu_bar}>
      <Link className={css.menu_item} to="/">Home</Link>
      <Link className={css.menu_item} to="/contact">Contact</Link>
      <Link className={css.menu_item} to="/privacy">Privacy</Link>
      <Link className={css.menu_item} to="/loginform">Login</Link>
      <Link className={css.menu_item} to="/signup">Signup</Link>
    </div>
  </div>
  );
};


export default Navbar;