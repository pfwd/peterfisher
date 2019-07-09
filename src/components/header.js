// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Link from "./link"
import styles from "./header.module.css"

const Header = ({ siteTitle, menuLinks }) => (
  <header className={styles.header}>
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <h1 style={{ margin: 0, flex: 1 }}>
          <Link to="/" className={styles.brandLink}>{siteTitle}</Link>
        </h1>
        <div>
          <nav>
            <ul style={{ display: "flex", flex: 1 }}>
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
