/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
// import PropTypes from "prop-types"
import {StaticQuery, graphql} from "gatsby"
import {Helmet} from "react-helmet"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import menuLinks from "../data/menu_links.json"
import footerLinks from "../data/footer_links.json"

const Layout = ({children}) => (
    <StaticQuery
        query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
        render={data => (
            <React.Fragment>
                <Helmet>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
                          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
                          crossOrigin="anonymous"/>
                </Helmet>
                <div className="site">
                    <Header menuLinks={menuLinks.links} siteTitle={data.site.siteMetadata.title}/>
                    <div class="container">
                        <div class="inner-container">
                            {children}
                        </div>
                    </div>
                    <Footer footerLinks={footerLinks.links}/>
                </div>
            </React.Fragment>
        )}
    />
)

export default Layout
