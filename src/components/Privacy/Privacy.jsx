import React from "react";
import css from './Privacy.module.css';
export const Privacy = () => {
    return (
        <section id="privacy" className={css.privacy_section}>
            <h2>Privacy Policy</h2>
            <div className={css.privacy_content}>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum, nisl eget
                consectetur ultrices, purus arcu fermentum arcu, a ultricies nisi purus ac est. In
                finibus arcu ut justo condimentum, at vehicula leo blandit. Vestibulum convallis turpis
                nulla, non iaculis justo euismod a. Sed aliquam mi vel lacinia suscipit. Nullam
                malesuada est ut nisi pharetra tincidunt.
                </p>
                <p>
                Donec vehicula libero vel turpis commodo, in aliquam velit pulvinar. Praesent nec
                consequat leo. Nullam sagittis risus in nibh viverra, a scelerisque ipsum feugiat. Sed
                euismod lorem id nunc congue, vitae commodo turpis tincidunt. In hac habitasse platea
                dictumst.
                </p>
                <p>
                Etiam id fringilla purus. Vestibulum tincidunt tellus a sapien efficitur, nec fermentum
                ligula accumsan. Quisque ac sem et arcu rhoncus pulvinar. Nam eu odio at nunc
                fringilla cursus. Integer vel consequat ante, non tincidunt libero.
                </p>
            </div>
        </section>
    )
};

export default Privacy;