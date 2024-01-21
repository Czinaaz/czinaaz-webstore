import { HiArrowLeft } from "react-icons/hi";
import css from "./BackLink.module.css";


export const BackLink = ({ to, children }) => {
  return (
    <div className={css.links} to={to}>
      <HiArrowLeft size="24" />
      {children}
    </div>
  );
};
