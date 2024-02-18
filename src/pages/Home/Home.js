import React from "react";
import Cartform from "../../components/Cartform/Cartform";
import css from './Home.module.css'

export const Home = () => {
    return (
      <div>
        <div className={css.home_header}>
            <div className={css.home_container}>
                <h1>Hair</h1>
                <p>We believe no two strands are alike. That’s why we start with an in-depth analysis of your hair. Once we know its unique biology, we build a customized routine to match. No guesswork. Just science. (And great hair.)
                </p>
                <button className={css.shampBtn}>Shop shampoo</button>
            </div>
        </div>
        <Cartform/>
      </div>
    );
};
  