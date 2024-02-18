import React from "react";
import css from './Header.module.css'


const Header = () => {
    return (
        <div>
          <div className={css.headerElement}>
            <p>Free shipping on orders $40</p>
          </div>
        </div>
    )
};

export default Header;