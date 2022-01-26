import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import AboutMe from "../../components/aboutMe";

export default function BlogPostTemplate({ data: { markdownRemark } }) {
    const { frontmatter, html } = markdownRemark;
    return (
        <Layout>
            <Seo title={frontmatter.title} />
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
            <AboutMe/>
        </Layout>
    );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "DD, MMMM YYYY")
        title
      }
    }
  }
`;