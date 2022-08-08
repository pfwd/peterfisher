import React from "react"

import Layout from "../../components/layout"
import {graphql} from "gatsby";
import PostList from "../../components/postList";

const BlogPage = ({data}) => (
    <Layout>
        <h2>Latest posts</h2>
        { data.allMarkdownRemark.edges.map (({ node }) => (<>
            <PostList data={node.frontmatter} key={node.id}/>
        </>))}

    </Layout>
)

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "blog"},  status: {eq: "published"}}}, sort: { order: DESC, fields: [frontmatter___date] }) {
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
