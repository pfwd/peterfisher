import PropTypes from "prop-types"
import React from "react"
import styles from "./footer.module.css"
import Link from "./link";

const Footer = ({ footerLinks }) => (
  <footer className={styles.footer}>
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
          <div className={styles.socialContainer}>
              <ul>
                  <li><i class="fab fa-twitter"></i><a href='http://twitter.com/pfwd' target='_blank' rel="noopener noreferrer" className={styles.icon} >pfwd</a></li>
                  <li><i class="fab fa-github"></i><a href='http://github.com/pfwd' target='_blank' rel="noopener noreferrer" className={styles.icon} >pfwd</a></li>
                  <li><i class="fab fa-linkedin"></i><a href='https://www.linkedin.com/in/peterrfisher' rel="noopener noreferrer" target='_blank' className={styles.icon} >peterrfisher</a></li>
              </ul>
          </div>
          <div className={styles.socialContainer}>
              <ul>
                  <li><i className="far fa-envelope"></i><a className={styles.icon} href="mailto:hello@websomatic.co.uk">hello@websomatic.co.uk</a></li>
                  <li><i className="fas fa-phone"></i><a className={styles.icon} href="tel:+44-793545054">07793545054</a></li>
                  <li><i className="fab fa-skype"></i><a className={styles.icon} href='skype:peter.fisher.websomatic?chat' >Skype</a></li>
              </ul>
          </div>
          <nav className={styles.hideMobile}>
                <ul style={{ display: "flex", flex: 1 }}>
              {footerLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
