import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import * as styles from "./site.module.css"

import fasthosts from "../images/fasthosts.png";
import agrantec from "../images/agrantec.png";
import above_the_line from "../images/above_the_line.png";
import fs4s from "../images/fs4s.png";
import kloc from "../images/kloc.jpg";
import ecancer from "../images/ecancer.png";

const IndexPage = () => (
  <Layout>
    <SEO title="Peter Fisher Freelance Web Developer" />
    <div className={styles.hero}>
        <p>Hi, I Peter. I'm a <strong>UK-based PHP contractor</strong> and <strong>consultant</strong> at <a href="http://websomatic.co.uk" target="_blank" rel="noopener noreferrer">Websomatic</a>, developing <strong>API's</strong> and <strong>Web Apps</strong> using <strong>PHP</strong>, <strong>Python</strong>, <strong>Docker</strong> and <strong>JavaScript</strong>.
          I <strong>teach programming</strong> and I'm a video instructor at Manning Publications and Packt Publications.
          I am also the <strong>host</strong> of the <a href="https://howtocodewell.fm" target="_blank" rel="noopener noreferrer">How To Code Well podcast</a> and <a href="https://youtube.com/howtocodewell" target='_blank' rel="noopener noreferrer">YouTube channel</a>.</p>
    </div>

      <div className={styles.summary}>
        <img alt="Peter Fisher Freelance Web Developer" src="http://1.gravatar.com/avatar/74ae5c84e2bfdccfbbe56ea0bd556af5?s=96&amp;r=g"/>
          <p>I develop <strong>API's</strong>, <strong>e-commerce systems</strong> and <strong>Micro-sites</strong>. I have worked for startups, SME's and corporates all over the world. I have <strong>20 years experience in web development</strong> and can be hired as a contractor, a consultant, or teacher. My specialism is in <strong>PHP</strong> using <strong>Symfony</strong> and <strong>Laravel</strong> or <strong>Flask</strong> and <strong>Django</strong> with <strong>Python</strong>. I prefer to code in <strong>vanilla JavaScript</strong> but I can work with <strong>Gatsby</strong>, <strong>React</strong> and <strong>VueJs</strong>. For a complete list of my skills and experience please see my <a href="https://github.com/pfwd/cv" target='_blank'  rel="noopener noreferrer">CV</a>.</p>
      </div>

      <div className={styles.logoGrid}>
          <img alt='ecancer' src={ecancer} className={styles.invert}/>
          <img alt='Fasthosts' src={fasthosts} className={styles.greyscale}/>
          <img alt='Agrantec' src={agrantec} className={styles.greyscale}/>
          <img alt='Above The Line' src={above_the_line} className={styles.greyscale}/>
          <img alt='FS4S' src={fs4s} className={styles.greyscale}/>
          <img alt='Kloc' src={kloc}  className={styles.greyscale}/>
      </div>
  </Layout>
)

export default IndexPage
