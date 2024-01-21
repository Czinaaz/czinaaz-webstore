import { Link, useLocation } from "react-router-dom";


export const ProductList = ({ products }) => {
  const location = useLocation();

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`${product.id}`} state={{ from: location }}>
            <img src="https://via.placeholder.com/200x100" alt="" />
            <h3>{product.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};
