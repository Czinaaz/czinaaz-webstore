import React from 'react'
import css from './Shopkart.module.css';
// import list from '../../../data';

const Shopkart = ({item, handleClick}) => {
    if(item) {
        const { title, price, img} = item;
        
        const newhandleclick =() => {
            handleClick(item)
        }

        return (
            <div className={css.cards}>
                <div className={css.image_box} >
                    <img className={css.imgbottle} src={img} alt='' />
                </div>
                <div className={css.details}>
                    <p className={css.details_title}>{title}</p>
                    <p className={css.details_price}>Price: $ {price}</p>
                    <button onClick={newhandleclick}>Add to Cart</button>
                </div>
            </div> 
        );
    // } else {
    //     return (
    //         <p>There is no item</p>
    //     )
    }

};

export default Shopkart;



// import React from 'react';
// import css from './Shopkart.module.css';

// const Shopkart = ({ item, handleClick }) => {
//   if (!item) {
//     return null;
//   }

//   const { title, price, img } = item;

//   return (
//     <section>
//       <div className={css.cards}>
//         <div className={css.image_box}>
//           <div>
//             <img className={css.imgbottle} src={img} alt='' />
//           </div>
//           <div className={css.details}>
//             <p>{title}</p>
//             <p>Price : {price}$</p>
//             <button onClick={() => handleClick(item)}>Add to Cart</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Shopkart;


