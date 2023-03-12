import React from "react"
import Layout from "../components/layout"
import TalkList from "../components/talkList"
import { graphql, PageProps } from "gatsby"
import Seo from "../components/seo"
import * as styles from "./site.module.css"
import Link from "./../components/link"
import PostList from "./../components/postList"

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  return (
    <Layout>
      <Seo title="Peter Fisher PHP Contractor" />
      <div className={styles.hero}>
        <p>
          Hi, I&apos;m Peter. A <strong>UK-based PHP contractor</strong> and{" "}
          <strong>consultant</strong> at{" "}
          <a
            href="http://websomatic.co.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Websomatic
          </a>
          , developing <strong>API&apos;s</strong> and <strong>Web Apps</strong>{" "}
          using <strong>PHP</strong>, <strong>Python</strong>,{" "}
          <strong>Docker</strong> and <strong>JavaScript</strong>. I{" "}
          <strong>teach programming</strong> and I&apos;m a video instructor at
          Manning Publications and Packt Publications. I am also the{" "}
          <strong>host</strong> of the{" "}
          <a
            href="https://howtocodewell.fm"
            target="_blank"
            rel="noopener noreferrer"
          >
            How To Code Well podcast
          </a>{" "}
          and{" "}
          <a
            href="https://youtube.com/howtocodewell"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube channel
          </a>
          .
        </p>
      </div>

      <div className={styles.summary}>
        <img
          alt="Peter Fisher Freelance Web Developer"
          src="https://1.gravatar.com/avatar/74ae5c84e2bfdccfbbe56ea0bd556af5?s=96&amp;r=g"
        />
        <p>
          I have <strong>20 years experience in web development</strong> and can
          be hired as a contractor, a consultant, or teacher. My specialism is
          in <strong>PHP</strong> using <strong>Symfony</strong> and{" "}
          <strong>Laravel</strong> or <strong>Flask</strong> and{" "}
          <strong>Django</strong> with <strong>Python</strong>. I can also work
          with <strong>Gatsby</strong>, <strong>React</strong> and{" "}
          <strong>VueJs</strong>. For a complete list of my skills and
          experience please see my{" "}
          <a
            href="https://github.com/pfwd/cv"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
          .
        </p>
      </div>

      <h1>Upcoming talks</h1>
      <p>
        I have given various <Link to={"/talks/"}>talks</Link> ranging from web
        frameworks to Docker
      </p>

      {data.talks.edges.map(({ node }) => (
        <TalkList data={node.frontmatter} key={node.id} />
      ))}

      <h1>Latest posts</h1>
      {data.posts.edges.map(({ node }) => (
        <PostList data={node.frontmatter} key={node.id} />
      ))}
    </Layout>
  )
}
export default IndexPage

export const pageQuery = graphql`
  query IndexPage {
    talks: allMarkdownRemark(
      limit: 1
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
            brief
            events {
              title
              date
              location
            }
          }
        }
      }
    }
    posts: allMarkdownRemark(
      filter: {
        frontmatter: { type: { eq: "blog" }, status: { eq: "published" } }
      }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            excerpt
            slug
            title
          }
        }
      }
    }
  }
`
