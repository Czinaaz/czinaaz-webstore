// import React, { useState, useEffect } from 'react';
// import css from './Products.module.css'; 

// function ProductList() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(response => response.json())
//       .then(data => {
//         setProducts(data);
//       })
//       .catch(error => {
//         console.error('System error:', error);
//       });
//   }, []); 

//   return (
//     <div>
//       <h2>Product list</h2>
//       <div className={css.product_list}> 
//         {products.map(product => (
//           <div key={product.id} className={css.product}> 
//             <h3>{product.title}</h3>
//             <p>{product.description}</p>
//             <p>Price: ${product.price}</p>
//             <img src={product.image} alt={product.title} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductList;


import React from 'react';
import list from '../../../data';
import Shopkart from '../Shopkart/Shopkart';
import css from './Products.module.css';
// import { useState } from 'react';

const Products = ({handleClick}) => {
  return (
    <section className={css.product_list}>
      {list.map((list) => (
        <Shopkart key={list.id} item={list} handleClick={handleClick} />  
      ))}
    </section>
  );
};

export default Products;
