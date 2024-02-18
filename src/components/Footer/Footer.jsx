import React from 'react';
import css from './Footer.module.css';
import Logo from '../../img/logo.avif';
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
          <div className={css.content}>
            <div className={css.top}>
                <div className={css.logo_details}>
                    <img width={100} src={Logo} alt=""/>
                </div>
            </div>
            <div className={css.link_boxes}>
                <ul className={css.box}>
                    <li className={css.link_name}>Company</li>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                    <Link to="/privacy">Privacy</Link>
                    </li>
                    <li>
                    <Link to="/loginform">Login</Link>
                    </li>
                    <li>
                    <Link to="/signup">Signup</Link>
                    </li>
                </ul>
                <ul className={css.box}>
                    <li className={css.link_name}>Services</li>
                    <li>
                    <a href="https://github.com/Czinaaz">App design</a>
                    </li>
                    <li>
                    <a href="https://github.com/Czinaaz">Web design</a>
                    </li>
                    <li>
                    <a href="https://github.com/Czinaaz">Logo design</a>
                    </li>
                    <li>
                    <a href="https://github.com/Czinaaz">Banner design</a>
                    </li>
                </ul>
                <ul className={css.box}>
                    <li className={css.link_name}>Account</li>
                    <li>
                    <a href="https://github.com/Czinaaz">Profile</a>
                    </li>
                    <li>
                    <a href="https://github.com/Czinaaz">My account</a>
                    </li>
                    <li>
                    <a href="https://github.com/Czinaaz">Prefrences</a>
                    </li>
                    <li>
                    <a href="https://github.com/Czinaaz">Purchase</a>
                    </li>
                </ul>
                <ul className={css.box}>
                    <li className={css.link_name}>Courses</li>
                    <li>
                    <a href="https://github.com/Czinaaz">Web Development</a>
                    </li>
                    <li>
                    <a href="https://github.com/Czinaaz">App Development</a>
                    </li>
                    <li>
                    <a href="https://github.com/Czinaaz">Video Editing</a>
                    </li>
                    <li>
                    <a href="https://github.com/Czinaaz">Content Writting</a>
                    </li>
                </ul>
                <div className={css.box} >
                    <ul className={css.input_box }>
                        <li className={css.link_name}>Subscribe</li>
                        <li>
                        <input type="text" placeholder="Enter your email" />
                        </li>
                        <li>
                        <input type="button" value="Subscribe" />
                        </li>
                    </ul>
                </div>
           
            </div>
        </div>
        <div className={css.bottom_details}>
            <div className={css.bottom_text}>
                <div className={css.copyright_text}>
                    <p>Copyright © 2024</p>
                    <a href="https://github.com/Czinaaz">Czinaaz</a>
                    <span>All rights reserved</span>
                </div>
                {/* <div className={css.policy_terms}>
                    <a href="link">Privacy policy</a>
                    <a href="link">Terms & condition</a>
                </div> */}
            </div>
        </div>
    </footer>

  )
}

export default Footer
