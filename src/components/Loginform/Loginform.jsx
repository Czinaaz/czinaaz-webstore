import React from "react";
// import { useState } from "react";
import css from './Loginform.module.css';

export const Loginform = () => {
    
    
    return (
        <div >
            <form className={css.container} >
                <label>Email</label>
                <input
                    className={css.inputs}
                    type="email"
                    name="email"
                    placeholder="example: user@user.com"
                    required
                ></input>
                <label>Password</label>
                <input
                    className={css.inputs}
                    type="password"
                    name="password"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                ></input>
                <button className={css.btn} type="submit">Log in</button>
            </form>
        </div>
    )
};

export default Loginform;
