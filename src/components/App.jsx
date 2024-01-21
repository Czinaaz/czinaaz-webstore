import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
// import { ProductDetails } from "../pages/ProductDetails/ProductDetails";
import { Products } from "../pages/Products/Products";
import { Layout } from "./Layout/Layout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
      </Route>
    </Routes>
  );
};

export default App;
