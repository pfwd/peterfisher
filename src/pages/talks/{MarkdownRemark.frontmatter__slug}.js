import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import AboutMe from "../../components/aboutMe";

export default function TalkTemplate({ data: { markdownRemark } }) {
    const { frontmatter, html } = markdownRemark;
    return (
        <Layout>
            <Seo title={frontmatter.title} />
            <h1>{frontmatter.title}</h1>
            <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
            {frontmatter.slide_url !=='' && renderSlides(frontmatter)}
            {frontmatter.video_url !=='' && renderVideo(frontmatter)}
            {frontmatter.events !== null && renderEvents(frontmatter)}
            <AboutMe/>
        </Layout>
    );
}

const renderEvents = function(frontmatter)
{
    return (<>
        <h2>Events</h2>
        <ul>
            {frontmatter.events.map(event => (
                <li key={event.link}><a href={event.link} target={'_blank'} rel="noreferrer">{event.title}</a> in {event.location} {event.date}</li>
            ))}
        </ul>
    </>)
}
const renderSlides = function(talk)
{
    return (<>
        <h2>Slides</h2>
        <div className="iframeContainer">
        <iframe
                frameBorder="0"
                src={talk.slide_url}
                title="Using a framework or not?"
                allowFullScreen="true"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                className="talkIframe iframe"
                data-ratio="1.78343949044586"></iframe>
        </div>
    </>)
}

const renderVideo = function(talk)
{
    return (<>
        <h2>Video</h2>
        <div className="iframeContainer">
        <iframe
                className="iframe"
                src={talk.video_url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
        </div>
    </>)
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id } ) {
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
`;