import { graphql, PageProps } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import AboutMe from "../../components/aboutMe"

export default function BlogPostTemplate({
  data,
}: PageProps<Queries.BlogPostQuery>) {
  const html = data.markdownRemark?.html ?? ""
  const title = data.markdownRemark?.frontmatter?.title ?? ""
  const date = data.markdownRemark?.frontmatter?.date ?? ""

  return (
    <Layout>
      <Seo title={title} />
      <h1>{title}</h1>
      <p>{date}</p>
      <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
      <AboutMe />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPost($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "DD, MMMM YYYY")
        title
      }
    }
  }
`
