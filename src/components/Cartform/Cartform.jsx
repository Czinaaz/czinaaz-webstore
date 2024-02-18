import React, { useState } from "react";
import Navbar from "../Cartform/Cartcomponents/Navbar/Navbar";
import css from './Cartform.module.css';
import Shopkart from "./Cartcomponents/Shopkart/Shopkart";
import Products from "./Cartcomponents/Products/Products";
import Cart from "./Cartcomponents/Cart/Cart";

const Cartform = () => {
    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);
    const [warning, setWarning] = useState(false);

    const handleClick = (item) => {
    let ispresent = false
        cart.forEach((product) => {
            if(item.id === product.id) ispresent = true;
        });
        if (ispresent) {
            setWarning(true)
            setTimeout(() => {
                setWarning(false)
            }, 2000)
            return;
        }
        setCart([...cart, item])

    };

    const handlechange = (item, d) => {

        let ind = -1;
        cart.forEach((data, index) => {
            if(data.id === item.id) ind = index;
        })
        const tempArr = cart;

        tempArr[ind].amount += d;
        if(tempArr[ind].amount === 0) tempArr[ind].amount = 1;
        setCart([...tempArr]);
    };

    return (
        <div>
            <div className={css.cartform}>
                <Navbar setShow={setShow} size={cart.length} />
                <h1 className={css.heading_content}>
                    Meet the internet`s favourite skincare.
                </h1>
                {show ? (
                    <Products handleClick={handleClick}/>
                ) : (
                    <Cart cart={cart} setCart={setCart} handlechange={handlechange} />
                )} { warning && (
                    <div className={css.warning}>Item is already added into your card</div>
                )

                }
                <Shopkart/>


            </div>
        </div>
    );
};

export default Cartform;