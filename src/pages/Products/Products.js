import { useSearchParams } from "react-router-dom";
import { ProductList } from "../../components/ProductList/ProductList";
// import { SearchBox } from "../components/SearchBox";
import { getProducts } from "../../api/api";

export const Products = () => {
  const products = getProducts();
  const [searchParams] = useSearchParams();
  const productName = searchParams.get("name") ?? "";

  const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

//   const updateQueryString = (name) => {
//     const nextParams = name !== "" ? { name } : {};
//     setSearchParams(nextParams);
//   };

  return (
    <main>
      {/* <SearchBox value={productName} onChange={updateQueryString} /> */}
      <ProductList products={visibleProducts} />
    </main>
  );
};

// , setSearchParams