// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Link from "./link"
import styles from "./header.module.css"

const Header = ({ siteTitle, menuLinks }) => (
  <header className={styles.header}>
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <h1  className={styles.brandLink}>
          <Link to="/" >{siteTitle}</Link>
        </h1>

          <nav role="navigation" className={styles.menu}>
            <ul className={styles.menu}>
              {menuLinks.map(link => (
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
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
