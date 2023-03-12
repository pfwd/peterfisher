import React from "react"

import Layout from "../../components/layout"
import { graphql, PageProps } from "gatsby"
import PostList from "../../components/postList"

const BlogPage = ({ data }: PageProps<Queries.BlogPageQuery>) => (
  <Layout>
    <h2>Latest posts</h2>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <>
        <PostList data={node.frontmatter} key={node.id} />
      </>
    ))}
  </Layout>
)

export default BlogPage

export const pageQuery = graphql`
  query BlogPage {
    allMarkdownRemark(
      filter: {
        frontmatter: { type: { eq: "blog" }, status: { eq: "published" } }
      }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          id
          frontmatter {
            excerpt
            slug
            title
            status
          }
        }
      }
    }
  }
`
