import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom'; 

export const Layout = () => {
  return (
    <div>
      <header>
        <div>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          GoMerch Store
        </div>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          {/* <Link to="/about">About</Link> */}
          <Link to="/products">Products</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};


export default Layout;