import React from "react";
import css from './Signup.module.css';

export const Signup = () => {
    return (
        <div>
            <form  className={css.container}>
                <label>Name</label>
                <input
                    className={css.inputs}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    placeholder="Username"
                />
                <label>Email</label>
                <input
                    className={css.inputs}
                    type="email"
                    name="email"
                    placeholder="example: user@user.com"
                    required
                ></input>
                <label>Password</label>
                <input className={css.inputs} type="password" name="password" required />
                <button className={css.btn} type="submit">Register</button>
            </form>
        </div>
    )
};

export default Signup;