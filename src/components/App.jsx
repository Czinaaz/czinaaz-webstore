import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Navbar } from "./Navbar/Navbar";
import { Contact } from './Contact/Contact';
import {Loginform} from "./Loginform/Loginform";
import {Privacy} from "./Privacy/Privacy";
import {Signup} from "./Signup/Signup";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export const App = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="/loginform" element={<Loginform/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
        <Footer/>
    </div>
  );
};

export default App;
