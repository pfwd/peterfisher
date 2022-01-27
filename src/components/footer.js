import PropTypes from "prop-types"
import React from "react"
import * as styles from "./footer.module.css"

const Footer = () => (
  <footer className={styles.footer}>
      <div className={styles.innerContainer}>
          <div className={styles.socialContainer}>
              <ul>
                  <li>
                      <a href='https://twitter.com/pfwd' target='_blank' rel="noopener noreferrer" className={styles.icon} >
                        <i className="fab fa-twitter"></i>
                      </a>
                  </li>
                  <li>
                     <a href='https://github.com/pfwd' target='_blank' rel="noopener noreferrer" className={styles.icon} >
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
