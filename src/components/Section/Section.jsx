import React from 'react'
import css from './Section.module.css';


export function Section() {
  return (
    <div>
      <div className={css.kit_container}>
        <div className={css.img_container}>
          <img className={css.img_kit} src='https://m.media-amazon.com/images/I/81fow0-E-SL._AC_UF1000,1000_QL80_.jpg' alt="" />
        </div>
        <div className={css.kit_content}>
          <h1 className={css.heading_kit}>Kits.</h1>
          <p className={css.kit_description}>
            Bundle up and save on our best combo kits for face, body, and hair.
            These thoughtful combinations have everything you need to look great
            and feel fresh, day after day. Shop kits
          </p>
          <button type='button' className={css.btn_kit}>Shop kits</button>
        </div>
      </div>
    </div>
  )
}

export default Section
