import { graphql, PageProps } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import AboutMe from "../../components/aboutMe"

export default function TalkTemplate({
  data,
}: PageProps<Queries.TalkPostQuery>) {
  const title = data.markdownRemark?.frontmatter?.title ?? ""
  const html = data.markdownRemark?.html ?? ""

  const slide_url = data.markdownRemark?.frontmatter?.slide_url ?? ""
  const video_url = data.markdownRemark?.frontmatter?.video_url ?? ""
  const events = data.markdownRemark?.frontmatter?.events ?? null

  return (
    <Layout>
      <Seo title={title} />
      <h1>{title}</h1>
      <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
      {slide_url !== "" && renderSlides(slide_url)}
      {video_url !== "" && renderVideo(video_url)}
      {events !== null && renderEvents(events)}
      <AboutMe />
    </Layout>
  )
}

const renderEvents = function (
  events: ReadonlyArray<{
    readonly title: string | null
    readonly date: string | null
    readonly link: string | null
    readonly location: string | null
  } | null>
) {
  return (
    <>
      <h2>Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event?.link}>
            <a href={event?.link ?? ""} target={"_blank"} rel="noreferrer">
              {event?.title}
            </a>{" "}
            in {event?.location} {event?.date}
          </li>
        ))}
      </ul>
    </>
  )
}
const renderSlides = function (slide_url: string) {
  return (
    <>
      <h2>Slides</h2>
      <div className="iframeContainer">
        <iframe
          frameBorder="0"
          src={slide_url}
          title="Using a framework or not?"
          allowFullScreen
          className="talkIframe iframe"
          data-ratio="1.78343949044586"
        ></iframe>
      </div>
    </>
  )
}

const renderVideo = function (video_url: string) {
  return (
    <>
      <h2>Video</h2>
      <div className="iframeContainer">
        <iframe
          className="iframe"
          src={video_url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query TalkPost($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        slide_url
        video_url
        events {
          title
          date
          link
          location
        }
      }
    }
  }
`
