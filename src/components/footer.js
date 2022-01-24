import PropTypes from "prop-types"
import React from "react"
import * as styles from "./footer.module.css"
import Link from "./link";

const Footer = ({ footerLinks }) => (
  <footer className={styles.footer}>
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
          <div className={styles.socialContainer}>
              <ul>
                  <li>
                      <a href='http://twitter.com/pfwd' target='_blank' rel="noopener noreferrer" className={styles.icon} >
                        <i className="fab fa-twitter"></i>
                      </a>
                  </li>
                  <li>
                     <a href='http://github.com/pfwd' target='_blank' rel="noopener noreferrer" className={styles.icon} >
                         <i className="fab fa-github"></i>
                     </a>
                  </li>
                  <li>
                      <a href='https://www.linkedin.com/in/peterrfisher' rel="noopener noreferrer" target='_blank' className={styles.icon} >
                          <i className="fab fa-linkedin"></i>
                      </a>
                  </li>
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
