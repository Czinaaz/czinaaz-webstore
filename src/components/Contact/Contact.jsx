import React from "react";
import css from './Contact.module.css';

export const Contact = () => {
    return (
        <section className={css.contact_section}>
            <div>
                <h2>Contact us</h2>
            </div>
            <div className={css.contact_info}>
                <div>
                    <h3>Address</h3>
                    <p>123 Main Street</p>
                    <p>City, Country</p>
                </div>
                <div>                 
                    <h3>Contact</h3>
                    <p>Phone: +123456789</p>
                    <p>Email: info@example.com</p>
                </div>
            </div>
            <div className={css.map}>
                {/* Wstaw tutaj mapę Google */}
                <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.6209775713197!2d-122.4194168845905!3d37.77492952177657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085875b05a27543%3A0xd5a6d4f11f8bcd7e!2sSan%20Francisco%2C%20California%2C%20USA!5e0!3m2!1sen!2spl!4v1645586601887!5m2!1sen!2spl"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                ></iframe>
            </div>
            {/* Address and contacts */}
       
            {/* Email Form */}
            <div className={css.email_form}>
                <h3>Send us a message</h3>
                <form>
                    <div>
                        <label htmlFor="email">Your Email:</label>
                        <input type="email" id="email" name="email" className={css.email_input} required />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" className={css.message_input} rows="4" required></textarea>
                    </div>
                    <button type="submit" className={css.send_button}>Send</button>
                </form>
            </div>
        </section>
    )
};

export default Contact;