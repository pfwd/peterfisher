import React from "react"

import Layout from "../../components/layout"
import {graphql} from "gatsby";
import TalkList from "../../components/talkList";

const IndexPage = ({data}) => (
    <Layout>
        <h2>Latest talks</h2>
        { data.allMarkdownRemark.edges.map (({ node }) => (
            <TalkList data={node.frontmatter} key={node.id}/>
        ))}

    </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "talk"}}}, sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            slug
            title
            events {
                title
                date
                link
                location
            }
          }
        }
      }
    }
  }
`
