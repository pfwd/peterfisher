import React from "react"

import Layout from "../../components/layout"
import { graphql, PageProps } from "gatsby"
import TalkList from "../../components/talkList"

const IndexPage = ({ data }: PageProps<Queries.TalkPageQuery>) => (
  <Layout>
    <h2>Latest talks</h2>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <TalkList data={node.frontmatter} key={node.id} />
    ))}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query TalkPage {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "talk" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
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
