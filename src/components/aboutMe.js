import React from "react"
import * as styles from "./../pages/site.module.css"

const AboutMe = () => (<>
    <div className={styles.about_me}>
        <div className={styles.summary}>
            <img alt="Peter Fisher Contract Web Developer"
                 src="https://1.gravatar.com/avatar/74ae5c84e2bfdccfbbe56ea0bd556af5?s=96&amp;r=g"/>
            <p>Peter Fisher is a UK based PHP contractor with <strong>20 years experience in web development</strong> He
                can be hired to work
                with <strong>PHP</strong> using <strong>Symfony</strong> or <strong>Laravel</strong> or <strong>Flask</strong> and <strong>Django</strong> with <strong>Python</strong>.</p>
        </div>
    </div>
</>)

export default AboutMe
