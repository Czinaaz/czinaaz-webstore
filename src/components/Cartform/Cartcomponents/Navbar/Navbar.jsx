import React from "react";
import css from './Navbar.module.css';
import { TiShoppingCart } from "react-icons/ti";

const Navbar = ({setShow, size}) => {
    return (
        <nav>
            <div className={css.nav_box}>
                <span className={css.my_shop} onClick={() => setShow(true)} >My shop</span>
                <div className={css.cart} onClick={() => setShow(false)}>
                    <span><TiShoppingCart /></span>
                    <span>{size}</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;